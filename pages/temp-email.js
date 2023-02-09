import React from 'react';

const TempEmail = ({ getAllMessages }) => {
  const { allMessages } = getAllMessages;
  console.log(allMessages);
  const parsedMessages = JSON.parse(allMessages);

  return (
    <section>
      <div className="flex flex-col items-center justify-center space-y-5 p-20">
        <h1 className="text-xl font-bold text-black">Internxt Temp Email</h1>
        <div className="flex flex-col items-center rounded-lg border-2 border-primary border-opacity-30 p-5">
          {parsedMessages.map((message) => {
            return (
              <div key={message.uid} className="flex flex-col space-y-3">
                <div className="flex w-full flex-row justify-between">
                  <p className="font-medium text-black">Sent by: {message.name}</p>
                  <p className="font-medium text-black">Email: {message.from}</p>
                </div>
                <div className="flex w-full flex-row rounded-full border border-primary border-opacity-30" />
                <p className="">Subject: {message.subject}</p>
                <p>Body: {message.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(ctx) {
  const { newClient, connect, getLastMessage, getMessages, closeConnection } = require('imap-functions');

  const client = newClient({
    host: 'imap.hostinger.com',
    port: 993,
    secure: true,
    auth: {
      user: 'test@inxt.me',
      pass: 'Test$1234',
    },
    emitLogs: false,
  });

  // Wait until client connects and authorizes
  await connect(client);

  // Select and lock a mailbox. Throws if mailbox does not exist
  let lock = await client.getMailboxLock('INBOX', {
    readOnly: true,
  });

  // fetch latest message source
  // client.mailbox includes information about currently selected mailbox
  // "exists" value is also the largest sequence number available in the mailbox
  const lastMessage = await getLastMessage(client).then((message) => console.log('Last message:', message));

  // list subjects for all messages
  // uid value is always included in FETCH response, envelope strings are in unicode.
  const getAllMessages = await getMessages(client).then((messages) => {
    const allMessages = JSON.stringify(messages);
    return {
      allMessages,
    };
  });

  // Make sure lock is released, otherwise next `getMailboxLock()` never returns
  lock.release();

  // log out and close connection
  await closeConnection(client);

  return {
    props: {
      // props for your component
      getAllMessages,
      // userDisconnect,
    },
  };
}

export default TempEmail;
