'use client';

import { useEffect } from 'react';
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
  MESSAGES_INFO,
  SELECTED_MESSAGE,
  saveInfoOfMessageSelectedInLocalStorage,
  saveInboxInLocalStorage,
} from './services/temp-mail.service';

import EmailToolbar from './components/EmailToolBar';
import { MessageObjProps, StateProps } from './types/types';
import { useTempMailReducer } from './hooks/useTempMailReducer';
import copyToClipboard from '../utils/copy-to-clipboard';
import useWindowFocus from '@/hooks/useWindowFocus';
import DOMPurify from 'dompurify';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

export const HeroSection = ({ textContent, lang }) => {
  const isFocused = useWindowFocus();

  const { state, setUser, setBorderColor, setIsChangeEmailIconAnimated, setMessages, setSelectedMessage } =
    useTempMailReducer();

  const { user, borderColor, openedMessages, messages, selectedMessage, isChangeEmailIconAnimated } =
    state as StateProps;

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
    return autoFetchEmails();
  }, [isFocused]);

  const settingUpTempMailData = async () => {
    await checkLocalStorageAndGetEmail();

    const savedMessages = localStorage.getItem(INBOX_STORAGE_KEY);
    const savedSelectedMessage = localStorage.getItem(SELECTED_MESSAGE);

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else if (savedSelectedMessage) {
      setSelectedMessage(JSON.parse(savedSelectedMessage));
    }
  };

  const checkLocalStorageAndGetEmail = async () => {
    removeUserDataIfExpired();

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

  const getMailInbox = async (email: string, tempMailToken: string) => {
    if (!tempMailToken && !email) return;

    const inboxInLocalStorage = JSON.parse(localStorage.getItem(INBOX_STORAGE_KEY) ?? '[]');

    try {
      const messagesInInbox: MessageObjProps[] | undefined = await fetchAndFormatInbox(email, tempMailToken);

      if (messagesInInbox) {
        const newMessages = messagesInInbox.filter(
          (message) => !inboxInLocalStorage.some((item) => item.id === message.id),
        );

        localStorage.setItem(INBOX_STORAGE_KEY, JSON.stringify([...inboxInLocalStorage, ...newMessages]));

        setMessages([...inboxInLocalStorage, ...newMessages]);
      }
    } catch (err) {
      // NO OP
      const error = err as Error;

      if (error.message.includes('404')) {
        await onDeleteEmailButtonClicked();
      }
    }
  };

  const onMessageSelected = async (item: MessageObjProps) => {
    if (!user) return;

    const inboxInLocalStorage = JSON.parse(localStorage.getItem(INBOX_STORAGE_KEY) ?? '[]');
    const infoOfMessagesInSessionStorage = JSON.parse(localStorage.getItem(MESSAGES_INFO) ?? '[]');
    const messageInSessionStorage = infoOfMessagesInSessionStorage?.find((message) => message.id === item.id);

    if (messageInSessionStorage) {
      setSelectedMessage({
        ...messageInSessionStorage,
        body: DOMPurify.sanitize(messageInSessionStorage.body),
        html: DOMPurify.sanitize(messageInSessionStorage.html),
      });
    } else {
      try {
        const messageInfo = await getMessageData(user.address, user.token, item.id);

        messageInfo.body = DOMPurify.sanitize(messageInfo.body);
        messageInfo.html = DOMPurify.sanitize(messageInfo.html);
        messageInfo.seen = true;

        saveInfoOfMessageSelectedInLocalStorage(infoOfMessagesInSessionStorage, messageInfo);

        setSelectedMessage(messageInfo);
        localStorage.setItem(SELECTED_MESSAGE, JSON.stringify(messageInfo));

        saveInboxInLocalStorage(inboxInLocalStorage, messageInfo.id);
        setMessages(inboxInLocalStorage);
      } catch (err) {
        const error = err as Error;
        console.log({ errorMessage: error.message });
      }
    }
  };

  const autoFetchEmails = () => {
    if (!user) return;
    if (isFocused) {
      const interval = setInterval(() => getMailInbox(user?.address, user.token), 40000);
      return () => clearInterval(interval);
    }
  };

  const onRefresh = async () => {
    if (!user) return;
    await getMailInbox(user?.address, user?.token);
  };

  function removeUserDataIfExpired() {
    const setupTime = localStorage.getItem(SETUP_TIME_STORAGE_KEY);
    const isEmailExpired = setupTime !== null && TIME_NOW - Number(setupTime) > MAX_HOURS_BEFORE_EXPIRE_EMAIL;

    if (isEmailExpired) {
      removeAllUserData();
    }
  }

  function removeAllUserData() {
    removeLocalStorage();
    setUser(undefined);
    setSelectedMessage(null);
    setMessages(undefined);
  }

  const onCopyEmailButtonClicked = () => {
    if (!user?.address) return;

    setBorderColor(true);
    setTimeout(() => {
      setBorderColor(false);
    }, 4000);

    copyToClipboard(user?.address);
  };

  const onDeleteEmailButtonClicked = async () => {
    setIsChangeEmailIconAnimated(true);
    setTimeout(() => {
      setIsChangeEmailIconAnimated(false);
    }, 1000);

    removeLocalStorage();
    setUser(undefined);

    await getNewEmail();
  };

  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;

  return (
    <section className="flex items-start justify-center overflow-hidden px-6 pb-10 pt-32 lg:pb-20">
      <div className="flex w-full flex-col items-center justify-center">
        <Image
          src={getImage(`/banners/Ban_Internext_160x600_en.jpg`)}
          alt="BitDefender Vertical Banner"
          width={180}
          height={180}
          quality={100}
          style={{ cursor: 'pointer' }}
          onClick={() =>
            window.open(
              `https://www.bitdefender.com/pages/consumer/${languageForImage}/new/trial/ts-trial-3m/internxt/`,
              '_blank',
              'noopener noreferrer',
            )
          }
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center space-y-10 px-4 md:max-w-[1000px] ">
        <div className="flex w-full max-w-[895px] flex-col items-center justify-center text-center lg:max-w-2xl">
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
      <div className="flex w-full flex-col items-center justify-center">
        <Image
          src={getImage(`/banners/Ban_Internext_160x600_en.jpg`)}
          alt="BitDefender Vertical Banner"
          width={180}
          height={180}
          quality={100}
          style={{ cursor: 'pointer' }}
          onClick={() =>
            window.open(
              `https://www.bitdefender.com/pages/consumer/${languageForImage}/new/trial/ts-trial-3m/internxt/`,
              '_blank',
              'noopener noreferrer',
            )
          }
        />
      </div>
    </section>
  );
};
