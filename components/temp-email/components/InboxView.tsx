import { ArrowsClockwise, Envelope, Tray } from 'phosphor-react';
import React from 'react';

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

const Inbox = ({ inbox }) => {
  return (
    <div className="flex h-[512px] w-full max-w-3xl flex-row space-y-2 overflow-hidden rounded-xl border border-gray-10 shadow-subtle-hard">
      <div className="flex flex-col">
        <div className="flex w-screen max-w-[256px] flex-col items-start justify-start rounded-l-xl border-r border-gray-10">
          <div className="flex w-full flex-row justify-between rounded-tl-xl border-b border-gray-10 bg-gray-5 px-4 py-5">
            <div className="flex flex-row items-center space-x-1">
              <Tray size={20} weight="bold" />
              <p className="text-base font-medium">Inbox</p>
            </div>
            <ArrowsClockwise size={24} className="text-gray-50" />
          </div>
          <div className="flex flex-col overflow-y-scroll">
            {inbox.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full flex-row justify-between  rounded-tl-xl border-b border-gray-10 bg-gray-5 px-4 py-5"
                >
                  <title>{item.email}</title>
                  <title>{item.subject}</title>
                  <p className="flex ">{item.textBody}</p>
                </div>
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
