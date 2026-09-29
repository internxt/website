import axios from 'axios';
import crypto from 'crypto';
import { isIP } from 'node:net';

import { MessageObjProps } from '@/components/temp-email/types/types';

const MAIL_TM_API = 'https://api.mail.tm';

const mailTm = axios.create({
  baseURL: MAIL_TM_API,
  headers: { accept: 'application/json' },
  timeout: 15000,
});

interface MailTmAddress {
  address: string;
  name: string;
}

interface MailTmMessage {
  id: string;
  from: MailTmAddress;
  to: MailTmAddress | MailTmAddress[];
  subject: string;
  intro: string;
  seen: boolean;
  createdAt: string;
  html?: string[];
}

const randomHash = (bytes: number) => crypto.randomBytes(bytes).toString('hex');

const forwardClientIp = (clientIp?: string) => (clientIp && isIP(clientIp) ? { 'x-forwarded-for': clientIp } : {});

const toAddress = (to: MailTmAddress | MailTmAddress[]) => (Array.isArray(to) ? to[0]?.address : to?.address);

const toMessageObj = (message: MailTmMessage): MessageObjProps => ({
  body: message.intro,
  date: message.createdAt as unknown as number,
  from: message.from?.address,
  to: toAddress(message.to),
  html: message.html?.length ? message.html.join('') : message.intro,
  subject: message.subject,
  id: message.id,
  seen: message.seen,
});

export const createAccount = async (clientIp?: string): Promise<{ address: string; token: string }> => {
  const headers = forwardClientIp(clientIp);

  const { data: domains } = await mailTm.get<{ domain: string; isActive: boolean }[]>('/domains?page=1', { headers });

  const domain = domains.find((item) => item.isActive)?.domain;

  if (!domain) throw new Error('No active mail.tm domain available');

  const address = `${randomHash(6)}@${domain}`;
  const password = randomHash(12);

  await mailTm.post('/accounts', { address, password }, { headers });

  return { address, token: password };
};

const getJwt = async (address: string, password: string, clientIp?: string): Promise<string> => {
  const { data } = await mailTm.post<{ token: string }>(
    '/token',
    { address, password },
    { headers: forwardClientIp(clientIp) },
  );

  return data.token;
};

export const getInbox = async (address: string, password: string, clientIp?: string): Promise<MessageObjProps[]> => {
  const jwt = await getJwt(address, password, clientIp);

  const { data } = await mailTm.get<MailTmMessage[]>('/messages?page=1', {
    headers: { ...forwardClientIp(clientIp), authorization: `Bearer ${jwt}` },
  });

  return data.map(toMessageObj);
};

export const getMessage = async (
  address: string,
  password: string,
  messageId: string,
  clientIp?: string,
): Promise<MessageObjProps> => {
  const jwt = await getJwt(address, password, clientIp);

  const { data } = await mailTm.get<MailTmMessage>(`/messages/${encodeURIComponent(messageId)}`, {
    headers: { ...forwardClientIp(clientIp), authorization: `Bearer ${jwt}` },
  });

  return toMessageObj(data);
};
