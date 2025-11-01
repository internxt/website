import React from 'react';

const YoutubeFrame = ({ videoId }) => {
  return (
    <div className="mx-10 flex flex-col items-center justify-center pb-20 first-letter:flex">
      <iframe
        id="embeddedVideo"
        src={`https://www.youtube.com/embed/${videoId}`}
        className="md:h-[503px] md:w-[893px]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; scriptaccess"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeFrame;
