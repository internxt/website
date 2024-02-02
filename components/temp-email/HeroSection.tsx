import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Copy, Info, Trash } from '@phosphor-icons/react';

import Inbox from './components/InboxView';
import Header from '../shared/Header';
import useWindowFocus from './hooks/useWindowFocus';
import { createEmail, getInbox } from './services/temp-mail.service';
import { notificationService } from '../Snackbar';

const EMAIL_STORAGE_KEY = 'email';
const SETUP_TIME_STORAGE_KEY = 'setupTime';
const INBOX_STORAGE_KEY = 'inbox';

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function removeLocalStorage() {
  localStorage.removeItem(EMAIL_STORAGE_KEY);
  localStorage.removeItem(SETUP_TIME_STORAGE_KEY);
  localStorage.removeItem(INBOX_STORAGE_KEY);
  localStorage.removeItem('selectedMessage');
}

const HeroSection = ({ textContent }) => {
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState('');
  const [borderColor, setBorderColor] = useState(false);
  const isFocused = useWindowFocus();
  const [openedMessages, setOpenedMessages] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [messages, setMessages] = useState<any>([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [generateEmail, setGenerateEmail] = useState(false);

  const hours = 5;
  const now = new Date().getTime();

  // Open the links that are in the email received in a new tab
  useEffect(() => {
    const links = document.querySelectorAll('a');

    const navbar = document.querySelector('#navbar');
    const footer = document.querySelector('#footer');
    links.forEach((link) => {
      if (!navbar?.contains(link) && !footer?.contains(link)) {
        link.target = '_blank';
        link.rel = 'nofollow';
      }
    });
  }, [selectedMessage]);

  useEffect(() => {
    checkLocalStorage();
  }, [generateEmail]);

  useEffect(() => {
    handleBorderColor();
  }, [borderColor]);

  useEffect(() => {
    handleInitialSetup();
  }, []);

  useEffect(() => {
    handleInboxUpdate();
  }, [email, isRefreshed]);

  useEffect(() => {
    handleInterval();
  }, [isFocused]);

  function checkLocalStorage() {
    const setupTime = localStorage.getItem(SETUP_TIME_STORAGE_KEY);
    if (setupTime !== null && now - Number(setupTime) > hours * 60 * 60 * 1000) {
      removeLocalStorage();
      setSelectedMessage(null);
    }

    const storedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);
    if (storedEmail !== null) {
      const { address, token } = JSON.parse(storedEmail);
      setEmail(address);
      setToken(token);
    } else {
      localStorage.setItem(SETUP_TIME_STORAGE_KEY, String(now));
      createEmail()
        .then((res) => {
          localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(res));
          setEmail(res.address);
          setToken(res.token);
          setSelectedMessage(null);
        })
        .catch((err) => {
          console.error('Failed to create email:', err);
        });
    }
  }

  function handleBorderColor() {
    if (borderColor) {
      setTimeout(() => {
        setBorderColor(false);
      }, 4000);
    }
  }

  function handleInitialSetup() {
    if (localStorage.getItem('selectedMessage')) {
      setSelectedMessage(JSON.parse(localStorage.getItem('selectedMessage') as string));
    }
  }

  function handleInboxUpdate() {
    getMailInbox(token);
    setIsMobileView(isMobile);
  }

  function handleInterval() {
    if (isFocused) {
      const interval = setInterval(() => getMailInbox(token), 20000);
      return () => clearInterval(interval);
    }
  }

  function getMailInbox(userToken: string) {
    getInbox(userToken).then((res) => {
      let messageIdCounter = messages?.length;
      if (res == null) return;
      if (res?.length > 0) {
        const message = res.map((item) => {
          messageIdCounter++;
          return {
            ...item,
            opened: false,
            id: messageIdCounter,
          };
        });
        const allMessages = messages == null ? [...message] : [...messages, ...message];
        setMessages(allMessages);
        localStorage.setItem(INBOX_STORAGE_KEY, JSON.stringify(allMessages));
        const unopenedMessages = allMessages.filter((item) => !item.opened).length;
        setOpenedMessages(unopenedMessages);
      } else {
        const inbox = localStorage.getItem(INBOX_STORAGE_KEY) as string;
        setMessages(JSON.parse(inbox));
      }
    });
  }

  function onRefresh() {
    setIsRefreshed(!isRefreshed);
  }

  function onMessageSelected(item, index) {
    //Update the message to local storage
    const newMessages = JSON.parse(localStorage.getItem('inbox') as string);
    newMessages[index].opened = true;
    setMessages(newMessages);
    setSelectedMessage(item);
    localStorage.setItem('inbox', JSON.stringify(newMessages));
    localStorage.setItem('selectedMessage', JSON.stringify(item));
  }

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
              <button
                className={`flex h-full w-full cursor-pointer flex-row items-center justify-between rounded-xl bg-gray-1 shadow-sm ${
                  borderColor ? 'border border-primary' : ''
                } px-4 py-3`}
                onClick={() => {
                  setBorderColor(true);
                  notificationService.openSuccessToast('Copied to clipboard');
                  copyToClipboard(email);
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
                  notificationService.openSuccessToast('Copied to clipboard');
                  copyToClipboard(email);
                }}
              >
                <Copy size={24} />
                <p>{textContent.copyEmail}</p>
              </button>
              <button
                className="flex w-full flex-row items-center justify-center space-x-2 whitespace-nowrap rounded-lg border border-gray-10 bg-white px-5 py-2 shadow-sm hover:bg-gray-10"
                onClick={() => {
                  removeLocalStorage();
                  setEmail(null);
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

        <Inbox
          textContent={textContent.inbox}
          isMobileView={isMobileView}
          openedMessages={openedMessages}
          onRefresh={onRefresh}
          messages={messages}
          selectedMessage={selectedMessage}
          onMessageSelected={onMessageSelected}
        />
      </div>
    </section>
  );
};

export default HeroSection;
