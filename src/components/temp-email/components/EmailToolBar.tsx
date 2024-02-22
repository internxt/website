// components/EmailToolbar.js
import React from 'react';
import { Copy, Info, Trash } from '@phosphor-icons/react';

interface EmailToolBarProps {
  email: string | null;
  borderColor: boolean;
  onCopy: () => void;
  onDelete: () => void;
  textContent: {
    generatingEmail: string;
    copyEmail: string;
    deleteEmail: string;
    expireEmail: string;
  };
}

function EmailToolbar({ email, borderColor, onCopy, onDelete, textContent }: Readonly<EmailToolBarProps>) {
  return (
    <div className="flex flex-col items-center rounded-2xl border-4 border-primary/7 bg-primary/2 px-5 py-5 lg:p-9">
      <div className="flex w-full flex-col items-center justify-center space-y-3">
        <div
          className={`flex h-full w-full max-w-[400px] items-center justify-center rounded-xl ${
            borderColor ? 'ring   ring-primary ring-opacity-15' : 'border border-gray-20'
          }`}
        >
          <button
            className={`flex h-full w-full cursor-pointer flex-row items-center justify-between rounded-xl bg-gray-1 shadow-sm ${
              borderColor ? 'border border-primary' : ''
            } px-4 py-3`}
            onClick={() => {
              onCopy();
            }}
          >
            <p>{email ?? textContent.generatingEmail}</p>
            <Copy size={24} className={`${borderColor ? 'text-primary' : 'text-gray-50'}`} />
          </button>
        </div>
        <div className="flex w-full flex-row items-center justify-center space-x-3">
          <button
            className="flex w-full flex-row items-center justify-center space-x-2 whitespace-nowrap rounded-lg bg-primary px-5 py-2 text-white shadow-sm hover:bg-primary-dark"
            onClick={() => {
              onCopy();
            }}
          >
            <Copy size={24} />
            <p>{textContent.copyEmail}</p>
          </button>
          <button
            className="flex w-full flex-row items-center justify-center space-x-2 whitespace-nowrap rounded-lg border border-gray-10 bg-white px-5 py-2 shadow-sm hover:bg-gray-10"
            onClick={() => {
              onDelete();
            }}
          >
            <Trash size={24} />
            <p>{textContent.deleteEmail}</p>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-1 pt-2 text-sm text-gray-50">
        <Info size={16} />
        <p>{textContent.expireEmail}</p>
      </div>
    </div>
  );
}

export default EmailToolbar;
