import axios from 'axios';
import { MessageObjProps } from '../types/types';

export const EMAIL_STORAGE_KEY = 'email';
export const SETUP_TIME_STORAGE_KEY = 'setupTime';
export const INBOX_STORAGE_KEY = 'inbox';

export const MAX_HOURS_BEFORE_EXPIRE_EMAIL = 5 * 60 * 60 * 1000;

const getEmail = async () => {
  const email = await axios.get(`${window.origin}/api/temp-mail/create-email`);

  return email.data;
};

const fetchInbox = async (token: string) => {
  const inbox = await axios.get(`${window.origin}/api/temp-mail/get-inbox?token=${token}`);

  const { data } = inbox;
  console.log(data);

  if (data.expired) {
    return { expired: data.expired };
  } else {
    return data.emails;
  }
};

const createEmail = async () => {
  try {
    const fetchEmail = await getEmail();

    return fetchEmail;
  } catch (err) {
    const error = err as Error;
  }
};

const fetchAndFormatInbox = async (
  userToken: string,
  messagesLength: number,
): Promise<MessageObjProps[] | undefined> => {
  try {
    const inbox = await fetchInbox(userToken);

    if (inbox.expired || inbox == null) return;
    if (inbox.length > 0) {
      let messagesId = messagesLength;
      const messages = inbox.map((item, index) => {
        messagesId++;
        return {
          ...item,
          opened: false,
          id: messagesId,
        };
      });

      return messages;
    }

    return [];
  } catch (err) {
    const error = err as Error;
    throw new Error(error.message);
  }
};

function removeLocalStorage() {
  localStorage.removeItem(EMAIL_STORAGE_KEY);
  localStorage.removeItem(SETUP_TIME_STORAGE_KEY);
  localStorage.removeItem(INBOX_STORAGE_KEY);
  localStorage.removeItem('selectedMessage');
}

export { createEmail, fetchInbox, fetchAndFormatInbox, removeLocalStorage };
