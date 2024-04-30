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

export const ActionTypes = {
  SET_EMAIL: 'SET_EMAIL',
  SET_TOKEN: 'SET_TOKEN',
  SET_BORDER_COLOR: 'SET_BORDER_COLOR',
  SET_OPENED_MESSAGES: 'SET_OPENED_MESSAGES',
  SET_IS_REFRESHED: 'SET_IS_REFRESHED',
  SET_MESSAGES: 'SET_MESSAGES',
  SET_SELECTED_MESSAGES: 'SET_SELECTED_MESSAGES',
  SET_GENERATE_EMAIL: 'SET_GENERATE_EMAIL',
  SET_IS_CHANGE_EMAIL_ICON_ANIMATED: 'SET_IS_CHANGE_EMAIL_ICON_ANIMATED',
};

export type ActionType =
  | { type: 'SET_EMAIL'; payload: string | undefined }
  | { type: 'SET_TOKEN'; payload: string | undefined }
  | { type: 'SET_BORDER_COLOR'; payload: boolean }
  | { type: 'SET_OPENED_MESSAGES'; payload: number }
  | { type: 'SET_IS_REFRESHED'; payload: boolean | undefined }
  | { type: 'SET_MESSAGES'; payload: MessageObjProps[] | undefined }
  | { type: 'SET_SELECTED_MESSAGES'; payload: MessageObjProps | null }
  | { type: 'SET_GENERATE_EMAIL'; payload: boolean | undefined }
  | { type: 'SET_IS_CHANGE_EMAIL_ICON_ANIMATED'; payload: boolean | undefined };
