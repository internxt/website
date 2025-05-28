import { GetServerSidePropsContext } from 'next';

const Cookies = require('cookies');
const moment = require('moment');
const url = require('url');
const queryString = require('querystring');

function parseUri(ctx: GetServerSidePropsContext) {
  const { query } = url.parse(ctx.req.url);
  const parsedQuery = queryString.parse(query);
  return parsedQuery;
}

function setCookie({
  cookieName,
  cookieValue,
  expiration,
}: {
  cookieName: string;
  cookieValue: string;
  expiration?: Date;
}) {
  const domain = process.env.NODE_ENV === 'production' ? 'internxt.com' : 'localhost';

  const expirationDate = expiration ? new Date(expiration).toUTCString() : moment().add(100, 'days').toDate();

  const cookie = `${cookieName}=${cookieValue};expires=${expirationDate};domain=${domain}; Path=/`;

  document.cookie = cookie;
}

function getCookie(cookieName: string): string {
  const cookie = {};
  if (typeof document !== 'undefined') {
    document.cookie.split(';').forEach((el) => {
      const [key, value] = el.split('=');
      cookie[key.trim()] = value;
    });
  }
  return cookie[cookieName];
}

function setReferralCookie(ctx: GetServerSidePropsContext): void {
  const parsedUri = parseUri(ctx);

  if (!parsedUri.ref) {
    return;
  }

  const referralId = parsedUri.ref;

  const expires = moment().add(2, 'days').toDate();
  const cookies = new Cookies(ctx.req, ctx.res);

  cookies.set('REFERRAL', referralId, {
    domain: process.env.NODE_ENV === 'production' ? '.internxt.com' : 'localhost',
    expires,
    overwrite: true,
    httpOnly: false,
  });

  // httpOnly must be false in order to be accesible by JavaScript
}

function setPublicCookie(ctx: GetServerSidePropsContext, name: string, value: string, expires: Date): void {
  const cookies = new Cookies(ctx.req, ctx.res);

  cookies.set(name, value, {
    domain: process.env.NODE_ENV === 'production' ? '.internxt.com' : 'localhost',
    expires,
    overwrite: true,
    httpOnly: false,
  });
}

export const saveGclidToCookie = (gclid: string) => {
  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + 90 * 24 * 60 * 60 * 1000);
  document.cookie = `gclid=${gclid}; expires=${expiryDate.toUTCString()}; path=/`;
};

export const getGclidFromURL = (): string | null => {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  return params.get('gclid');
};

export default {
  parseUri,
  setCookie,
  getCookie,
  setReferralCookie,
  setPublicCookie,
};
