import moment from 'moment';
import { ArrowsClockwise, Envelope, Tray } from 'phosphor-react';
import React, { useEffect } from 'react';

function getMessages(inbox) {
  const messages = [];
  inbox.map((item) => {
    messages.push({
      ...item,
      opened: false,
    });
  });
  return messages;
}

const NoMessageSelected = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-2">
      <Envelope size={48} className="text-gray-50" weight="thin" />
      <div className="flex flex-col">
        <p className="text-sm font-medium">You have a new messages</p>
        <p className="text-sm text-gray-50">Select a message to open</p>
      </div>
    </div>
  );
};

const messageSelected = ({ item }) => {
  const date = moment(item.date);
  return (
    <div className="flex flex-row">
      <p title={item.from} className="text-xs font-medium text-gray-50">
        {item.from}
      </p>
      <p title={item.subject} className="text-sm font-semibold">
        {item.subject}
      </p>
      <div className="flex flex-row items-end justify-end space-x-2">
        <p className="w-full text-xs line-clamp-2">{item.textBody}</p>
        <p className="text-supporting-2 font-semibold text-gray-60">
          {moment().isSame(date, 'day') ? date.format('HH:mm') : date.format('MMM DD')}
        </p>
      </div>
    </div>
  );
};

const Inbox = ({ inbox, setIsRefreshed }) => {
  console.log('inbox de los cojones', inbox);
  const [messages, setMessages] = React.useState([]);
  const [selectedMessage, setSelectedMessage] = React.useState(null);

  useEffect(() => {
    setMessages(getMessages(inbox));
  }, []);

  return (
    <div className="flex h-[512px] w-full max-w-3xl flex-row space-y-2 overflow-hidden rounded-xl border border-gray-10 shadow-subtle-hard">
      <div className="flex flex-col">
        <div className="flex h-full w-screen max-w-[256px] flex-col items-start justify-start rounded-l-xl border-r border-gray-10">
          <div className="flex w-full flex-row justify-between rounded-tl-xl border-b border-gray-10 bg-gray-5 px-4 py-5">
            <div className="flex flex-row items-center space-x-1">
              <Tray size={20} weight="bold" />
              <p className="text-base font-medium">Inbox</p>
            </div>
            <ArrowsClockwise
              size={24}
              className="cursor-pointer text-gray-50"
              onClick={() => {
                setIsRefreshed((prevState) => !prevState);
              }}
            />
          </div>
          <div className="flex flex-col overflow-y-scroll">
            {messages.map((item, index) => {
              const date = moment(item.date);
              return (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedMessage(item);
                    const newMessages = [...messages];
                    newMessages[index].opened = true;
                    setMessages(newMessages);
                  }}
                  className={`flex h-full ${
                    !item.opened ? 'border-l-2 border-l-primary' : ''
                  } w-full flex-col px-4 text-start  focus:bg-primary focus:bg-opacity-10`}
                >
                  <div className="flex flex-col border-b border-gray-10 py-4">
                    <p title={item.from} className="text-xs font-medium text-gray-50">
                      {item.from}
                    </p>
                    <p title={item.subject} className="text-sm font-semibold">
                      {item.subject}
                    </p>
                    <div className="flex flex-row items-end justify-end space-x-2">
                      <p className="w-full text-xs line-clamp-2">{item.textBody}</p>
                      <p className="text-supporting-2 font-semibold text-gray-60">
                        {moment().isSame(date, 'day') ? date.format('HH:mm') : date.format('MMM DD')}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <NoMessageSelected />
    </div>
  );
};

export default Inbox;
