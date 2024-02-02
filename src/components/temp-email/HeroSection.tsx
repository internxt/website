import { Copy, Info, Trash } from '@phosphor-icons/react';
import React, { useEffect, useState } from 'react';
import { createEmail } from './services/api/temp-api';
import { toast } from 'react-toastify';

import Inbox from './components/InboxView';
import Header from '../shared/Header';

function copy(email) {
  navigator.clipboard.writeText(email);
}

function removeLocalStorage() {
  localStorage.removeItem('email');
  localStorage.removeItem('setupTime');
  localStorage.removeItem('inbox');
  localStorage.removeItem('selectedMessage');
}

const openToast = () => toast.success('Copied to clipboard!');

const HeroSection = ({ textContent }) => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [borderColor, setBorderColor] = useState(false);

  const hours = 5;
  const now = new Date().getTime();
  const [generateEmail, setGenerateEmail] = useState(false);

  useEffect(() => {
    const setupTime = localStorage.getItem('setupTime');
    if (setupTime !== null) {
      if (now - Number(setupTime) > hours * 60 * 60 * 1000) {
        removeLocalStorage();
      }
    }
    if (localStorage.getItem('email') !== null) {
      const data = localStorage.getItem('email') as string;
      const parseData = JSON.parse(data);
      setEmail(parseData.address);
      setToken(parseData.token);
    } else {
      localStorage.setItem('setupTime', String(now));
      createEmail()
        .then((res) => {
          localStorage.setItem('email', JSON.stringify(res));
          setEmail(res.address);
          setToken(res.token);
        })
        .catch((err) => {
          console.error('Failed to create email:', err);
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
    <section className="overflow-hidden pt-32 pb-20">
      <div className="flex flex-col items-center justify-center space-y-10 px-5">
        <div className="flex flex-col items-center justify-center text-center">
          <Header isToolsPage>{textContent.title}</Header>
          <p className="max-w-2xl pt-5 text-xl text-gray-80">{textContent.subtitle}</p>
        </div>
        <div className="flex flex-col items-center rounded-2xl border-4 border-primary/7 bg-primary/2 px-5 py-5 lg:p-9">
          <div className="flex w-full flex-col items-center justify-center space-y-3">
            <div
              className={`flex h-full w-full max-w-[400px] items-center justify-center rounded-xl ${
                borderColor ? 'ring   ring-primary ring-opacity-15' : 'border border-gray-20'
              }`}
            >
              <div
                onKeyDown={() => {}}
                className={`flex h-full w-full cursor-pointer flex-row items-center justify-between rounded-xl bg-gray-1 shadow-sm ${
                  borderColor ? 'border border-primary' : ''
                } px-4 py-3`}
                onClick={() => {
                  setBorderColor(true);
                  openToast();
                  copy(email);
                }}
              >
                <p>{email ? email : textContent.generatingEmail}</p>
                <Copy size={24} className={`${borderColor ? 'text-primary' : 'text-gray-50'}`} />
              </div>
            </div>
            <div className="flex w-full flex-row items-center justify-center space-x-3">
              <button
                className="flex w-full flex-row items-center justify-center space-x-2 whitespace-nowrap rounded-lg bg-primary px-5 py-2 text-white shadow-sm hover:bg-primary-dark"
                onClick={() => {
                  openToast();
                  copy(email);
                }}
              >
                <Copy size={24} />
                <p>{textContent.copyEmail}</p>
              </button>
              <button
                className="flex w-full flex-row items-center justify-center space-x-2 whitespace-nowrap rounded-lg border border-gray-10 bg-white px-5 py-2 shadow-sm hover:bg-gray-10"
                onClick={() => {
                  removeLocalStorage();
                  setEmail('');
                  setGenerateEmail(!generateEmail);
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

        <Inbox email={email} token={token} textContent={textContent.inbox} />
      </div>
    </section>
  );
};

export default HeroSection;
