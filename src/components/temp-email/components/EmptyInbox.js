import { Tray } from '@phosphor-icons/react';
import React from 'react';

const EmptyInbox = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-2 rounded-xl px-5 text-center shadow-subtle-hard">
      <Tray size={48} className="text-gray-50" weight="light" />
      <div className="flex flex-col space-y-1">
        <p className="text-sm font-medium">Your inbox is empty</p>
        <p className="text-xs text-gray-50">Waiting for incoming messages</p>
      </div>
    </div>
  );
};

export default EmptyInbox;
