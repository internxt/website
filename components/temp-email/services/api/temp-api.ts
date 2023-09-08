import axios from 'axios';

async function createEmail() {
  const email = await axios.get(`${window.origin}/api/temp-mail/create-email`);

  return email.data;
}

const getInbox = async (token: string) => {
  const inbox = await axios.get(`${window.origin}/api/temp-mail/get-inbox?token=${token}`);

  return inbox.data.email;
};

export { createEmail, getInbox };
