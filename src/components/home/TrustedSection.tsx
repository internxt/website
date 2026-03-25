import { useEffect, useRef } from 'react';

interface TrustedSectionProps {
  textContent: {
    description: string;
  };
  bottomBar?: boolean;
  darkMode?: boolean;
  image?: string;
  isValentinesMode?: boolean;
}

export default function TrustedSection({
  textContent,
  bottomBar = true,
  darkMode,
  image,
  isValentinesMode,
}: Readonly<TrustedSectionProps>): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text) return;

    const updateGradient = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewportHeight * 0.7 - rect.top) / (viewportHeight * 0.7)));

      const r = Math.round(255 + (115 - 255) * progress);
      const g = Math.round(255 + (115 - 255) * progress);
      const b = Math.round(255 + (115 - 255) * progress);
      text.style.background = `linear-gradient(180deg, #737373 50%, rgb(${r},${g},${b}) 100%)`;
      text.style.backgroundClip = 'text';
      text.style.webkitTextFillColor = 'transparent';
    };

    updateGradient();
    window.addEventListener('scroll', updateGradient, { passive: true });
    return () => window.removeEventListener('scroll', updateGradient);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={` flex h-full w-full flex-col items-start justify-start overflow-hidden px-8 py-10 lg:h-min lg:items-center lg:justify-center lg:gap-20 lg:py-28 ${
        darkMode ? 'bg-[#1C1C1C]' : ''
      }`}
      style={
        isValentinesMode
          ? { background: 'linear-gradient(360deg, #FFFFFF 0%, #FFF2F8 100%)' }
          : !darkMode && !image
          ? { background: 'linear-gradient(360deg, #FFFFFF 0%, #F4F8FF 100%)' }
          : undefined
      }
    >
      {bottomBar && (
        <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32"></div>
      )}
      <p
        ref={textRef}
        className="flex w-[1280px] font-semibold text-[60px] leading-[100%] py-1"
        style={{
          background: 'linear-gradient(180deg, #737373 50%, #FFFFFF 100%)',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {textContent.description}
      </p>
    </section>
  );
}
