import Link from 'next/link';
import RevealX from '../components/RevealX';
import Image from "next/legacy/image";
import { UilAngleRightB } from '@iconscout/react-unicons';

const ProductCard = ({ animationDirection, textContent, lang, imageUrl }) => {
  return (
    <RevealX
      direction={animationDirection}
      className="flex overflow-hidden rounded-2xl bg-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0"
    >
      <div className="flex h-full flex-col items-center justify-center p-7 text-center lg:items-start lg:pl-20 lg:text-start">
        <h4 className="mb-10 max-w-xs text-4xl font-semibold text-white lg:text-4xl">{textContent.title}</h4>
        <h5 className="mb-4 max-w-[340px] text-xl text-white">{textContent.description}</h5>
        <div className="flex justify-start">
          <Link
            href="/drive"
            locale={lang}
            className="flex flex-row items-center space-x-1 text-lg text-blue-50 hover:underline">

            <span>{textContent.cta}</span>
            <UilAngleRightB className="h-4 w-4" />

          </Link>
        </div>
      </div>

      <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
        <div className="hidden lg:flex lg:max-w-[480px]">
          <Image src={imageUrl} width={480} height={480} alt="Internxt Drive" draggable={false} />
        </div>
      </div>
    </RevealX>
  );
};

export default ProductCard;
