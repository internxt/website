import axios from 'axios';
import { Copy, Trash, Tray } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { createEmail, getInbox, showAllEmailData } from './components/temp-api';
import ShowSnackbar from '../ShowSnackbar';
import { toast } from 'react-toastify';

import Inbox from './components/InboxView';

function copy(email) {
  navigator.clipboard.writeText(email);
}

function removeLocalStorage() {
  localStorage.removeItem('email');
  localStorage.removeItem('setupTime');
}

const open = () => toast.success('Copied to clipboard!');

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [inbox, setInbox] = useState([]);

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

  return (
    <section className="overflow-hidden bg-gradient-to-t from-white to-gray-1 py-20">
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-5xl font-semibold">Free Temporary Email</h1>
          <p className="text-xl text-gray-80">
            Email anonymously with our free, private, and secure temporary email address generator.
          </p>
        </div>
        <div className="flex w-full max-w-[325px] flex-col items-center space-y-3">
          <div className="flex w-full flex-row items-center justify-between rounded-xl border border-gray-20 px-4 py-3">
            <p>{email ? email : 'Generating random email...'}</p>
            <Copy
              size={24}
              className="cursor-pointer text-gray-50"
              onClick={() => {
                open();
                copy(email);
              }}
            />
          </div>
          <div className="flex w-full flex-row items-center justify-between">
            <button
              className="flex flex-row items-center justify-center space-x-2 rounded-lg bg-primary px-5 py-2 text-white shadow-sm"
              onClick={() => {
                open();
                copy(email);
              }}
            >
              <Copy size={24} />
              <p>Copy email</p>
            </button>
            <button
              className="flex flex-row items-center justify-center space-x-2 rounded-lg border border-gray-10 bg-transparent px-5 py-2 shadow-sm"
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
          <p className="text-xs text-gray-60">Email and inbox will expire after 3 hours of inactivity</p>
        </div>
        <Inbox email={email} />
        <ShowSnackbar />
      </div>
    </section>
  );
};

export default HeroSection;
