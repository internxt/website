import Image from 'next/image';
import Link from 'next/link';

export const KitCard = ({ textContent, image, downloadImagesLink }) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-2xl bg-gray-1">
      <div>
        <Image height={520} width={496} src={image} alt="internxt cloud icon" draggable={false} />
      </div>
      <div className="flex h-full w-full flex-col p-10">
        <div className="flex h-full flex-col items-center space-y-6 text-center lg:items-start lg:text-left">
          <p className="text-3xl font-semibold lg:text-4xl">{textContent.title}</p>
          <p className="font-gray-80 max-w-[380px]  text-xl">{textContent.description}</p>
          <Link href={downloadImagesLink} download={true}>
            <p className="flex w-max rounded-lg bg-primary px-5 py-3 text-white hover:bg-primary-dark">
              {textContent.cta}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
