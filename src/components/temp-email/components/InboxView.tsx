import moment from 'moment';
import { ArrowsClockwise, CaretLeft, Tray } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

import { MessageSelected, NoMessageSelected } from './Messages';
import { Transition } from '@headlessui/react';
import { MessageObjProps } from '../types/types';

interface InboxProps {
  textContent: any;
  onRefresh: any;
  openedMessages: number;
  messages: MessageObjProps[];
  onMessageSelected: (item: MessageObjProps) => void;
  selectedMessage: MessageObjProps | null;
}

export const Inbox = ({
  textContent,
  onRefresh,
  openedMessages,
  messages,
  onMessageSelected,
  selectedMessage,
}: InboxProps) => {
  return (
    <div className="relative px-52">
      <div className="hidden w-full justify-center md:flex">
        <InboxWeb
          getProps={{
            messages,
            selectedMessage,
            onMessageSelected,
            onRefresh,
            openedMessages,
            textContent,
          }}
        />
      </div>
      <div className="flex w-screen justify-center px-5 md:hidden">
        <InboxMobile
          getProps={{
            messages,
            selectedMessage,
            onMessageSelected,
            onRefresh,
            openedMessages,
            textContent,
          }}
        />
      </div>
    </div>
  );
};

//Web Inbox View
const InboxWeb = ({ getProps }: { getProps: InboxProps }) => {
  const { messages, selectedMessage, onRefresh, onMessageSelected, openedMessages, textContent } = getProps;
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setAnimation(false);
      }, 1000);
    }
  }, [animation]);

  const handleRefresh = () => {
    setAnimation(true);
    onRefresh();
  };

  return (
    <div
      id="inbox"
      className="flex h-[512px] w-full max-w-3xl flex-row space-y-2 overflow-hidden rounded-xl border border-gray-10 shadow-subtle-hard lg:max-w-2xl"
    >
      <div className="flex flex-col">
        <div className="flex h-full w-screen max-w-[256px] flex-col items-start justify-start rounded-l-xl border-r border-gray-10">
          <div className="flex w-full flex-row justify-between rounded-tl-xl border-b border-gray-10 bg-gray-5 px-4 py-5">
            <div className="flex flex-row items-center space-x-1">
              <Tray size={24} className="text-gray-80" />
              <p className="text-base font-medium text-gray-100">{textContent.title}</p>
            </div>
            <Tooltip
              variant="light"
              id="arrows-clockwise"
              delayShow={700}
              className="z-40 rounded-lg bg-white drop-shadow-md"
            >
              <p className="break-word text-center text-gray-80">{textContent.refreshInbox}</p>
            </Tooltip>
            <button onClick={handleRefresh}>
              <ArrowsClockwise
                size={24}
                data-tooltip-id="arrows-clockwise"
                className={`text-gray-50 outline-none hover:text-gray-80 ${animation ? 'animate-spin-refresh' : ''}`}
              />
            </button>
          </div>

          <div className="flex w-full flex-col overflow-y-scroll">
            {messages?.length > 0 ? (
              messages?.map((item, index) => {
                const date = moment(item.date);
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onMessageSelected(item);
                    }}
                    className={`flex h-full ${
                      !item.seen ? 'border-l-2 border-l-primary' : ''
                    } w-full flex-col px-4 text-start hover:bg-primary hover:bg-opacity-15 ${
                      item.id === selectedMessage?.id ? 'bg-primary bg-opacity-10' : null
                    } `}
                  >
                    <div className="flex w-full max-w-[224px] flex-col border-b border-gray-10 py-4">
                      <p title={item.from} className="truncate text-xs font-medium text-gray-50">
                        {item.from}
                      </p>

                      <p title={item.subject} className="line-clamp-2 flex-row text-sm font-semibold">
                        {item.subject ? item.subject : '(no subject)'}
                      </p>

                      <div className="flex flex-row items-end justify-end space-x-2">
                        <p className="line-clamp-2 w-full text-xs">{item.body}</p>
                        <p className="text-supporting-2 font-semibold text-gray-60">
                          {moment().isSame(date, 'day') ? date.format('HH:mm') : date.format('MMM DD')}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <Transition
        show={true}
        enter="transition-opacity easy-in-out duration-800"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity easy-in-out duration-800"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={'flex overflow-y-scroll'}
      >
        {selectedMessage ? (
          <div className="flex h-full w-screen">
            <MessageSelected item={selectedMessage} textContent={textContent} />
          </div>
        ) : (
          <div className="flex w-screen items-center">
            <NoMessageSelected
              messagesLength={openedMessages}
              textContent={textContent}
              onRefreshButtonClicked={onRefresh}
            />
          </div>
        )}
      </Transition>
    </div>
  );
};

//Mobile Inbox View
const InboxMobile = ({ getProps }: { getProps: InboxProps }) => {
  const { messages, selectedMessage, onMessageSelected, onRefresh, textContent } = getProps;
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <div className="flex h-[480px] w-full  flex-row space-y-2 overflow-hidden rounded-xl border border-gray-10 shadow-subtle-hard">
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
                {selectedMessage && <MessageSelected item={selectedMessage} textContent={textContent} />}
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
                    onRefresh();
                  }}
                />
              </div>
              <div className="flex w-full flex-col overflow-y-scroll">
                {/* Render messages list */}
                {messages?.map((item) => {
                  const date = moment(item.date);
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onMessageSelected(item);
                        setIsMessageOpen(true);
                      }}
                      className={`flex h-full ${
                        !item.seen ? 'border-l-2 border-l-primary' : ''
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
                          <p className="line-clamp-2 w-full text-xs">{item.body}</p>
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
        !selectedMessage && (
          <NoMessageSelected messagesLength={0} textContent={textContent} onRefreshButtonClicked={onRefresh} />
        )
      )}
    </div>
  );
};
