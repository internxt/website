import axios from 'axios';

async function createEmail() {
  const email = await axios(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=genRandomMailbox&count=1`);

  return email.data;
}

async function showAllEmailData(email: string, itemId: []) {
  const fullMessages = [];
  itemId.map(async (item: any) => {
    const allData = await axios(
      `${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=readMessage&login=${email.split('@')[0]}&domain=${
        email.split('@')[1]
      }&id=${item.id}`,
    );
    fullMessages.push(allData.data);
  });

  return fullMessages;
}

const getInbox = async (email) => {
  const userEmail = email.split('@')[0];
  const domain = email.split('@')[1];
  const inbox = await axios(
    `${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}?action=getMessages&login=${userEmail}&domain=${domain}`,
  );
  return inbox.data;
};

export { createEmail, showAllEmailData, getInbox };
