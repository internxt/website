import { ArrowClockwise, Tray } from 'phosphor-react';
import React from 'react';

const Inbox = () => {
  return (
    <div className="flex h-max w-max flex-row items-center justify-center space-y-2 rounded-xl border border-gray-10 py-56 px-80 text-center shadow-subtle-hard">
      <div className="flex max-w-[256px] flex-col">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Tray size={24} />
            <p>Inbox</p>
          </div>
          <ArrowClockwise size={24} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Inbox;
