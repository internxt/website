import axios from 'axios';

import { MessageObjProps } from '@/components/temp-email/types/types';

const MAIL_TM_API = 'https://api.mail.tm';
const MERCURE_HUB = 'https://mercure.mail.tm/.well-known/mercure';

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
  text?: string;
  seen: boolean;
  createdAt: string;
  html?: string[];
}

const randomHash = (bytes: number) => {
  const buffer = new Uint8Array(bytes);

  globalThis.crypto.getRandomValues(buffer);

  return Array.from(buffer, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

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
  html: message.html?.length ? message.html.join('') : message.text ?? message.intro,
  subject: message.subject,
  id: message.id,
  seen: message.seen,
});

/** Intercambia address + password por un JWT de mail.tm. */
const getJwt = async (address: string, password: string): Promise<string> => {
  const { data } = await mailTm.post<{ token: string }>('/token', { address, password });

  return data.token;
};

/** Crea una cuenta desechable. Devuelve la password, que es lo que el cliente guarda como `token`. */
export const createAccount = async (): Promise<{
  address: string;
  token: string;
  accountId: string;
  jwt: string;
}> => {
  const { data: domains } = await mailTm.get<{ domain: string; isActive: boolean }[]>('/domains?page=1');

  const domain = domains.find((item) => item.isActive)?.domain;

  if (!domain) throw new Error('No active mail.tm domain available');

  const address = `${randomHash(6)}@${domain}`;
  const password = randomHash(12);

  const { data: account } = await mailTm.post<{ id: string }>('/accounts', { address, password });

  const jwt = await getJwt(address, password);

  return { address, token: password, accountId: account.id, jwt };
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

export const subscribeToInbox = (
  accountId: string,
  jwt: string,
  onMessage: (message: MessageObjProps) => void,
  onReconnect?: () => void,
): (() => void) => {
  const url = new URL(MERCURE_HUB);
  url.searchParams.set('topic', `/accounts/${accountId}`);
  url.searchParams.set('authorization', jwt);

  const source = new EventSource(url.toString());
  let hasConnected = false;

  source.onopen = () => {
    if (hasConnected) onReconnect?.();

    hasConnected = true;
  };

  source.onmessage = (event) => {
    try {
      const payload = JSON.parse(event.data);

      if (payload['@type'] !== 'Message') return;

      onMessage(toMessageObj(payload));
    } catch {
      return;
    }
  };

  return () => source.close();
};
