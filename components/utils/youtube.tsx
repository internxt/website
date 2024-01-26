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
  setShow,
}: {
  videoID: string;
  jsapi?: boolean;
  autoplay?: boolean;
  hideinfo?: boolean;
  hidecontrols?: boolean;
  mute?: boolean;
  loop?: boolean;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const videoOptions: string[] = [];
  let parameters = '';
  if (jsapi) {
    videoOptions.push('enablejsapi=1&version=3&playerapiid=ytplayer');
  }
  if (autoplay) {
    videoOptions.push('autoplay=1');
  }
  if (hidecontrols) {
    videoOptions.push('controls=0');
  }
  if (hideinfo) {
    videoOptions.push('showinfo=0');
  }
  if (loop) {
    videoOptions.push('loop=1');
  }
  if (mute) {
    videoOptions.push('mute=1');
  }

  if (videoOptions.length > 0) {
    for (let i = 0; i < videoOptions.length; i += 1) {
      if (i === 0) {
        parameters = '?';
      }
      if (i > 0) {
        parameters += '&';
      }
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
    <div
      className={`duration-250 fixed top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-90 p-6 backdrop-blur backdrop-filter transition-all sm:p-10 lg:p-20 xl:px-40 xl:py-24 ${
        show ? 'pointer-events-all opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center">
        <a role="link" tabIndex={0} onClick={hideModal} className="fixed top-0 left-0 h-full w-full cursor-pointer">
          <span className="opacity-0">Close modal</span>
        </a>

        <button
          type="button"
          onClick={hideModal}
          className="fixed left-6 top-6 z-10 flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-full bg-white bg-opacity-15 text-white backdrop-blur backdrop-brightness-150 backdrop-filter hover:bg-opacity-20 focus:bg-opacity-15 focus:text-cool-gray-30 sm:left-8 sm:top-8"
        >
          <UilTimes width="24px" height="24px" />
        </button>

        <div
          id="videoModal"
          className={`videoModal duration-350 delay-50 relative h-full w-full overflow-hidden rounded-2xl bg-black shadow-2xl transition-all ${
            show ? 'mt-0 mb-0 opacity-100' : 'mt-10 -mb-10 opacity-0'
          }`}
        >
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
