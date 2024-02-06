import React from 'react';
import RevealX from '@/components/components/RevealX';
import YoutubeFrame from '@/components/cyber-awareness/components/YoutubeFrame';

const VideoSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center space-y-20 py-24">
        <p className="h-20 w-full max-w-3xl text-center text-4xl font-semibold">{textContent.title}</p>
      </div>
      <div className="mt-5 flex flex-col sm:mt-0">
        <RevealX direction="right">
          <YoutubeFrame videoId="_nVq7f26-Uo" />
        </RevealX>
        <RevealX direction="left">
          <YoutubeFrame videoId="JIJslcA8Q5g" />
        </RevealX>
      </div>
    </section>
  );
};

export default VideoSection;
