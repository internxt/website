import crypto from 'crypto';
import { isIP } from 'node:net';
import tls from 'node:tls';

import { MessageObjProps } from '@/components/temp-email/types/types';

const MAIL_TM_HOST = 'api.mail.tm';
const REQUEST_TIMEOUT_MS = 15000;

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

interface RequestOptions {
  body?: unknown;
  jwt?: string;
  clientIp?: string;
}

const send = (payload: string) =>
  new Promise<{ status: number; body: string }>((resolve, reject) => {
    const socket = tls.connect({ host: MAIL_TM_HOST, port: 443, servername: MAIL_TM_HOST }, () =>
      socket.write(payload),
    );
    let raw = '';

    socket.setEncoding('utf8');
    socket.setTimeout(REQUEST_TIMEOUT_MS, () => socket.destroy(new Error('mail.tm request timed out')));
    socket.on('data', (chunk: string) => (raw += chunk));
    socket.on('error', reject);
    socket.on('end', () => {
      const headersEnd = raw.indexOf('\r\n\r\n');

      if (headersEnd < 0) return reject(new Error('mail.tm sent a malformed response'));

      resolve({ status: Number(raw.slice(9, 12)), body: raw.slice(headersEnd + 4) });
    });
  });

const request = async <T>(method: string, url: string, options: RequestOptions = {}): Promise<T> => {
  const payload = options.body === undefined ? '' : JSON.stringify(options.body);
  const headers = [
    `${method} ${url} HTTP/1.0`,
    `Host: ${MAIL_TM_HOST}`,
    'Accept: application/json',
    'Connection: close',
  ];

  if (options.jwt) headers.push(`Authorization: Bearer ${options.jwt}`);
  if (payload) headers.push('Content-Type: application/json', `Content-Length: ${Buffer.byteLength(payload)}`);
  if (options.clientIp && isIP(options.clientIp)) headers.push(`X-Forwarded-For: ${options.clientIp}`);

  const { status, body } = await send(`${headers.join('\r\n')}\r\n\r\n${payload}`);

  if (status < 200 || status >= 300) {
    throw Object.assign(new Error(`mail.tm responded ${status} for ${url}`), {
      config: { url },
      response: { status, data: body },
    });
  }

  return body ? JSON.parse(body) : (undefined as T);
};

const getJwt = async (address: string, password: string, clientIp?: string): Promise<string> => {
  const { token } = await request<{ token: string }>('POST', '/token', { body: { address, password }, clientIp });

  return token;
};

const randomHash = (bytes: number) => crypto.randomBytes(bytes).toString('hex');

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
  const domains = await request<{ domain: string; isActive: boolean }[]>('GET', '/domains?page=1', { clientIp });

  const domain = domains.find((item) => item.isActive)?.domain;

  if (!domain) throw new Error('No active mail.tm domain available');

  const address = `${randomHash(6)}@${domain}`;
  const password = randomHash(12);

  await request('POST', '/accounts', { body: { address, password }, clientIp });

  return { address, token: password };
};

export const getInbox = async (address: string, password: string, clientIp?: string): Promise<MessageObjProps[]> => {
  const jwt = await getJwt(address, password, clientIp);

  const messages = await request<MailTmMessage[]>('GET', '/messages?page=1', { jwt, clientIp });

  return messages.map(toMessageObj);
};

export const getMessage = async (
  address: string,
  password: string,
  messageId: string,
  clientIp?: string,
): Promise<MessageObjProps> => {
  const jwt = await getJwt(address, password, clientIp);

  const message = await request<MailTmMessage>('GET', `/messages/${encodeURIComponent(messageId)}`, { jwt, clientIp });

  return toMessageObj(message);
};
