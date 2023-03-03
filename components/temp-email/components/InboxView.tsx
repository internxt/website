import moment from 'moment';
import { ArrowsClockwise, CaretLeft, Paperclip, Tray } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import EmptyInbox from './EmptyInbox';
import { getInbox, showAllEmailData } from '../services/api/temp-api';

import useWindowFocus from '../hooks/useWindowFocus';
import MessageSelected from './Messages';
import Messages from './Messages';
import { isMobile } from 'react-device-detect';
import { Transition } from '@headlessui/react';

const Inbox = ({ email }) => {
  const [messages, setMessages] = React.useState([]);
  const [selectedMessage, setSelectedMessage] = React.useState(null);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const isFocused = useWindowFocus();

  useEffect(() => {
    getInbox(email).then((res) => {
      //Get all messages and set opened to false
      showAllEmailData(email, res).then((res: any) => {
        setMessages(res);
      });
    });
  }, [email, isRefreshed]);

  useEffect(() => {
    function getMailInbox() {
      getInbox(email).then((res) => {
        //Get all messages and set opened to false
        showAllEmailData(email, res).then((res: any) => {
          setMessages(res);
        });
      });
    }
    if (isFocused) {
      const interval = setInterval(() => getMailInbox(), 5000);
      return () => clearInterval(interval);
    }
  }, [email, isFocused]);

  console.log('messages', messages.length);

  return !isMobile ? (
    <InboxWeb
      email={email}
      getProps={{
        messages,
        selectedMessage,
        setSelectedMessage,
        setIsRefreshed,
      }}
    />
  ) : (
    <InboxMobile
      email={email}
      getProps={{
        messages,
        selectedMessage,
        setSelectedMessage,
        setIsRefreshed,
      }}
    />
  );
};

//Web Inbox View
const InboxWeb = ({ email, getProps }: { email: string; getProps: Record<string, any> }) => {
  const { messages, selectedMessage, setSelectedMessage, setIsRefreshed } = getProps;

  return (
    <div className="flex h-[512px] w-full max-w-3xl flex-row space-y-2 overflow-hidden rounded-xl border border-gray-10 shadow-subtle-hard">
      {messages.length > 0 ? (
        <>
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

              <div className="flex w-full flex-col overflow-y-scroll">
                {messages.map((item, index) => {
                  const date = moment(item.date);
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedMessage(item);
                        const newMessages = [...messages];
                        newMessages[index].opened = true;
                      }}
                      className={`flex h-full ${
                        !item.opened ? 'border-l-2 border-l-primary' : ''
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

          <Transition
            show={selectedMessage ? true : false}
            enter="transition-opacity easy-in-out duration-800"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity easy-in-out duration-800"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className={'flex overflow-y-scroll'}
          >
            <Messages.MessageSelected email={email} item={selectedMessage} />
          </Transition>
          {!selectedMessage && <Messages.NoMessageSelected />}
        </>
      ) : (
        <EmptyInbox />
      )}
    </div>
  );
};

//Mobile Inbox View
const InboxMobile = ({ email, getProps }: { email: string; getProps: Record<string, any> }) => {
  const { messages, selectedMessage, setSelectedMessage, setIsRefreshed } = getProps;
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <div className="flex h-[480px] w-full max-w-sm flex-row space-y-2 overflow-hidden rounded-xl border border-gray-10 shadow-subtle-hard">
      {messages.length > 0 ? (
        //Render message selected
        <>
          <Transition
            show={isMessageOpen}
            enter="transition-opacity duration-800"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            className={'flex overflow-y-scroll'}
          >
            <div className="flex flex-col">
              <div className="flex w-full flex-row justify-between rounded-tl-xl border-b border-gray-10 bg-gray-5 px-4 py-5">
                <div className="flex flex-row items-center space-x-1">
                  <CaretLeft
                    size={20}
                    weight="bold"
                    onClick={() => {
                      setIsMessageOpen(false);
                    }}
                  />
                  <p className="text-base font-medium">Back to inbox</p>
                </div>
              </div>
              <Messages.MessageSelected email={email} item={selectedMessage} />
            </div>
          </Transition>
          {/* Render messages list */}
          <Transition
            show={!isMessageOpen}
            enter="transition-opacity duration-800"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            className={'flex w-full overflow-y-scroll'}
          >
            <div className="flex w-full flex-col">
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
              <div className="flex w-full flex-col overflow-y-scroll">
                {/* Render messages list */}
                {messages.map((item, index) => {
                  const date = moment(item.date);
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedMessage(item);
                        const newMessages = [...messages];
                        newMessages[index].opened = true;
                        setIsMessageOpen(!isMessageOpen);
                      }}
                      className={`flex h-full ${
                        !item.opened ? 'border-l-2 border-l-primary' : ''
                      } w-full flex-col px-4 text-start hover:bg-primary hover:bg-opacity-15  focus:bg-primary focus:bg-opacity-10`}
                    >
                      <div className="flex w-full flex-col border-b border-gray-10 py-4">
                        <p title={item.from} className="text-xs font-medium text-gray-50">
                          {item.from}
                        </p>
                        {/* If the item has attachments, then render it and allow download files */}
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
          </Transition>
        </>
      ) : (
        <EmptyInbox />
      )}
    </div>
  );
};

export default Inbox;
