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
  imagePosition?: 'left' | 'right';
}

const ProductCard = ({
  animationDirection,
  redirect,
  textContent,
  lang,
  imageUrl,
  imagePosition = 'right',
}: ProductCard): JSX.Element => {
  const imageOrderClass = imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last';

  return (
    <RevealX
      direction={animationDirection}
      className={`flex flex-col overflow-hidden rounded-2xl bg-gray-100 lg:flex-row lg:gap-0`}
    >
      <div className="flex h-min flex-col items-center justify-center p-7 text-center lg:order-last lg:items-start lg:text-center">
        <h4 className="my-10 max-w-xs text-30 font-semibold leading-tight text-white lg:text-3xl">
          {textContent.title}
        </h4>
        <h5 className="mb-4 max-w-[340px] text-start text-base leading-tight text-white lg:text-xl">
          {textContent.description}
        </h5>
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

      {/* Image Section */}
      <div className={`${imageOrderClass} relative mt-16 flex self-stretch lg:mt-0`}>
        <div className="hidden lg:flex lg:max-w-[480px]">
          <Image
            src={imageUrl}
            loading="lazy"
            width={480}
            height={480}
            alt="Internxt Drive"
            objectFit="cover"
            draggable={false}
          />
        </div>
      </div>
    </RevealX>
  );
};

export default ProductCard;
