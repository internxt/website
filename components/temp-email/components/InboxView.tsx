import moment from 'moment';
import { ArrowsClockwise, DownloadSimple, Envelope, Paperclip, Tray } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import EmptyInbox from './EmptyInbox';
import { downloadFile, getInbox, showAllEmailData } from './temp-api';
import PrettySize from 'prettysize';
import iconService from './icon-service';
import fileDownload from 'js-file-download';

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

const MessageSelected = ({ email, item }): JSX.Element => {
  const date = moment(item.date);

  return (
    <div className="flex flex-col space-y-10 overflow-y-scroll p-10">
      <div className="flex flex-col space-y-2">
        <p title={item.subject} className="text-xl font-medium text-gray-100 line-clamp-3">
          {item.subject}
        </p>
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col items-center justify-center rounded-full bg-primary bg-opacity-10 py-2 px-4">
            <p className="text-lg text-primary">{item.from.charAt().toUpperCase()}</p>
          </div>
          <div className="flex flex-col">
            <p title={item.from} className="truncate text-sm font-medium text-gray-80">
              {item.from}
            </p>
            <p title={item.date} className="text-xs">
              {item.date}
            </p>
          </div>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: item.body }} className="flex flex-col space-x-2" />
      {item.attachments.length > 0 && (
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row justify-between">
            <p className="text-sm font-medium">{item.attachments.length} Attachments</p>
            <p className="text-sm text-primary">Download All</p>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            {item.attachments.map((file) => {
              const ItemIconComponent = iconService.getItemIcon(false, file.contentType.split('/')[1]);

              return (
                <div
                  key={file.filename}
                  className="flex cursor-pointer flex-row items-center justify-center space-x-2 rounded-lg border border-gray-10 p-2"
                  onClick={async () => {
                    await downloadFile(email, item.id, file.filename).then((download) => {
                      //download file
                      fileDownload(download.data, file.filename);
                    });
                  }}
                >
                  <ItemIconComponent width={20} height={20} className="shadow-md" />
                  <div className="flex max-w-[120px] flex-col">
                    <p className=" truncate text-xs font-medium">{file.filename}</p>
                    <p className="text-xs text-gray-60">{PrettySize(file.size)}</p>
                  </div>
                  <DownloadSimple size={20} className="text-gray-50" />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const Inbox = ({ email }) => {
  const [messages, setMessages] = React.useState([]);
  const [selectedMessage, setSelectedMessage] = React.useState(null);
  const [isRefreshed, setIsRefreshed] = useState(false);

  useEffect(() => {
    getInbox(email).then((res) => {
      //Get all messages and set opened to false
      showAllEmailData(email, res).then((res: any) => {
        setMessages(res);
      });
    });
  }, [email, isRefreshed]);

  useEffect(() => {
    console.log('Autorefresh triggered');

    function getMailInbox() {
      getInbox(email).then((res) => {
        //Get all messages and set opened to false
        showAllEmailData(email, res).then((res: any) => {
          console.log(res);
          setMessages(res);
        });
      });
    }

    const interval = setInterval(() => getMailInbox(), 10000);
    return () => {
      clearInterval(interval);
    };
  }, [email]);

  console.log('messages', messages.length);

  return messages.length > 0 ? (
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
                  key={item.id}
                  onClick={() => {
                    setSelectedMessage(item);
                    const newMessages = [...messages];
                    newMessages[index].opened = true;
                    setMessages(newMessages);
                  }}
                  className={`flex h-full ${
                    !item.opened ? 'border-l-4 border-l-primary' : ''
                  } w-full flex-col px-4 text-start hover:bg-primary hover:bg-opacity-15  focus:bg-primary focus:bg-opacity-10`}
                >
                  <div className="flex flex-col border-b border-gray-10 py-4">
                    <p title={item.from} className="text-xs font-medium text-gray-50">
                      {item.from}
                    </p>
                    {item.attachments.length > 0 ? (
                      <div className="flex flex-row items-center space-x-1">
                        <Paperclip size={14} className="text-gray-60" />
                        <p title={item.subject} className="flex-row text-sm font-semibold">
                          {item.subject}
                        </p>
                      </div>
                    ) : (
                      <p title={item.subject} className="flex-row text-sm font-semibold">
                        {item.subject}
                      </p>
                    )}
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
      {selectedMessage ? <MessageSelected email={email} item={selectedMessage} /> : <NoMessageSelected />}
    </div>
  ) : (
    <EmptyInbox />
  );
};

export default Inbox;
