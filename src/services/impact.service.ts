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
  irclickid,
  utmMedium,
}: {
  randomUUID: string;
  ip?: string;
  userAgent: string;
  page: {
    url: string;
    referrer: string;
  };
  irclickid?: string | null;
  utmMedium?: string | null;
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
    ...(irclickid && {
      properties: {
        irclickid,
        ...(utmMedium && { partner_id: utmMedium }),
      },
    }),
  });
};

export const handleImpactEvent = async ({
  event,
  properties,
}: {
  event: string;
  properties?: Record<string, unknown>;
}): Promise<void> => {
  const randomUUID = getCookie('impactAnonymousId') ?? crypto.randomUUID();

  const urlParams = new URLSearchParams(window.location.search);
  const irclickid = getCookie('impactClickId') ?? urlParams.get('irclickid');
  const utmMedium = getCookie('impactPartnerId') ?? urlParams.get('utm_medium');

  try {
    await axios.post(IMPACT_API, {
      anonymousId: randomUUID,
      timestamp: moment().format('YYYY-MM-DDTHH:mm:ss.sssZ'),
      messageId: crypto.randomUUID(),
      type: 'track',
      event,
      properties: {
        ...properties,
        ...(irclickid && { irclickid }),
        ...(utmMedium && { partner_id: utmMedium }),
      },
    });
  } catch (error) {
    console.warn('Impact event tracking failed:', error);
  }
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
    console.warn('IP lookup service unavailable, defaulting to undefined', error);
    ip = undefined;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const irclickid = urlParams.get('irclickid');
  const utmMedium = urlParams.get('utm_medium');

  const impactAnonymousId = getCookie('impactAnonymousId');
  const randomUUID = impactAnonymousId ?? crypto.randomUUID();

  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 2);

  const anonymousDate = new Date();
  anonymousDate.setFullYear(anonymousDate.getFullYear() + 10);

  const trackingExpiration = new Date();
  trackingExpiration.setDate(trackingExpiration.getDate() + 30);

  document.cookie = `impactSource=${source};expires=${expirationDate.toUTCString()};domain=${COOKIE_DOMAIN};Path=/`;
  document.cookie = `impactAnonymousId=${randomUUID};expires=${anonymousDate.toUTCString()};domain=${COOKIE_DOMAIN};Path=/`;

  if (irclickid) {
    document.cookie = `impactClickId=${irclickid};expires=${trackingExpiration.toUTCString()};domain=${COOKIE_DOMAIN};Path=/`;
  }

  if (utmMedium) {
    document.cookie = `impactPartnerId=${utmMedium};expires=${trackingExpiration.toUTCString()};domain=${COOKIE_DOMAIN};Path=/`;
  }

  try {
    await sendImpactTrack({
      randomUUID,
      ip,
      userAgent,
      page,
      irclickid,
      utmMedium,
    });
  } catch (error) {
    console.warn('Analytics tracking failed:', error);
  }
};
