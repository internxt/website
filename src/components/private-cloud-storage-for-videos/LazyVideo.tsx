import { getImage } from '@/lib/getImage';
import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function LazyVideo({ src, poster, className = '' }: LazyVideoProps) {
  const videoRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observerTarget = videoRef.current;
    if (!observerTarget) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    );

    observer.observe(observerTarget);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className={className}>
      {visible && (
        <video
          src={getImage('/videos/cloud-storage-for-video-files/Nature_Water.webm')}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="pointer-events-none h-full w-full select-none rounded-xl object-cover"
        />
      )}
    </div>
  );
}
