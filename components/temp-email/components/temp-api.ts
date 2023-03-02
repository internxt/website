import axios from 'axios';

async function createEmail() {
  const email = await axios(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=genRandomMailbox&count=1`);

  return email.data;
}

async function showAllEmailData(email: string, itemId: []) {
  const allData = await axios(
    `${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=readMessage&login=${email.split('@')[0]}&domain=${
      email.split('@')[1]
    }&id=${itemId}`,
  );
  console.log(allData.data);
  return allData.data;
}

const getInbox = async (email) => {
  const userEmail = email.split('@')[0];
  const domain = email.split('@')[1];
  const inbox = await axios(
    `${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=getMessages&login=${userEmail}&domain=${domain}`,
  );
  return inbox.data;
};

const downloadFile = async (email: string, itemId: number, itemName: string) => {
  const userEmail = email.split('@')[0];
  const domain = email.split('@')[1];
  const downloadFile = await axios.get(
    `${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=download&login=${userEmail}&domain=${domain}&id=${itemId}&file=${itemName}`,
    {
      responseType: 'blob',
    },
  );

  return downloadFile;
};

export { createEmail, showAllEmailData, getInbox, downloadFile };
