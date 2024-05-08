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
  fetchNewEmail,
  fetchAndFormatInbox,
  getMessageData,
  removeLocalStorage,
} from './services/temp-mail.service';

import EmailToolbar from './components/EmailToolBar';
import { MessageObjProps, StateProps } from './types/types';
import { useTempMailReducer } from './hooks/useTempMailReducer';
import copyToClipboard from '../utils/copy-to-clipboard';

export const HeroSection = ({ textContent }) => {
  const {
    state,
    setUser,
    setBorderColor,
    setGenerateEmail,
    setIsChangeEmailIconAnimated,
    setIsRefreshed,
    setMessages,
    setOpenedMessages,
    setSelectedMessage,
  } = useTempMailReducer();

  const {
    user,
    borderColor,
    openedMessages,
    isRefreshed,
    messages,
    selectedMessage,
    generateEmail,
    isChangeEmailIconAnimated,
  } = state as StateProps;

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
    settingUpTempMailData();
  }, []);

  useEffect(() => {
    checkLocalStorageAndGetEmail();
  }, [generateEmail]);

  useEffect(() => {
    handleBorderColor();
  }, [borderColor]);

  useEffect(() => {
    if (isChangeEmailIconAnimated) {
      setTimeout(() => {
        setIsChangeEmailIconAnimated(false);
      }, 1000);
    }
  }, [isChangeEmailIconAnimated]);

  const settingUpTempMailData = async () => {
    await checkLocalStorageAndGetEmail();

    const savedMessages = localStorage.getItem(INBOX_STORAGE_KEY);
    const savedSelectedMessage = localStorage.getItem('selectedMessage');

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else if (savedSelectedMessage) {
      setSelectedMessage(JSON.parse(savedSelectedMessage));
    }
  };

  const checkLocalStorageAndGetEmail = async () => {
    removeDataFromUserIfExpired();

    const storedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);

    if (storedEmail !== null) {
      const { address, token } = JSON.parse(storedEmail);
      setUser({
        address,
        token,
      });
    } else {
      await getNewEmail();
    }
  };

  const getNewEmail = async () => {
    try {
      const emailData = await fetchNewEmail();

      setUser({
        address: emailData.address,
        token: emailData.token,
      });
      setSelectedMessage(null);
      setMessages(undefined);

      localStorage.setItem(SETUP_TIME_STORAGE_KEY, String(TIME_NOW));
      localStorage.setItem(EMAIL_STORAGE_KEY, JSON.stringify(emailData));
    } catch (error) {
      // NO OP
    }
  };

  const removeDataFromUserIfExpired = () => {
    const setupTime = localStorage.getItem(SETUP_TIME_STORAGE_KEY);
    const isEmailExpired = setupTime !== null && TIME_NOW - Number(setupTime) > MAX_HOURS_BEFORE_EXPIRE_EMAIL;

    if (isEmailExpired) {
      removeAllUserData();
    }
  };

  function removeAllUserData() {
    removeLocalStorage();
    setUser(undefined);
    setSelectedMessage(null);
    setMessages(undefined);
  }

  const getMailInbox = useCallback(async (email: string, tempMailToken: string) => {
    if (!tempMailToken && !email) return;

    try {
      const messagesInInbox: MessageObjProps[] | undefined = await fetchAndFormatInbox(email, tempMailToken);

      if (messagesInInbox && messagesInInbox.length > 0) {
        const unopenedMessages = messagesInInbox.filter((item) => !item.seen).length;

        setMessages(messagesInInbox);
        setOpenedMessages(unopenedMessages);
      }
    } catch (err) {
      // NO OP
      const error = err as Error;

      if (error.message.includes('404')) {
        await onDeleteEmailButtonClicked();
      }
    }
  }, []);

  const handleBorderColor = useCallback(() => {
    if (borderColor) {
      setTimeout(() => {
        setBorderColor(false);
      }, 4000);
    }
  }, [borderColor]);

  const handleInboxUpdate = useCallback(async () => {
    if (!user) return;

    await getMailInbox(user?.address, user?.token);
  }, [user?.address, user?.token]);

  const onRefresh = useCallback(() => {
    setIsRefreshed(!isRefreshed);
    handleInboxUpdate();
  }, [isRefreshed]);

  const onMessageSelected = async (item, index) => {
    if (!user) return;

    const messagesFromLS = JSON.parse(localStorage.getItem('inbox') as string);
    messagesFromLS[index].opened = true;
    try {
      const messageData = await getMessageData(user.address, user.token, item.id);
      setMessages(messagesFromLS);
      setSelectedMessage(messageData.data);
      localStorage.setItem('inbox', JSON.stringify(messagesFromLS));
      localStorage.setItem('selectedMessage', JSON.stringify(item));
    } catch (err) {
      const error = err as Error;
      console.log({ errorMessage: error.message });
    }
  };

  const onCopyEmailButtonClicked = () => {
    if (!user?.address) return;

    setBorderColor(true);
    copyToClipboard(user?.address);
  };

  const onDeleteEmailButtonClicked = async () => {
    removeLocalStorage();
    setUser(undefined);

    await getNewEmail();
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
          email={user?.address}
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
