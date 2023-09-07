import axios from 'axios';

const BASE_URL = 'https://api.tempmail.lol';

async function createEmail() {
  const email = await axios.get(`${window.origin}/api/temp-mail/create-email`);

  return email.data;
}

async function showAllEmailData(email: string, item: Record<string, any>[]) {
  const allData: Record<string, any>[] = item.map(async (item) => {
    const data = await axios.get(`${window.origin}/api/temp-mail/email-data?email=${email}&item=${item.id}`);
    return { ...data.data, opened: false };
  });
  const data = Promise.all(allData);

  return data;
}

const getInbox = async (token: string) => {
  const inbox = await axios.get(`${window.origin}/api/temp-mail/get-inbox?token=${token}`);

  return inbox.data.email;
};

const downloadFile = async (email: string, itemId: number, itemName: string) => {
  const downloadFile = await axios.get(
    `${window.origin}/api/temp-mail/download-file?email=${email}&itemId=${itemId}&itemName=${itemName}`,
  );

  return downloadFile;
};

export { createEmail, showAllEmailData, getInbox, downloadFile };
