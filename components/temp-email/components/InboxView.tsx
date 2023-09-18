import moment from 'moment';
import { ArrowsClockwise, CaretLeft, Paperclip, Tray } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import EmptyInbox from './EmptyInbox';
import { getInbox } from '../services/api/temp-api';

import useWindowFocus from '../hooks/useWindowFocus';
import MessageSelected from './Messages';
import Messages from './Messages';
import { isMobile } from 'react-device-detect';
import { Transition } from '@headlessui/react';

const Inbox = ({ email, token, textContent }) => {
  const [messages, setMessages] = React.useState([]);
  const [selectedMessage, setSelectedMessage] = React.useState(null);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const isFocused = useWindowFocus();
  const [openedMessages, setOpenedMessages] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  //Get inbox on mount or when the inbox is refreshed
  useEffect(() => {
    getMailInbox(token);
    setIsMobileView(isMobile);
    if (JSON.parse(localStorage.getItem('selectedMessage'))) {
      setSelectedMessage(JSON.parse(localStorage.getItem('selectedMessage')));
    }
  }, [email, isRefreshed]);

  //Get inbox every 5 seconds when the window is focused
  useEffect(() => {
    if (isFocused) {
      const interval = setInterval(() => getMailInbox(token), 5000);
      return () => clearInterval(interval);
    }
  }, [email, isFocused]);

  //Get inbox function
  function getMailInbox(userToken: string) {
    getInbox(userToken).then((res) => {
      let messageIdCounter = messages?.length;
      //Get all messages and set opened to false
      if (res == null) return;
      if (res?.length > 0) {
        const message = res.map((item, index) => {
          messageIdCounter++;
          return {
            ...item,
            opened: false,
            id: messageIdCounter,
          };
        });
        const allMessages = messages == null ? [...message] : [...messages, ...message];
        setMessages(allMessages);
        localStorage.setItem('inbox', JSON.stringify(allMessages));
        const unopenedMessages = allMessages.filter((item) => !item.opened).length;
        setOpenedMessages(unopenedMessages);
      } else {
        const inbox = localStorage.getItem('inbox');
        setMessages(JSON.parse(inbox));
      }
    });
  }

  return !isMobileView ? (
    <InboxWeb
      email={email}
      getProps={{
        messages,
        selectedMessage,
        setMessages,
        setSelectedMessage,
        setIsRefreshed,
        openedMessages,
        textContent,
      }}
    />
  ) : (
    <InboxMobile
      email={email}
      getProps={{
        messages,
        selectedMessage,
        setMessages,
        setSelectedMessage,
        setIsRefreshed,
        openedMessages,
        textContent,
      }}
    />
  );
};

