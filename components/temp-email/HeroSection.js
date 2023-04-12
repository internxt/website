import axios from 'axios';
import { Copy, Info, Trash, Tray } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { createEmail } from './services/api/temp-api';
import ShowSnackbar from '../ShowSnackbar';
import { toast } from 'react-toastify';

import Inbox from './components/InboxView';

function copy(email) {
  navigator.clipboard.writeText(email);
}

function removeLocalStorage() {
  localStorage.removeItem('email');
  localStorage.removeItem('setupTime');
  localStorage.removeItem('inbox');
  localStorage.removeItem('selectedMessage');
}

const open = () => toast.success('Copied to clipboard!');

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [borderColor, setBorderColor] = useState(false);

  // (if someone want to clear after 8hrs simply change hours=8)
  const hours = 3; // to clear the localStorage after 1 hour
  const now = new Date().getTime();
  const [generateEmail, setGenerateEmail] = useState(false);

  useEffect(() => {
    const setupTime = localStorage.getItem('setupTime');
    if (setupTime !== null) {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        removeLocalStorage();
      }
    }
    if (localStorage.getItem('email') !== null) {
      setEmail(localStorage.getItem('email'));
    } else {
      localStorage.setItem('setupTime', now);
      createEmail().then((res) => {
        localStorage.setItem('email', res[0]);
        setEmail(res[0]);
      });
    }
  }, [generateEmail]);

  useEffect(() => {
    if (borderColor) {
      setTimeout(() => {
        setBorderColor(false);
      }, 4000);
    }
  }, [borderColor]);

  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-gray-1 pb-20 pt-32">
      <div className="flex flex-col items-center justify-center space-y-10 px-5">
        <div className="flex flex-col text-center">
          <h1 className="text-4xl font-semibold lg:text-5xl">Free Temporary Email</h1>
          <p className="pt-5 text-xl text-gray-80">
            Email anonymously with our free, private, and secure temporary email address generator.
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="flex w-full max-w-[325px] flex-col space-y-3">
            <div
              className={`flex h-full w-full items-center justify-center rounded-xl ${
                borderColor ? 'ring   ring-primary ring-opacity-15' : 'border border-gray-20'
              }`}
            >
              <div
                disabled
                className={`flex h-full w-full cursor-pointer flex-row items-center justify-between rounded-xl bg-gray-1 shadow-sm ${
                  borderColor ? 'border border-primary' : ''
                } px-4 py-3`}
                onClick={() => {
                  setBorderColor(true);
                  open();
                  copy(email);
                }}
              >
                <p>{email ? email : 'Generating random email...'}</p>
                <Copy size={24} className={`${borderColor ? 'text-primary' : 'text-gray-50'}`} />
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-between">
              <button
                className="flex flex-row items-center justify-center space-x-2 rounded-lg bg-primary px-5 py-2 text-white shadow-sm hover:bg-primary-dark"
                onClick={() => {
                  open();
                  copy(email);
                }}
              >
                <Copy size={24} />
                <p>Copy email</p>
              </button>
              <button
                className="flex flex-row items-center justify-center space-x-2 rounded-lg border border-gray-10 bg-transparent px-5 py-2 shadow-sm hover:bg-gray-10"
                onClick={() => {
                  removeLocalStorage();
                  setEmail('');
                  setGenerateEmail(!generateEmail);
                }}
              >
                <Trash size={24} />
                <p>Delete email</p>
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-1 pt-2 text-sm text-gray-50">
            <Info size={16} />
            <p>Email and inbox will expire after 3 hours of inactivity</p>
          </div>
        </div>

        <Inbox email={email} />
        <ShowSnackbar />
      </div>
    </section>
  );
};

export default HeroSection;
