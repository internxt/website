import React, { useCallback, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Info } from '@phosphor-icons/react';

import Inbox from './components/InboxView';
import Header from '@/components/shared/Header';
import { createEmail, fetchAndFormatInbox } from './services/temp-mail.service';
import { notificationService } from '@/components/Snackbar';
import useWindowFocus from './hooks/useWindowFocus';
import EmailToolbar from './components/EmailToolBar';

export interface MessageObjProps {
  body: string;
  date: number;
  from: string;
  html: string;
  ip: string;
  subject: string;
  to: string;
  opened: boolean;
}

const EMAIL_STORAGE_KEY = 'email';
const SETUP_TIME_STORAGE_KEY = 'setupTime';
const INBOX_STORAGE_KEY = 'inbox';

const MAX_HOURS_BEFORE_EXPIRE_EMAIL = 5 * 60 * 60 * 1000;

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
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string>('');
  const [borderColor, setBorderColor] = useState<boolean>(false);
  const [openedMessages, setOpenedMessages] = useState<number>(0);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [isRefreshed, setIsRefreshed] = useState<boolean>(false);
  const [messages, setMessages] = useState<MessageObjProps[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<MessageObjProps | null>(null);
  const [generateEmail, setGenerateEmail] = useState<boolean>(false);
  const [isChangeEmailIconAnimated, setIsChangeEmailIconAnimated] = useState(false);

  const isFocused = useWindowFocus();

  const timeNow = new Date().getTime();

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
    return autoFetchEmails();
  }, [email, isRefreshed]);

  useEffect(() => {
    if (isChangeEmailIconAnimated) {
      setTimeout(() => {
        setIsChangeEmailIconAnimated(false);
      }, 1000);
    }
  }, [isChangeEmailIconAnimated]);

  function checkLocalStorage() {
    const setupTime = localStorage.getItem(SETUP_TIME_STORAGE_KEY);
    if (setupTime !== null && timeNow - Number(setupTime) > MAX_HOURS_BEFORE_EXPIRE_EMAIL) {
      removeLocalStorage();
      setSelectedMessage(null);
    }

    const storedEmail = localStorage.getItem(EMAIL_STORAGE_KEY);
    if (storedEmail !== null) {
      const { address, token } = JSON.parse(storedEmail);
      setEmail(address);
      setToken(token);
    } else {
      localStorage.setItem(SETUP_TIME_STORAGE_KEY, String(timeNow));
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

  const handleBorderColor = useCallback(() => {
    if (borderColor) {
      setTimeout(() => {
        setBorderColor(false);
      }, 4000);
    }
  }, [borderColor]);

  function handleInitialSetup() {
    if (localStorage.getItem('selectedMessage')) {
      setSelectedMessage(JSON.parse(localStorage.getItem('selectedMessage') as string));
    }
  }

  const handleInboxUpdate = useCallback(() => {
    getMailInbox(token);
    setIsMobileView(isMobile);
  }, [token, isMobileView]);

  const autoFetchEmails = useCallback(() => {
    if (isFocused) {
      const interval = setInterval(() => getMailInbox(token), 10000);
      return () => clearInterval(interval);
    }
  }, [isFocused, token]);

  const getMailInbox = useCallback(
    async (userToken: string) => {
      if (!userToken) return;

      const messagesLength = messages != null ? messages.length : 0;

      try {
        const messagesInInbox: MessageObjProps[] | undefined = await fetchAndFormatInbox(userToken, messagesLength);
        if (messagesInInbox && messagesInInbox.length > 0) {
          const allMessagesInInbox = messages == null ? [...messagesInInbox] : [...messages, ...messagesInInbox];
          const unopenedMessages = allMessagesInInbox.filter((item) => !item.opened).length;

          setMessages(allMessagesInInbox);
          setOpenedMessages(unopenedMessages);
          localStorage.setItem(INBOX_STORAGE_KEY, JSON.stringify(allMessagesInInbox));
        } else {
          const inbox = localStorage.getItem(INBOX_STORAGE_KEY) as string;
          setMessages(JSON.parse(inbox));
        }
      } catch (err) {
        notificationService.openErrorToast('Something went wrong');
      }
    },
    [messages, token],
  );

  const onRefresh = useCallback(() => {
    setIsRefreshed(!isRefreshed);
  }, [isRefreshed]);

  const onMessageSelected = useCallback(
    (item, index) => {
      //Update the message to local storage
      const newMessages = JSON.parse(localStorage.getItem('inbox') as string);
      newMessages[index].opened = true;
      setMessages(newMessages);
      setSelectedMessage(item);
      localStorage.setItem('inbox', JSON.stringify(newMessages));
      localStorage.setItem('selectedMessage', JSON.stringify(item));
    },
    [selectedMessage],
  );

  const onCopyEmailButtonClicked = () => {
    setBorderColor(true);
    notificationService.openSuccessToast('Copied to clipboard');
    copyToClipboard(email);
  };

  const onDeleteEmailButtonClicked = () => {
    removeLocalStorage();
    setEmail(null);
    setGenerateEmail(!generateEmail);
    setIsChangeEmailIconAnimated(true);
  };

  return (
    <section className="overflow-hidden pt-32 pb-20">
      <div className="flex flex-col items-center justify-center space-y-10 px-5">
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
          isMobileView={isMobileView}
          openedMessages={openedMessages}
          onRefresh={onRefresh}
          messages={messages}
          selectedMessage={selectedMessage}
          onMessageSelected={onMessageSelected}
        />
        <div className="flex flex-row items-center space-x-1 pt-2 text-sm text-gray-70">
          <Info size={16} />
          <p>
            {textContent.expireEmail.normal}{' '}
            <span className="font-semibold text-gray-100">{textContent.expireEmail.bold}</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
