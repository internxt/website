import axios from 'axios';

async function createEmail() {
  const email = await axios(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=genRandomMailbox&count=1`);

  return email.data;
}

async function showAllEmailData(email: string, item: Record<string, any>[]) {
  const allData: Record<string, any>[] = item.map(async (item) => {
    const data = await axios(
      `${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=readMessage&login=${email.split('@')[0]}&domain=${
        email.split('@')[1]
      }&id=${item.id}`,
    );
    return data.data;
  });
  return Promise.all(allData);
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
  console.log(downloadFile);

  return downloadFile;
};

export { createEmail, showAllEmailData, getInbox, downloadFile };
