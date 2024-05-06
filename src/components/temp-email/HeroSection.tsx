'use client';

import React, { useCallback, useEffect } from 'react';
import { Info } from '@phosphor-icons/react';

import { Inbox } from './components/InboxView';
import Header from '@/components/shared/Header';
import {
  EMAIL_STORAGE_KEY,
  INBOX_STORAGE_KEY,
  MAX_HOURS_BEFORE_EXPIRE_EMAIL,
  SETUP_TIME_STORAGE_KEY,
  TIME_NOW,
  createEmail,
  fetchAndFormatInbox,
  removeLocalStorage,
} from './services/temp-mail.service';

import useWindowFocus from './hooks/useWindowFocus';
import EmailToolbar from './components/EmailToolBar';
import { MessageObjProps } from './types/types';
import { useTempMailReducer } from './hooks/useTempMailReducer';
import copyToClipboard from '../utils/copy-to-clipboard';

export const HeroSection = ({ textContent, csrfToken }) => {
  const isFocused = useWindowFocus();

  const {
    state,
    setEmail,
    setToken,
    setBorderColor,
    setGenerateEmail,
    setIsChangeEmailIconAnimated,
    setIsRefreshed,
    setMessages,
    setOpenedMessages,
    setSelectedMessage,
  } = useTempMailReducer();

  const {
    email,
    token,
    borderColor,
    openedMessages,
    isRefreshed,
    messages,
    selectedMessage,
    generateEmail,
    isChangeEmailIconAnimated,
  } = state;

  // Open the links that are in the email received in a new tab
  useEffect(() => {
    const inboxElement = document.getElementById('inbox');

    if (!inboxElement) return;

    const links = inboxElement.querySelectorAll('a');

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
    handleInitialSetup();
  }, []);

  useEffect(() => {
    checkLocalStorageAndGetEmail();
  }, [generateEmail]);

  useEffect(() => {
    handleBorderColor();
  }, [borderColor]);

  useEffect(() => {
    handleInboxUpdate();
    return autoFetchEmails();
  }, [email, isRefreshed]);

  useEffect(() => {
    if (isChangeEmailIconAnimated) {
      setTimeout(() => {
        setIsChangeEmailIconAnimated(false);
      }, 1000);
    }
  }, [isChangeEmailIconAnimated]);

  const fetchEmail = async () => {
    try {
      const emailData = await createEmail(csrfToken);
      localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(emailData));
      setEmail(emailData.address);
      setToken(emailData.token);
      setSelectedMessage(null);
      setMessages(undefined);
    } catch (err) {
      // NO OP
    }
  };

  const checkLocalStorageAndGetEmail = async () => {
    removeDataFromStorageIfExpired();

    const storedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);

    if (storedEmail !== null) {
      const { address, token } = JSON.parse(storedEmail);
      setEmail(address);
      setToken(token);
    } else {
      localStorage.setItem(SETUP_TIME_STORAGE_KEY, String(TIME_NOW));
      await fetchEmail();
    }
  };

  const getMailInbox = useCallback(async (email: string, userToken: string) => {
    if (!userToken && !email) return;

    try {
      const messagesInInbox: MessageObjProps[] | undefined = await fetchAndFormatInbox(email, userToken, csrfToken);

      if (messagesInInbox && messagesInInbox.length > 0) {
        const unopenedMessages = messagesInInbox.filter((item) => !item.opened).length;

        setMessages(messagesInInbox);
        setOpenedMessages(unopenedMessages);
        localStorage.setItem(INBOX_STORAGE_KEY, JSON.stringify(messagesInInbox));
      } else {
        const inbox = localStorage.getItem(INBOX_STORAGE_KEY) as string;
        setMessages(JSON.parse(inbox));
      }
    } catch (err) {
      // NO OP
      const error = err as Error;

      if (error.message.includes('404')) {
        await onDeleteEmailButtonClicked();
      }
    }
  }, []);

  const removeDataFromStorageIfExpired = () => {
    const setupTime = localStorage.getItem(SETUP_TIME_STORAGE_KEY);
    const isEmailExpired = setupTime !== null && TIME_NOW - Number(setupTime) > MAX_HOURS_BEFORE_EXPIRE_EMAIL;

    if (isEmailExpired) {
      removeLocalStorage();
      setSelectedMessage(null);
      setMessages(undefined);
    }
  };

  const handleBorderColor = useCallback(() => {
    if (borderColor) {
      setTimeout(() => {
        setBorderColor(false);
      }, 4000);
    }
  }, [borderColor]);

  const handleInitialSetup = () => {
    const savedSelectedMessage = localStorage.getItem('selectedMessage');

    if (savedSelectedMessage) {
      setSelectedMessage(JSON.parse(savedSelectedMessage));
    }
  };

  const handleInboxUpdate = useCallback(async () => {
    await getMailInbox(email, token);
  }, [email, token]);

  const autoFetchEmails = useCallback(() => {
    if (isFocused) {
      const interval = setInterval(() => getMailInbox(email, token), 60000);
      return () => clearInterval(interval);
    }
  }, [isFocused, token]);

  const onRefresh = useCallback(() => {
    setIsRefreshed(!isRefreshed);
  }, [isRefreshed]);

  const onMessageSelected = (item, index) => {
    const messagesFromLS = JSON.parse(localStorage.getItem('inbox') as string);
    messagesFromLS[index].opened = true;
    setMessages(messagesFromLS);
    setSelectedMessage(item);
    localStorage.setItem('inbox', JSON.stringify(messagesFromLS));
    localStorage.setItem('selectedMessage', JSON.stringify(item));
  };

  const onCopyEmailButtonClicked = () => {
    setBorderColor(true);
    copyToClipboard(email);
  };

  const onDeleteEmailButtonClicked = async () => {
    removeLocalStorage();
    setEmail(undefined);
    setToken(undefined);
    setGenerateEmail(!generateEmail);
    setIsChangeEmailIconAnimated(true);
  };

  return (
    <section className="overflow-hidden pt-32 pb-20">
      <div className="flex flex-col items-center justify-center space-y-10 px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <Header isToolsPage>{textContent.title}</Header>
          <p className="pt-5 text-xl text-gray-80">{textContent.subtitle}</p>
        </div>
        <EmailToolbar
          borderColor={borderColor}
          isChangeEmailIconAnimated={isChangeEmailIconAnimated}
          email={email}
          onCopy={onCopyEmailButtonClicked}
          onDelete={onDeleteEmailButtonClicked}
          textContent={textContent}
        />

        <Inbox
          textContent={textContent.inbox}
          openedMessages={openedMessages}
          onRefresh={onRefresh}
          messages={messages}
          selectedMessage={selectedMessage}
          onMessageSelected={onMessageSelected}
        />
        <div className="flex flex-row items-center space-x-1 pt-2 text-center text-sm text-gray-70">
          <Info size={16} className="hidden md:flex" />
          <p>
            {textContent.expireEmail.normal}{' '}
            <span className="font-semibold text-gray-100">{textContent.expireEmail.bold}</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
