import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Info } from '@phosphor-icons/react';

import Inbox from './components/InboxView';
import Header from '@/components/shared/Header';
import {
  EMAIL_STORAGE_KEY,
  INBOX_STORAGE_KEY,
  MAX_HOURS_BEFORE_EXPIRE_EMAIL,
  SETUP_TIME_STORAGE_KEY,
  copyToClipboard,
  createEmail,
  fetchAndFormatInbox,
  removeLocalStorage,
} from './services/temp-mail.service';
import { notificationService } from '@/components/Snackbar';
import useWindowFocus from './hooks/useWindowFocus';
import EmailToolbar from './components/EmailToolBar';
import { ActionType, ActionTypes, MessageObjProps } from './types/types';

const reducer = (state, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_EMAIL:
      return { ...state, email: action.payload };
    case ActionTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case ActionTypes.SET_BORDER_COLOR:
      return { ...state, borderColor: action.payload };
    case ActionTypes.SET_OPENED_MESSAGES:
      return { ...state, openedMessages: action.payload };
    case ActionTypes.SET_IS_MOBILE_VIEW:
      return { ...state, isMobileView: action.payload };
    case ActionTypes.SET_IS_REFRESHED:
      return { ...state, isRefreshed: action.payload };
    case ActionTypes.SET_MESSAGES:
      return { ...state, messages: action.payload };
    case ActionTypes.SET_SELECTED_MESSAGES:
      return { ...state, selectedMessages: action.payload };
    case ActionTypes.SET_GENERATE_EMAIL:
      return { ...state, generateEmail: action.payload };
    case ActionTypes.SET_IS_CHANGE_EMAIL_ICON_ANIMATED:
      return { ...state, isChangeEmailIconAnimated: action.payload };
    default:
      return state;
  }
};

const initialState = {
  email: undefined,
  token: '',
  borderColor: false,
  openedMessages: 0,
  isMobileView: false,
  isRefreshed: false,
  messages: [],
  selectedMessage: null,
  generateEmail: false,
  isChangeEmailIconAnimated: false,
};

export const HeroSection = ({ textContent }) => {
  const isFocused = useWindowFocus();
  const timeNow = new Date().getTime();

  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    email,
    token,
    borderColor,
    openedMessages,
    isMobileView,
    isRefreshed,
    messages,
    selectedMessage,
    generateEmail,
    isChangeEmailIconAnimated,
  } = state;

  const setEmail = useCallback((email: string | undefined) => {
    dispatch({ type: 'SET_EMAIL', payload: email });
  }, []);

  const setToken = useCallback((token: string) => {
    dispatch({ type: 'SET_TOKEN', payload: token });
  }, []);

  const setBorderColor = useCallback((borderColor: boolean) => {
    dispatch({ type: 'SET_BORDER_COLOR', payload: borderColor });
  }, []);

  const setOpenedMessages = useCallback((openedMessages: number) => {
    dispatch({ type: 'SET_OPENED_MESSAGES', payload: openedMessages });
  }, []);

  const setIsMobileView = useCallback((isMobileView: boolean) => {
    dispatch({ type: 'SET_IS_MOBILE_VIEW', payload: isMobileView });
  }, []);

  const setIsRefreshed = useCallback((isRefreshed: boolean) => {
    dispatch({ type: 'SET_IS_REFRESHED', payload: isRefreshed });
  }, []);

  const setMessages = useCallback((messages: MessageObjProps[]) => {
    dispatch({ type: 'SET_MESSAGES', payload: messages });
  }, []);

  const setSelectedMessage = useCallback((selectedMessage: MessageObjProps | null) => {
    dispatch({ type: 'SET_SELECTED_MESSAGES', payload: selectedMessage });
  }, []);

  const setGenerateEmail = useCallback((generateEmail: boolean) => {
    dispatch({ type: 'SET_GENERATE_EMAIL', payload: generateEmail });
  }, []);

  const setIsChangeEmailIconAnimated = useCallback((isChangeEmailIconAnimated: boolean) => {
    dispatch({ type: 'SET_IS_CHANGE_EMAIL_ICON_ANIMATED', payload: isChangeEmailIconAnimated });
  }, []);

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
          notificationService.openErrorToast('Something went wrong');
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
    setEmail(undefined);
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
