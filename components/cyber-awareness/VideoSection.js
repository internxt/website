import React from 'react';
import YoutubeFrame from './components/YoutubeFrame';

const VideoSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center space-y-20 pb-40 sm:pb-24">
        <p className="h-20 w-full max-w-3xl text-center text-4xl font-semibold">{textContent.title}</p>
      </div>
      <div className="mt-5 flex flex-col sm:mt-0">
        <YoutubeFrame videoId="_nVq7f26-Uo" />
        <YoutubeFrame videoId="JIJslcA8Q5g" />
      </div>
    </section>
  );
};

export default VideoSection;
