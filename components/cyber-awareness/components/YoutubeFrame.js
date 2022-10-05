import React from 'react';

const YoutubeFrame = ({ videoId }) => {
  return (
    <div className="flex flex-col items-center space-y-20 pb-20">
      <iframe
        id="embeddedVideo"
        width={893}
        height={503}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; scriptaccess"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeFrame;