//Web Inbox View
const InboxWeb = ({ email, getProps }: { email: string; getProps: Record<string, any> }) => {
  const { messages, selectedMessage, setMessages, setSelectedMessage, setIsRefreshed, openedMessages, textContent } =
    getProps;
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setAnimation(false);
      }, 1000);
    }
  }, [animation]);

  useEffect(() => {
    const links = document.querySelectorAll('a');

    const navbar = document.querySelector('#navbar');
    const footer = document.querySelector('#footer');
    links.forEach((link) => {
      if (!navbar.contains(link) && !footer.contains(link)) {
        link.target = '_blank';
        link.rel = 'nofollow';
      }
    });
  }, [selectedMessage]);

  return (
    <div className="flex h-[512px] w-full max-w-3xl flex-row space-y-2 overflow-hidden rounded-xl border border-gray-10 shadow-subtle-hard">
      <>
        <div className="flex flex-col">
          <div className="flex h-full w-screen max-w-[256px] flex-col items-start justify-start rounded-l-xl border-r border-gray-10">
            <div className="flex w-full flex-row justify-between rounded-tl-xl border-b border-gray-10 bg-gray-5 px-4 py-5">
              <div className="flex flex-row items-center space-x-1">
                <Tray size={24} className="text-gray-80" />
                <p className="text-base font-medium text-gray-100">{textContent.title}</p>
              </div>
              <ArrowsClockwise
                size={24}
                className={`cursor-pointer text-gray-50 hover:text-gray-80 ${animation ? 'animate-spin-refresh' : ''}`}
                onClick={() => {
                  setAnimation(true);
                  setIsRefreshed((prevState) => !prevState);
                }}
              />
            </div>

            <div className="flex w-full flex-col overflow-y-scroll">
              {messages?.length > 0 ? (
                messages?.map((item, index) => {
                  const date = moment(item.date);
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        //Update the message to local storage
                        const newMessages = JSON.parse(localStorage.getItem('inbox'));
                        newMessages[index].opened = true;
                        setMessages(newMessages);
                        setSelectedMessage(item);
                        localStorage.setItem('inbox', JSON.stringify(newMessages));
                        localStorage.setItem('selectedMessage', JSON.stringify(item));
                      }}
                      className={`flex h-full ${
                        !item.opened ? 'border-l-2 border-l-primary' : ''
                      } w-full flex-col px-4 text-start hover:bg-primary hover:bg-opacity-15 ${
                        item.id === selectedMessage?.id ? 'bg-primary bg-opacity-10' : null
                      } `}
                    >
                      <div className="flex w-full max-w-[224px] flex-col border-b border-gray-10 py-4">
                        <p title={item.from} className="truncate text-xs font-medium text-gray-50">
                          {item.from}
                        </p>
                        {item.attachments?.length > 0 ? (
                          <div className="flex flex-row items-center space-x-1">
                            <Paperclip size={14} className="text-gray-60" />
                            <p title={item.subject} className="flex-row text-sm font-semibold line-clamp-2">
                              {item.subject ? item.subject : '(no subject)'}
                            </p>
                          </div>
                        ) : (
                          <p title={item.subject} className="flex-row text-sm font-semibold line-clamp-2">
                            {item.subject ? item.subject : '(no subject)'}
                          </p>
                        )}
                        <div className="flex flex-row items-end justify-end space-x-2">
                          <p className="w-full text-xs line-clamp-2">{item.body}</p>
                          <p className="text-supporting-2 font-semibold text-gray-60">
                            {moment().isSame(date, 'day') ? date.format('HH:mm') : date.format('MMM DD')}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })
              ) : (
                <div></div>
              )}
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
          <div className="flex h-full w-full">
            <Messages.MessageSelected item={selectedMessage} textContent={textContent} />
          </div>
        </Transition>
        {!selectedMessage && <Messages.NoMessageSelected messagesLength={openedMessages} textContent={textContent} />}
      </>
    </div>
  );
};

//Mobile Inbox View
const InboxMobile = ({ email, getProps }: { email: string; getProps: Record<string, any> }) => {
  const { messages, selectedMessage, setMessages, setSelectedMessage, setIsRefreshed, textContent } = getProps;
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <div className="flex h-[480px] w-full max-w-sm flex-row space-y-2 overflow-hidden rounded-xl border border-gray-10 shadow-subtle-hard">
      {messages?.length > 0 ? (
        //Render message selected
        <>
          <Transition
            show={isMessageOpen}
            enter="transition-opacity duration-800"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            className={'flex w-full overflow-y-scroll'}
          >
            <div className="flex w-full flex-col">
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
              <div className="flex h-full w-full">
                <Messages.MessageSelected item={selectedMessage} textContent={textContent} />
              </div>
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
                        const newMessages = [...JSON.parse(localStorage.getItem('inbox'))];
                        newMessages[index].opened = true;
                        setMessages(newMessages);
                        setSelectedMessage(item);
                        localStorage.setItem('inbox', JSON.stringify(newMessages));
                        localStorage.setItem('selectedMessage', JSON.stringify(item));
                        setIsMessageOpen(true);
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
                        <p title={item.subject} className="flex-row text-sm font-semibold">
                          {item.subject ? item.subject : '(no subject)'}
                        </p>
                        <div className="flex flex-row items-end justify-end space-x-2">
                          <p className="w-full text-xs line-clamp-2">{item.body}</p>
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
        !selectedMessage && <Messages.NoMessageSelected messagesLength={0} textContent={textContent} />
      )}
    </div>
  );
};

export default Inbox;
