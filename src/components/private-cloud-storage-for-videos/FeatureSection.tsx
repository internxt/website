import { FeaturesSection as FeaturesSectionType } from '@/assets/types/private-cloud-storage-for-videos';
import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import LazyVideo from './LazyVideo';
import VideoScroller from './VideoScroller';

interface Props {
  textContent: FeaturesSectionType;
}

const FeatureSection = ({ textContent }: Props): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-center overflow-hidden ">
      <div className="flex flex-col items-center justify-center bg-gradient-to-t from-[#FFFFFF] to-[#001D6C]">
        <p className="w-[832px] text-center text-lg font-normal text-gray-25">{textContent.intro}</p>
        <Image
          src={getImage('/images/home/internxt_secure_cloud_storage.webp')}
          alt="Internxt Secure Cloud Storage"
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex flex-row gap-8 pt-12">
        {Object.entries(textContent.features).map(([key, { title, description }]) => (
          <div key={key} className="w-[352px] ">
            <p className="pb-6 text-xl font-medium text-gray-100">{title}</p>
            {description.map((paragraph, i) => (
              <p key={i} className=" text-base font-normal text-gray-55">
                {paragraph}
                <br />
                <br />
              </p>
            ))}
          </div>
        ))}
      </div>
      <VideoScroller />
    </section>
  );
};

export default FeatureSection;
