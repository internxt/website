import { CheckCircle } from '@phosphor-icons/react';
import Image from "next/legacy/image";

const Feed = ({ feed }) => (
  <div className="flex flex-row items-center space-x-3 lg:space-x-6">
    <div className="flex flex-col">
      <CheckCircle className="text-primary" size={32} />
    </div>
    <p className="text-xl font-semibold text-gray-80">{feed}</p>
  </div>
);

const Card = ({ textContent, imageUrl, imageAlt }) => {
  return (
    <div className="flex flex-col rounded-[32px] bg-gray-1 lg:flex-row">
      <div className="flex flex-col space-y-6 px-10 py-7 lg:pl-20 lg:pr-40 lg:pt-14">
        <p className="text-center text-4xl font-semibold text-gray-100 lg:text-left">{textContent.title}</p>
        {textContent.feeds.map((feed) => {
          return <Feed key={feed} feed={feed} />;
        })}
      </div>
      <Image
        src={imageUrl}
        width={430}
        height={377}
        alt={imageAlt}
        className="flex flex-col rounded-b-[32px] lg:rounded-l-none lg:rounded-r-[32px]"
        draggable={false}
      />
    </div>
  );
};

export default Card;
