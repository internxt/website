import axios from 'axios';
import { MessageObjProps } from '../HeroSection';

async function createEmail() {
  const email = await axios.get(`${window.origin}/api/temp-mail/create-email`);

  return email.data;
}

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

export { createEmail, fetchInbox, fetchAndFormatInbox };
