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
const LIT_COLOR_DARK = '#FFFFFF';
const LIT_COLOR_LIGHT = '#0A0A0A';
const UNLIT_COLOR = '#A0A0A0';

export default function TrustedSection({
  textContent,
  bottomBar = true,
  darkMode,
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

    const litColor = darkMode ? LIT_COLOR_DARK : LIT_COLOR_LIGHT;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewportHeight * 0.85 - rect.top) / (viewportHeight * 0.7)));

      const totalGroups = spanRefs.current.length;
      const litCount = Math.round(progress * totalGroups);

      spanRefs.current.forEach((span, i) => {
        if (!span) return;
        span.style.color = i < litCount ? litColor : UNLIT_COLOR;
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, [darkMode]);

  return (
    <section
      ref={sectionRef}
      className={`${bgColor || ''} flex h-full w-full flex-col items-start justify-start overflow-hidden px-8 py-10 lg:h-min lg:items-center lg:justify-center lg:gap-20 lg:px-10 lg:pb-28 xl:px-32 3xl:px-80 ${
        darkMode && !bgColor ? 'bg-[#1C1C1C]' : ''
      }`}
      style={
        isValentinesMode
          ? { background: 'linear-gradient(360deg, #FFFFFF 0%, #FFF2F8 100%)' }
          : bgGradientColor
          ? { background: bgGradientColor }
          : !darkMode && !image && !bgColor
          ? { background: 'linear-gradient(0deg, #F4F8FF 0%, #FFFFFF 100%)' }
          : undefined
      }
    >
      {bottomBar && (
        <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      )}
      <p className="w-full py-1 text-justify text-[60px] font-semibold leading-[100%]">
        {groups.map((group, i) => (
          <span
            key={i}
            ref={(el) => {
              spanRefs.current[i] = el;
            }}
            style={{
              color: UNLIT_COLOR,
              transition: 'color 0.4s ease',
            }}
          >
            {i > 0 ? ' ' : ''}
            {group}
          </span>
        ))}
      </p>
    </section>
  );
}
