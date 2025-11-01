// services/impact.service.ts
import axios from 'axios';
import moment from 'moment';
import { getCookie } from '@/utils/getCookie';
import { COOKIE_DOMAIN } from '@/constants';

const IMPACT_API = process.env.NEXT_PUBLIC_IMPACT_API as string;

const sendImpactTrack = ({
  randomUUID,
  ip,
  userAgent,
  page,
}: {
  randomUUID: string;
  ip?: string;
  userAgent: string;
  page: {
    url: string;
    referrer: string;
  };
}): Promise<void> => {
  const nowInTimestamp = moment().format('YYYY-MM-DDTHH:mm:ss.sssZ');

  return axios.post(IMPACT_API, {
    anonymousId: randomUUID,
    timestamp: nowInTimestamp,
    request_ip: ip,
    context: {
      userAgent,
      page,
    },
    type: 'page',
  });
};

export const handleImpact = async ({
  source,
  userAgent,
  page,
}: {
  source: string;
  userAgent: string;
  page: {
    url: string;
    referrer: string;
  };
}) => {
  let ip: string | undefined;

  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_COUNTRY_API_URL}`);
    ip = data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    ip = undefined;
  }

  const impactAnonymousId = getCookie('impactAnonymousId');
  const randomUUID = impactAnonymousId ?? crypto.randomUUID();

  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 2);

  const anonymousDate = new Date();
  anonymousDate.setFullYear(anonymousDate.getFullYear() + 10);

  document.cookie = `impactSource=${source};expires=${expirationDate.toUTCString()};domain=${COOKIE_DOMAIN};Path=/`;
  document.cookie = `impactAnonymousId=${randomUUID};expires=${anonymousDate.toUTCString()};domain=${COOKIE_DOMAIN};Path=/`;

  try {
    await sendImpactTrack({ randomUUID, ip, userAgent, page });
  } catch (error) {
    console.error('Error sending impact track:', error);
    // Impact tracking is non-critical, continue execution
  }
};
