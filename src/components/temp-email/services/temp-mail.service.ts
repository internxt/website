import axios from 'axios';
import { MessageObjProps } from '../types/types';

export const EMAIL_STORAGE_KEY = 'email';
export const SETUP_TIME_STORAGE_KEY = 'setupTime';
export const INBOX_STORAGE_KEY = 'inbox';

export const TIME_NOW = new Date().getTime();
export const MAX_HOURS_BEFORE_EXPIRE_EMAIL = 5 * 60 * 60 * 1000;

const encodedAuth = btoa(process.env.NEXT_PUBLIC_IOS_APP_ID as string);

const getEmail = async () => {
  const email = await axios.get(`${window.origin}/api/temp-mail/create-email`, {
    headers: {
      Authorization: `Bearer ${encodedAuth}`,
    },
  });

  return email.data;
};

const fetchInbox = async (email: string, token: string) => {
  const inbox = await axios.get(`${window.origin}/api/temp-mail/get-inbox?token=${token}&email=${email}`, {
    headers: {
      Authorization: `Bearer ${encodedAuth}`,
    },
  });

  const { data } = inbox;

  return data;
};

const createEmail = async () => {
  const fetchEmail = await getEmail();

  return fetchEmail;
};

const fetchAndFormatInbox = async (email: string, userToken: string): Promise<MessageObjProps[] | undefined> => {
  try {
    const inbox = await fetchInbox(email, userToken);

    if (inbox == null) return;

    if (inbox === 'Email has expired') {
      throw new Error('Auto fetching email');
    }

    if (inbox.length > 0) {
      const messages = inbox.map((item, index) => {
        return {
          ...item,
          opened: false,
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
