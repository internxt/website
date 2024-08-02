import Mailjs from '@cemalgnlts/mailjs';

import { MessageObjProps, UserProps } from '../types/types';
import rateLimitClientMiddleware from '@/components/utils/rate-limit';

export const EMAIL_STORAGE_KEY = 'temp-mail-user-data';
export const SETUP_TIME_STORAGE_KEY = 'setupTime';
export const INBOX_STORAGE_KEY = 'inbox';
export const MESSAGES_INFO = 'info-of-messages';
export const SELECTED_MESSAGE = 'selectedMessage';

export const TIME_NOW = new Date().getTime();
export const MAX_HOURS_BEFORE_EXPIRE_EMAIL = 5 * 60 * 60 * 1000;

const mailjs = new Mailjs();

// const CONVERTER_URL = process.env.NEXT_PUBLIC_FILE_CONVERTER_API;
const CONVERTER_URL =
  process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_FILE_CONVERTER_API : 'http://localhost:3000';

const fetchNewEmail = async (): Promise<UserProps> => {
  return rateLimitClientMiddleware(
    'create-email-limiter',
    async () => {
      const account = await mailjs.createOneAccount();

      const address = account.data.username;
      const password = account.data.password;

      const emailObj = {
        address,
        token: password,
      };
      return emailObj;
    },
    4,
  );
};

const fetchInbox = async (email: string, token: string) => {
  return rateLimitClientMiddleware('fetch-inbox-limiter', async () => {
    await mailjs.login(email, token);

    const messages = await mailjs.getMessages();

    const mails = messages.data
      ? messages.data.map((mail) => {
          return {
            body: mail.intro,
            date: mail.createdAt,
            from: mail.from.address,
            to: mail.to.address,
            html: mail.intro,
            subject: mail.subject,
            id: mail.id,
            seen: mail.seen,
          };
        })
      : [];

    return mails;
  });
};

const getMessageData = async (email: string, token: string, messageId: string): Promise<MessageObjProps> => {
  return rateLimitClientMiddleware('get-message-limiter', async () => {
    await mailjs.login(email, token);

    const messageData = await mailjs.getMessage(messageId);

    const selectedMessage = messageData.data;

    const messageObj = {
      body: selectedMessage.intro,
      date: selectedMessage.createdAt,
      from: selectedMessage.from.address,
      to: selectedMessage.to.address,
      html: selectedMessage.html.join(''),
      subject: selectedMessage.subject,
      id: selectedMessage.id,
      seen: selectedMessage.seen,
    };

    return messageObj;
  });
};

const fetchAndFormatInbox = async (email: string, userToken: string): Promise<MessageObjProps[] | undefined> => {
  try {
    const inbox = await fetchInbox(email, userToken);

    if (inbox == null) return;

    if (inbox === 'Email has expired') {
      throw new Error('Auto fetching email');
    }

    return inbox;
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};

function saveInfoOfMessageSelectedInLocalStorage(parsedInfoInSessionStorage, messageInfo) {
  const infoOfMessagesObj = JSON.stringify([...parsedInfoInSessionStorage, messageInfo]);
  localStorage.setItem(MESSAGES_INFO, infoOfMessagesObj);
}

function saveInboxInLocalStorage(inboxInLocalStorage, messageInfoId: string) {
  const messageInLocalStorageInbox = inboxInLocalStorage.find((message) => message.id === messageInfoId);
  messageInLocalStorageInbox.seen = true;
  localStorage.setItem(INBOX_STORAGE_KEY, JSON.stringify(inboxInLocalStorage));
}

function removeLocalStorage() {
  localStorage.removeItem(EMAIL_STORAGE_KEY);
  localStorage.removeItem(SETUP_TIME_STORAGE_KEY);
  localStorage.removeItem(INBOX_STORAGE_KEY);
  localStorage.removeItem(MESSAGES_INFO);
  localStorage.removeItem(SELECTED_MESSAGE);
}

export {
  fetchNewEmail,
  fetchInbox,
  getMessageData,
  fetchAndFormatInbox,
  saveInfoOfMessageSelectedInLocalStorage,
  saveInboxInLocalStorage,
  removeLocalStorage,
};
