import axios from 'axios';

import { MessageObjProps } from '@/components/temp-email/types/types';

const GUERRILLA_MAIL_API = 'https://api.guerrillamail.com';

const guerrillaMail = axios.create({
  baseURL: GUERRILLA_MAIL_API,
  headers: { accept: 'application/json' },
  timeout: 15000,
});

interface GuerrillaMailMessage {
  mail_id: string;
  mail_from: string;
  mail_subject: string;
  mail_excerpt: string;
  mail_timestamp: string;
  mail_read: string;
  mail_body?: string;
}

/**
 * `mail_timestamp` llega en segundos y como cadena, pero la UI lo pasa por
 * `moment()`, que espera milisegundos. El correo de bienvenida del proveedor
 * llega con timestamp 0, que se mostraria como 1970.
 */
const toMessageObj = (message: GuerrillaMailMessage, address: string): MessageObjProps => ({
  body: message.mail_excerpt,
  date: Number(message.mail_timestamp) * 1000 || Date.now(),
  from: message.mail_from,
  to: address,
  html: message.mail_body ?? message.mail_excerpt,
  subject: message.mail_subject,
  id: message.mail_id,
  seen: message.mail_read === '1',
});

/**
 * Guerrilla Mail inyecta un correo de bienvenida propio en cada buzon nuevo.
 * No es correo del usuario, asi que no lo mostramos.
 */
const isProviderNotice = (message: GuerrillaMailMessage) =>
  message.mail_from?.toLowerCase().endsWith('@guerrillamail.com') ?? false;

/** Crea una direccion desechable. El `sid_token` de la sesion es lo que el cliente guarda como `token`. */
export const createAccount = async (): Promise<{ address: string; token: string }> => {
  const { data } = await guerrillaMail.get<{ email_addr: string; sid_token: string }>('/ajax.php', {
    params: { f: 'get_email_address', ip: '127.0.0.1', agent: 'internxt' },
  });

  return { address: data.email_addr, token: data.sid_token };
};

export const getInbox = async (address: string, sidToken: string): Promise<MessageObjProps[]> => {
  const { data } = await guerrillaMail.get<{ list: GuerrillaMailMessage[] }>('/ajax.php', {
    params: { f: 'check_email', seq: 0, sid_token: sidToken },
  });

  return (data.list ?? [])
    .filter((message) => !isProviderNotice(message))
    .map((message) => toMessageObj(message, address));
};

export const getMessage = async (
  address: string,
  sidToken: string,
  messageId: string,
): Promise<MessageObjProps> => {
  const { data } = await guerrillaMail.get<GuerrillaMailMessage>('/ajax.php', {
    params: { f: 'fetch_email', email_id: messageId, sid_token: sidToken },
  });

  return toMessageObj(data, address);
};
