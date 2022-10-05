import React from 'react';

const YoutubeFrame = ({ videoId }) => {
  return (
    <div className="flex flex-col items-center justify-center pb-20 first-letter:flex">
      <iframe
        id="embeddedVideo"
        height={503}
        src={`https://www.youtube.com/embed/${videoId}`}
        className="flex w-full p-2 sm:px-80"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; scriptaccess"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeFrame;
