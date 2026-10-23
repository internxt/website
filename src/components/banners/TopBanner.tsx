import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowRight, X } from '@phosphor-icons/react';
import { ANNOUNCEMENT_BAR_HEIGHT, ANNOUNCEMENT_BAR_TEXT_KEY, BLACK_FRIDAY_URL } from '@/announcement.config';
import { useAnnouncementBar } from '@/hooks/useAnnouncementBar';

const DISMISSED_KEY = 'announcementBarDismissed';

const TopBanner = () => {
  const router = useRouter();
  const lang = router.locale;
  const bannersJson = require(`@/assets/lang/${lang}/banners.json`);
  const textContent = bannersJson[ANNOUNCEMENT_BAR_TEXT_KEY] ?? bannersJson.TopBarBanner;

  const { isVisible, hideAnnouncementBar } = useAnnouncementBar();
  const [overflows, setOverflows] = useState(false);

  const viewportRef = useRef<HTMLAnchorElement>(null);
  const copyRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISSED_KEY) === 'true') hideAnnouncementBar();
    } catch {
      /* empty */
    }
  }, []);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const copy = copyRef.current;
    if (!viewport || !copy) return;
    const { paddingLeft, paddingRight } = window.getComputedStyle(viewport);
    const available = viewport.clientWidth - parseFloat(paddingLeft) - parseFloat(paddingRight);
    setOverflows(copy.scrollWidth > available + 1);
  }, []);

  useLayoutEffect(() => {
    if (!isVisible) return;
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [isVisible, measure, lang]);

  useEffect(() => {
    if (!isVisible) return;
    (document as any).fonts?.ready?.then(measure).catch(() => undefined);
  }, [isVisible, measure]);

  const handleDismiss = () => {
    hideAnnouncementBar();
    try {
      sessionStorage.setItem(DISMISSED_KEY, 'true');
    } catch {
      /* empty */
    }
  };

  if (!isVisible) return null;

  const message = (
    <span className="whitespace-nowrap">
      {textContent.title.normalText?.trim()}
      {textContent.title.boldText?.trim() ? (
        <span className="font-bold">{` — ${textContent.title.boldText.trim()}`}</span>
      ) : null}
    </span>
  );

  const callToAction = (
    <span className="ml-3 inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-white/15 px-3 py-1 font-semibold ring-1 ring-inset ring-white/30 transition-colors duration-150 group-hover:bg-white/25">
      {textContent.title.cta?.trim()}
      <ArrowRight size={14} weight="bold" className="transition-transform duration-150 group-hover:translate-x-0.5" />
    </span>
  );

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex w-screen animate-announcement-pop items-center overflow-hidden bg-gradient-to-r from-primary via-[#1F6DFF] to-primary text-white ${ANNOUNCEMENT_BAR_HEIGHT}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-announcement-shine bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      <span aria-hidden className="w-9 shrink-0" />

      <Link
        href={BLACK_FRIDAY_URL}
        locale={lang}
        id="topBannerActionButton"
        aria-label={`${textContent.title.normalText?.trim()} ${textContent.title.cta?.trim()}`}
        ref={viewportRef}
        className="group relative flex min-w-0 flex-1 items-center self-stretch overflow-hidden lg:justify-center"
      >
        <div
          className={`flex shrink-0 items-center text-sm font-semibold leading-none lg:text-base ${
            overflows ? 'animate-announcement-marquee' : 'mx-auto'
          }`}
        >
          <span ref={copyRef} className={`flex items-center whitespace-nowrap ${overflows ? 'pr-10' : ''}`}>
            {message}
            {callToAction}
          </span>

          {overflows ? (
            <span aria-hidden className="flex items-center whitespace-nowrap pr-10">
              {message}
              {callToAction}
            </span>
          ) : null}
        </div>
      </Link>

      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Close"
        className="z-10 mr-1 shrink-0 rounded-full p-1.5 text-white/70 transition-colors duration-150 hover:bg-white/15 hover:text-white lg:mr-3"
      >
        <X size={16} weight="bold" />
      </button>
    </div>
  );
};

export default TopBanner;
