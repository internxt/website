import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  RedditIcon,
} from 'next-share';
import React from 'react';

export const InfoCard = ({ id, title, img, link }) => {
  const [isShareIcon, setIsShareIcon] = React.useState(null);
  return (
    <div
      id={id}
      key={title}
      onMouseEnter={(e) => {
        e.stopPropagation();
        if (e.target.id == id) setIsShareIcon(id);
      }}
      onMouseLeave={() => setIsShareIcon(false)}
      onClick={() => {
        window.open(link, '_blank');
        console.log(link);
      }}
      className={`${
        isShareIcon === id
          ? 'flex h-48 w-64 flex-col space-y-4 rounded-2xl bg-white p-3'
          : 'flex h-48 w-64 flex-col rounded-2xl bg-white p-8'
      } 
        `}
    >
      <button className="flex flex-col items-start space-y-8">
        <img key={id} src={img} width={32} height={32} />
        <p className="flex text-left text-2xl font-medium">{title}</p>
      </button>
      <div className={`${isShareIcon === id ? '' : 'hidden'} flex flex-row space-x-2 border-black`}>
        <LinkedinShareButton url={link} title={'LinkedIn'}>
          <LinkedinIcon size={24} round />
        </LinkedinShareButton>
        <TwitterShareButton url={link} title={'Twitter'}>
          <TwitterIcon size={24} round />
        </TwitterShareButton>
        <FacebookShareButton url={link} title={'Facebook'}>
          <FacebookIcon size={24} round />
        </FacebookShareButton>
        <RedditShareButton url={link} title={'Reddit'}>
          <RedditIcon size={24} round />
        </RedditShareButton>
      </div>
    </div>
  );
};

const InfoSection = ({ textContent }) => {
  const infoCards = [
    {
      id: 0,
      img: '/images/cyber-awareness/InfoSection/card-1.svg',
      title: textContent.cards['card-1'],
      link: textContent.cards['link-1'],
    },
    {
      id: 1,
      img: '/images/cyber-awareness/InfoSection/card-2.svg',
      title: textContent.cards['card-2'],
      link: textContent.cards['link-2'],
    },

    {
      id: 2,
      img: '/images/cyber-awareness/InfoSection/card-3.svg',
      title: textContent.cards['card-3'],
      link: textContent.cards['link-3'],
    },
    {
      id: 3,
      img: '/images/cyber-awareness/InfoSection/card-4.svg',
      title: textContent.cards['card-4'],
      link: textContent.cards['link-4'],
    },
    {
      id: 4,
      img: '/images/cyber-awareness/InfoSection/card-5.svg',
      title: textContent.cards['card-5'],
      link: textContent.cards['link-5'],
    },
    {
      id: 5,
      img: '/images/cyber-awareness/InfoSection/card-6.svg',
      title: textContent.cards['card-6'],
      link: textContent.cards['link-6'],
    },
    {
      id: 6,
      img: '/images/cyber-awareness/InfoSection/card-7.svg',
      title: textContent.cards['card-7'],
      link: textContent.cards['link-7'],
    },
    {
      id: 7,
      img: '/images/cyber-awareness/InfoSection/card-8.svg',
      title: textContent.cards['card-8'],
      link: textContent.cards['link-8'],
    },
  ];
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center bg-black bg-opacity-5 pt-20 md:p-20">
        <div className="flex flex-col items-center space-y-10">
          <p className="text-center text-3xl font-semibold md:w-full md:max-w-xl">{textContent.title}</p>
          <p className="p-5 text-center text-lg font-normal md:w-full md:max-w-2xl">{textContent.subTitle}</p>
          <p className="text-center text-3xl font-semibold md:w-full md:max-w-xl">{textContent.cards.title}</p>
          <div className="grid w-full grid-cols-1 justify-items-center gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
            {infoCards.map(({ title, id, img, link }) => (
              <InfoCard id={id} title={title} img={img} link={link} key={title} />
            ))}
          </div>
          <div className="flex flex-col space-y-3 p-5 sm:p-20">
            <p className="text-center text-2xl font-medium sm:text-left">{textContent.footer.title}</p>
            <div className="w-full max-w-2xl space-y-6 pt-3 text-justify sm:text-left">
              <p className="text-lg font-normal">{textContent.footer.body.part1}</p>
              <p className="text-lg font-normal">{textContent.footer.body.part2}</p>
              <p className="text-lg font-normal">{textContent.footer.body.part3}</p>
              <p className="text-lg font-normal">{textContent.footer.body.part4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
