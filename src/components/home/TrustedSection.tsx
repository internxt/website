import { useEffect, useRef } from 'react';

interface TrustedSectionProps {
  textContent: {
    description: string;
  };
  bottomBar?: boolean;
  darkMode?: boolean;
  image?: string;
  isValentinesMode?: boolean;
  bgGradientColor?: string;
  bgColor?: string;
}

const WORDS_PER_GROUP = 2;
const LIT_CLASS_DARK = 'text-white';
const LIT_CLASS_LIGHT = 'text-[#0A0A0A] dark:text-white';
const UNLIT_CLASS = 'text-[#A0A0A0]';
const WORD_CLASS = 'transition-colors duration-[400ms]';
const VALENTINES_GRADIENT_DARK = 'bg-[linear-gradient(360deg,#1C1C1C_0%,#2A1420_100%)]';
const VALENTINES_GRADIENT_LIGHT =
  'bg-[linear-gradient(360deg,#FFFFFF_0%,#FFF2F8_100%)] dark:bg-[linear-gradient(360deg,#1C1C1C_0%,#2A1420_100%)]';
const LIGHT_GRADIENT = 'bg-[linear-gradient(0deg,#F4F8FF_0%,#FFFFFF_100%)] dark:bg-none dark:bg-gray-95';

export default function TrustedSection({
  textContent,
  bottomBar = true,
  darkMode = false,
  image,
  isValentinesMode,
  bgGradientColor,
  bgColor,
}: Readonly<TrustedSectionProps>): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const words = textContent.description.split(' ');
  const groups: string[] = [];
  for (let i = 0; i < words.length; i += WORDS_PER_GROUP) {
    groups.push(words.slice(i, i + WORDS_PER_GROUP).join(' '));
  }

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const litClass = darkMode ? LIT_CLASS_DARK : LIT_CLASS_LIGHT;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewportHeight * 0.85 - rect.top) / (viewportHeight * 0.7)));

      const totalGroups = spanRefs.current.length;
      const litCount = Math.round(progress * totalGroups);

      spanRefs.current.forEach((span, i) => {
        if (!span) return;
        span.className = `${WORD_CLASS} ${i < litCount ? litClass : UNLIT_CLASS}`;
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, [darkMode]);
  const valentinesGradient = darkMode ? VALENTINES_GRADIENT_DARK : VALENTINES_GRADIENT_LIGHT;
  const sectionBgClass = isValentinesMode
    ? valentinesGradient
    : bgGradientColor ?? (bgColor ? '' : darkMode ? 'bg-gray-95' : image ? 'dark:bg-gray-95' : LIGHT_GRADIENT);

  return (
    <section
      ref={sectionRef}
      className={`${bgColor || ''} flex h-full w-full flex-col items-start justify-start overflow-hidden px-8 py-10 lg:h-min lg:items-center lg:justify-center lg:gap-20 lg:px-10 lg:pb-28 xl:px-32 3xl:px-80 ${sectionBgClass}`}
    >
      {bottomBar && (
        <div className={`absolute bottom-0 left-8 right-8 h-[1px] ${darkMode ? 'bg-gray-71' : 'bg-neutral-35 dark:bg-gray-71'} lg:bottom-0 lg:left-32 lg:right-32`}></div>
      )}
      <p className="w-full py-1 text-justify text-2xl font-semibold leading-[100%] lg:text-[60px]">
        {groups.map((group, i) => (
          <span
            key={i}
            ref={(el) => {
              spanRefs.current[i] = el;
            }}
            className={`${WORD_CLASS} ${UNLIT_CLASS}`}
          >
            {i > 0 ? ' ' : ''}
            {group}
          </span>
        ))}
      </p>
    </section>
  );
}
