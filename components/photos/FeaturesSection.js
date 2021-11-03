import React from 'react';
import { Parallax } from 'react-parallax';
import DownloadComponent from './DownloadComponent';

const FeaturesSection = ({
  textContent,
  download
}) => {
  const parallaxMinMax = (percentage, min, max, forceMax) => {
    // Usage:
    //   For 'px': `${parallaxMinMax(...)}px`
    //   For 'deg': `${parallaxMinMax(...)}deg`
    //   and so on

    // Can be used for negative values as well
    const range = max - min;
    // Forces parallax to stop when reached max (or min if negative)
    if (forceMax) {
      if (range >= 0) {
        return `${Math.min(max, (min + Math.round(range * percentage)))}`;
      }
      return `${Math.max(max, (min + Math.round(range * percentage)))}`;
    }
    // By not forcing max value parallax will stop when
    // <Parallax> object is out the window borders
    return `${min + Math.round(range * percentage)}`;
  };

  return (
    <section className="flex flex-col w-full">

      <div className="flex flex-col items-center py-32">

        {/* Title */}
        <div className="text-center">

          <h1 className="text-5xl font-semibold text-cool-gray-90 mb-20">
            A synced gallery for
            <br />
            all your devices.
          </h1>

        </div>

        {/* Feature #1 - Upload from your smartphone, access wherever you want */}
        <Parallax
          className="grid grid-cols-2 gap-20 w-full justify-center pt-20 pb-20"
          renderLayer={(percentage) => (
            <>

              <div className="flex flex-col items-end pr-10">
                {/* Keep items aligned to the left */}
                <div className="flex flex-col items-start">
                  <div
                    className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                    style={{
                      transform: `translate(0px, ${parallaxMinMax(percentage, -40, 0)}px)`,
                      width: 272,
                      height: 491
                    }}
                  />

                  <div className="flex flex-col mt-24">
                    <h3 className="text-4xl font-semibold text-cool-gray-90 mb-6">
                      Upload from your
                      <br />
                      smartphone, access
                      <br />
                      wherever you want.
                    </h3>

                    <p className="text-base text-cool-gray-80">
                      Your photo library will always be up to
                      <br />
                      date in all your devices. This means that
                      <br />
                      you can access your synced photos even
                      <br />
                      when your device is lost, stolen or broken.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div
                  className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                  style={{
                    transform: `translate(0px, -${parallaxMinMax(percentage, -40, 24)}px)`,
                    width: 884,
                    height: 884
                  }}
                />
              </div>

            </>
          )}
        />

        {/* Feature #2 - Share your photos with your friends and family */}
        <Parallax
          className="grid grid-cols-2 gap-20 w-full justify-center pt-20 pb-20"
          renderLayer={(percentage) => (
            <>

              <div className="flex flex-col items-end">
                <div
                  className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                  style={{
                    transform: `translate(0px, ${parallaxMinMax(percentage, -40, 0)}px)`,
                    width: 884,
                    height: 884
                  }}
                />
              </div>

              <div className="flex flex-col items-start pl-10">
                <div className="flex flex-col mb-24">
                  <h3 className="text-4xl font-semibold text-cool-gray-90 mb-6 pt-20">
                    Share your photos
                    <br />
                    with your friends
                    <br />
                    and family.
                  </h3>

                  <p className="text-base text-cool-gray-80">
                    Generate a share link so you can
                    <br />
                    control how many times a photo
                    <br />
                    can be accessed and downloaded.
                  </p>
                </div>

                <div
                  className="bg-cool-gray-10 rounded-2xl border border-cool-gray-20 shadow-subtle"
                  style={{
                    transform: `translate(0px, ${parallaxMinMax(percentage, 40, 0)}px)`,
                    width: 272,
                    height: 491
                  }}
                />
              </div>

            </>
          )}
        />

        <div className="flex flex-col items-center w-full py-20">
          <h3 className="text-3xl font-semibold text-center text-cool-gray-90 mb-12">
            Start syncing your photos
            <br />
            in total privacy.
          </h3>

          {/* Download links */}
          <DownloadComponent
            textContent={textContent.DownloadLinks}
            download={download}
          />
        </div>

      </div>

    </section>
  );
};

export default FeaturesSection;
