import React, { useEffect } from 'react';
import { UilTimes } from '@iconscout/react-unicons';

const YoutubeEmbed = ({
  videoID,
  jsapi,
  autoplay,
  hideinfo,
  hidecontrols,
  mute,
  loop,
  show,
  setShow
}) => {
  const videoOptions = [];
  let parameters = '';
  if (jsapi) { videoOptions.push('enablejsapi=1&version=3&playerapiid=ytplayer'); }
  if (autoplay) { videoOptions.push('autoplay=1'); }
  if (hidecontrols) { videoOptions.push('controls=0'); }
  if (hideinfo) { videoOptions.push('showinfo=0'); }
  if (loop) { videoOptions.push('loop=1'); }
  if (mute) { videoOptions.push('mute=1'); }

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

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        hideModal();
      }
    });
  });

  return (
    <div className={`fixed flex flex-col items-center justify-center top-0 left-0 w-full h-full p-10 lg:p-20 xl:px-40 xl:py-24 bg-black bg-opacity-90 backdrop-filter backdrop-blur transition-all duration-250 z-50 ${show ? 'opacity-100 pointer-events-all' : 'opacity-0 pointer-events-none'}`}>

      <div className="relative flex flex-col items-center justify-center w-full max-w-7xl h-full mx-auto">

        <a
          role="link"
          tabIndex={0}
          onClick={hideModal}
          className="fixed top-0 left-0 w-full h-full cursor-pointer"
        >
          <span className="opacity-0">Close modal</span>
        </a>

        <button
          type="button"
          onClick={hideModal}
          className="fixed left-8 top-8 flex flex-col flex-shrink-0 items-center justify-center w-12 h-12 backdrop-filter backdrop-blur backdrop-brightness-150 bg-white bg-opacity-15 hover:bg-opacity-20 focus:bg-opacity-15 focus:text-cool-gray-30 text-white rounded-full z-10"
        >
          <UilTimes width="24px" height="24px" />
        </button>

        <div id="videoModal" className={`videoModal relative w-full h-full bg-black rounded-2xl shadow-2xl overflow-hidden transition-all duration-350 delay-50 ${show ? 'mt-0 mb-0 opacity-100' : 'mt-10 -mb-10 opacity-0'}`}>
          <iframe
            id="embeddedVideo"
            height="100%"
            width="100%"
            src={`${show ? `https://www.youtube.com/embed/${videoID}${parameters}` : ''}`}
            frameBorder="0"
            className="rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; scriptaccess"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>

    </div>
  );
};

export default YoutubeEmbed;
