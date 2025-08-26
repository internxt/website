import { getImage } from '@/lib/getImage';
import React from 'react';

const videoSources = [
  '/videos/cloud-storage-for-video-files/Nature_Water.mp4',
  '/videos/cloud-storage-for-video-files/Sunset_Yoga.mp4',
  '/videos/cloud-storage-for-video-files/Snow_Winter.mp4',
  '/videos/cloud-storage-for-video-files/Scenic_Colorful.mp4',
  '/videos/cloud-storage-for-video-files/Friends_Couple.mp4',
  '/videos/cloud-storage-for-video-files/Person_People.mp4',
];

const VideoScroller = () => {
  return (
    <div className="relative w-[1120px]">
      <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-8">
          {videoSources.map((videoSrc, index) => (
            <video
              key={index}
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

      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
};

export default VideoScroller;
