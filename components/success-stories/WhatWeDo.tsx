import { ListMagnifyingGlass, MagicWand, SketchLogo } from '@phosphor-icons/react';
import RenderDescription from '../shared/RenderDescription';
import SignUpBanner from '../banners/SignUpBanner';

const WhatWeDo = ({ textContent, bannerLang }) => {
  return (
    <section id={'whatWeDo'} className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center space-y-16 py-20 px-5">
        <div className="flex max-w-[796px] flex-col space-y-6">
          <div className="flex flex-row items-center space-x-6">
            <ListMagnifyingGlass size={48} className="text-primary" />
            <p className="text-5xl font-semibold text-gray-100">{textContent.challenge.title}</p>
          </div>
          <RenderDescription description={textContent.challenge.description} fontSize="text-xl" />
        </div>
        <SignUpBanner textContent={bannerLang} lang="en" />
        <div className="flex max-w-[796px] flex-col space-y-6">
          <div className="flex flex-row items-center space-x-6">
            <MagicWand size={48} className="text-primary" />
            <p className="text-5xl font-semibold text-gray-100">{textContent.solution.title}</p>
          </div>
          <RenderDescription description={textContent.solution.description} fontSize="text-xl" />
        </div>
        <div className="flex max-w-[796px] flex-col space-y-6">
          <div className="flex flex-row items-center space-x-6">
            <SketchLogo size={48} className="text-primary" />
            <p className="text-5xl font-semibold text-gray-100">{textContent.results.title}</p>
          </div>
          <RenderDescription description={textContent.results.description} fontSize="text-xl" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
