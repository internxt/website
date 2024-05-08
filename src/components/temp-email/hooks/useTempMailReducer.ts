import { useCallback, useReducer } from 'react';
import { ActionType, ActionTypes, MessageObjProps, UserProps } from '../types/types';

const reducer = (state, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };

    case ActionTypes.SET_BORDER_COLOR:
      return { ...state, borderColor: action.payload };
    case ActionTypes.SET_OPENED_MESSAGES:
      return { ...state, openedMessages: action.payload };
    case ActionTypes.SET_IS_REFRESHED:
      return { ...state, isRefreshed: action.payload };
    case ActionTypes.SET_MESSAGES:
      return { ...state, messages: action.payload };
    case ActionTypes.SET_SELECTED_MESSAGES:
      return { ...state, selectedMessage: action.payload };
    case ActionTypes.SET_GENERATE_EMAIL:
      return { ...state, generateEmail: action.payload };
    case ActionTypes.SET_IS_CHANGE_EMAIL_ICON_ANIMATED:
      return { ...state, isChangeEmailIconAnimated: action.payload };
    default:
      return state;
  }
};

const initialState = {
  user: undefined,
  borderColor: false,
  openedMessages: 0,
  isRefreshed: false,
  messages: [],
  selectedMessage: null,
  generateEmail: false,
  isChangeEmailIconAnimated: false,
};

export const useTempMailReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = useCallback((user: UserProps | undefined) => {
    dispatch({ type: 'SET_USER', payload: user });
  }, []);

  const setBorderColor = useCallback((borderColor: boolean) => {
    dispatch({ type: 'SET_BORDER_COLOR', payload: borderColor });
  }, []);

  const setOpenedMessages = useCallback((openedMessages: number) => {
    dispatch({ type: 'SET_OPENED_MESSAGES', payload: openedMessages });
  }, []);

  const setIsRefreshed = useCallback((isRefreshed: boolean) => {
    dispatch({ type: 'SET_IS_REFRESHED', payload: isRefreshed });
  }, []);

  const setMessages = useCallback((messages: MessageObjProps[] | undefined) => {
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

  return {
    state,
    setUser,
    setBorderColor,
    setOpenedMessages,
    setIsRefreshed,
    setMessages,
    setSelectedMessage,
    setGenerateEmail,
    setIsChangeEmailIconAnimated,
  };
};
