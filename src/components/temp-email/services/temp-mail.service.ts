import axios from 'axios';
import { MessageObjProps } from '../HeroSection';

async function createEmail() {
  const email = await axios.get(`${window.origin}/api/temp-mail/create-email`);

  return email.data;
}

const fetchInbox = async (token: string) => {
  const inbox = await axios.get(`${window.origin}/api/temp-mail/get-inbox?token=${token}`);

  const { data } = inbox;

  if (data.expired) {
    return { expired: data.expired };
  } else {
    return data.emails;
  }
};

const fetchAndFormatInbox = async (userToken: string): Promise<MessageObjProps[] | undefined> => {
  try {
    const inbox = await fetchInbox(userToken);

    if (inbox.expired || inbox == null) return;

    if (inbox.length > 0) {
      const messages = inbox.map((item, index) => {
        return {
          ...item,
          opened: false,
          id: index,
        };
      });

      return messages;
    }

    return [];
  } catch (err) {
    const error = err as Error;
    console.error('[ERROR FETCHING INBOX]:', error.message);
    throw new Error(`Something went wrong`);
  }
};

export { createEmail, fetchInbox, fetchAndFormatInbox };
