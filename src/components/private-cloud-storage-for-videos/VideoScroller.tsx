import { useEffect, useRef } from 'react';
import { getImage } from '@/lib/getImage';

interface VideoScrollerProps {
  videoSources: string[];
}

const VideoScroller = ({ videoSources }: VideoScrollerProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const duplicatedVideos = [...videoSources, ...videoSources, ...videoSources];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        const videoWidth = window.innerWidth >= 1024 ? 532 : 355;
        const gap = 32;
        const singleSetWidth = videoSources.length * (videoWidth + gap);

        if (scrollContainer.scrollLeft >= singleSetWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [videoSources.length]);

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="overflow-x-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div className="flex gap-8">
          {duplicatedVideos.map((videoSrc, index) => (
            <video
              key={`${videoSrc}-${index}`}
              src={getImage(videoSrc)}
              className="h-[280px] w-[355px] flex-shrink-0 rounded-16 object-cover px-2 lg:ml-0 lg:h-[310px] lg:w-[532px] lg:pl-0"
              autoPlay
              loop
              muted
              playsInline
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoScroller;
