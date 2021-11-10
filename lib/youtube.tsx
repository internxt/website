import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';

const YoutubeEmbed = ({
  videoID,
  jsapi,
  muted,
  autoplay,
  show,
  setShow
}) => {
  const videoOptions = [];
  let parameters = '';
  if (jsapi) { videoOptions.push('enablejsapi=1&version=3&playerapiid=ytplayer'); }
  if (autoplay) { videoOptions.push('autoplay=1'); }
  if (muted) { videoOptions.push('muted=1'); }

  if (videoOptions.length > 0) {
    for (let i = 0; i < videoOptions.length; i += 1) {
      if (i === 0) { parameters = '?'; }
      if (i > 0) { parameters += '&'; }
      parameters += videoOptions[i];
    }
  }

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className={`fixed flex flex-col items-end justify-center top-0 left-0 w-full h-full p-10 lg:p-20 xl:px-40 xl:py-24 bg-cool-gray-100 bg-opacity-80 backdrop-filter backdrop-blur transition-all duration-250 z-50 ${show ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'}`}>

      <a
        role="link"
        tabIndex={0}
        onClick={hideModal}
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
      >
        <span className="opacity-0">Close modal</span>
      </a>

      <button
        type="button"
        onClick={hideModal}
        className="flex flex-col flex-shrink-0 items-center justify-center m-8 mr-0 w-10 h-10 bg-white bg-opacity-5 hover:bg-opacity-15 focus:bg-opacity-10 text-white rounded-full z-10"
      >
        <UilTimes width="24px" height="24px" />
      </button>

      <div id="videoModal" className={`relative mx-auto w-full h-full rounded-xl shadow-2xl overflow-hidden transition-all duration-350 delay-50 ${show ? 'mt-0 mb-0 opacity-100' : 'mt-10 -mb-10 opacity-0'}`}>
        <iframe
          id="embeddedVideo"
          height="100%"
          width="100%"
          src={`${show ? `https://www.youtube.com/embed/${videoID}${parameters}` : ''}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; scriptaccess"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>

    </div>
  );
};

export default YoutubeEmbed;
