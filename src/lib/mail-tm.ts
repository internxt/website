import axios, { AxiosError } from 'axios';
import crypto from 'crypto';

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

/**
 * mail.tm devuelve `to` como objeto en unos endpoints y como array en otros,
 * asi que normalizamos antes de mapear.
 */
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

const DOMAIN_CACHE_TTL_MS = 60 * 60 * 1000;

let cachedDomain: { domain: string; expiresAt: number } | null = null;

const getActiveDomain = async (): Promise<string> => {
  if (cachedDomain && cachedDomain.expiresAt > Date.now()) return cachedDomain.domain;

  const { data: domains } = await mailTm.get<{ domain: string; isActive: boolean }[]>('/domains?page=1');

  const domain = domains.find((item) => item.isActive)?.domain;

  if (!domain) throw new Error('No active mail.tm domain available');

  cachedDomain = { domain, expiresAt: Date.now() + DOMAIN_CACHE_TTL_MS };

  return domain;
};

const RETRY_BACKOFF_MS = [1500, 3000];

const isRateLimited = (err: unknown) => (err as AxiosError)?.response?.status === 429;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const createAccount = async (): Promise<{ address: string; token: string }> => {
  const domain = await getActiveDomain();

  for (let attempt = 0; ; attempt++) {
    const address = `${randomHash(6)}@${domain}`;
    const password = randomHash(12);

    try {
      await mailTm.post('/accounts', { address, password });

      return { address, token: password };
    } catch (err) {
      if (!isRateLimited(err) || attempt >= RETRY_BACKOFF_MS.length) throw err;

      await sleep(RETRY_BACKOFF_MS[attempt] + Math.random() * 300);
    }
  }
};

/** Intercambia address + password por un JWT de mail.tm. */
const getJwt = async (address: string, password: string): Promise<string> => {
  const { data } = await mailTm.post<{ token: string }>('/token', { address, password });

  return data.token;
};

export const getInbox = async (address: string, password: string): Promise<MessageObjProps[]> => {
  const jwt = await getJwt(address, password);

  const { data } = await mailTm.get<MailTmMessage[]>('/messages?page=1', {
    headers: { authorization: `Bearer ${jwt}` },
  });

  return data.map(toMessageObj);
};

export const getMessage = async (address: string, password: string, messageId: string): Promise<MessageObjProps> => {
  const jwt = await getJwt(address, password);

  const { data } = await mailTm.get<MailTmMessage>(`/messages/${encodeURIComponent(messageId)}`, {
    headers: { authorization: `Bearer ${jwt}` },
  });

  return toMessageObj(data);
};
