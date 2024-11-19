import Link from 'next/link';
import RevealX from '@/components/components/RevealX';
import Image from 'next/legacy/image';
import { CaretRight } from '@phosphor-icons/react';

interface ProductCard {
  animationDirection: 'left' | 'right';
  redirect: string;
  textContent: any;
  lang: string;
  imageUrl: string;
}

const ProductCard = ({ animationDirection, redirect, textContent, lang, imageUrl }: ProductCard): JSX.Element => {
  return (
    <RevealX
      direction={animationDirection}
      className={`flex overflow-hidden rounded-2xl bg-gray-100 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-0`}
    >
      <div className="flex h-full flex-col items-center justify-center p-7 text-center lg:items-start lg:pl-20 lg:text-start">
        <h4 className="mb-10 max-w-xs text-4xl font-semibold text-white lg:text-4xl">{textContent.title}</h4>
        <h5 className="mb-4 max-w-[340px] text-xl text-white">{textContent.description}</h5>
        <div className="flex justify-start">
          <Link
            className="flex w-max items-center rounded-lg bg-primary px-5 py-3 font-medium text-white"
            href={redirect}
            target="_blank"
          >
            {textContent.cta}
          </Link>
        </div>
      </div>

      <div className="lg:pl-15 relative mt-16 flex self-stretch  lg:mt-0">
        <div className="hidden lg:flex lg:max-w-[480px]">
          <Image src={imageUrl} loading="lazy" width={480} height={480} alt="Internxt Drive" draggable={false} />
        </div>
      </div>
    </RevealX>
  );
};

export default ProductCard;
