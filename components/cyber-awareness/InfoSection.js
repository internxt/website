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
import { useRouter } from 'next/router';
import React from 'react';
import RevealY from '../components/RevealY';
import Tooltip from '../prices/ToolTip';

export const InfoCard = ({ id, title, title1, img, link }) => {
  const [isShareIcon, setIsShareIcon] = React.useState(null);
  return (
    <div
      id={id}
      key={title}
      onMouseEnter={(e) => {
        e.stopPropagation();

        if (e.target.id == id) setIsShareIcon(id);
      }}
      onMouseLeave={() => setIsShareIcon(null)}
      className={`${'flex h-60 w-full max-w-[300px] cursor-pointer flex-col space-y-5 rounded-2xl bg-white p-8'} 
        `}
      onClick={() => {
        window.open(link, '_blank');
      }}
    >
      <img key={id} src={img} alt={`${title} image`} width={32} height={32} />
      <p className="flex flex-col text-left text-2xl font-medium">
        {title}
        <span className="flex text-left text-2xl font-medium">{title1}</span>
      </p>

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
  const router = useRouter();
  const lang = router.locale;

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
      title1: textContent.cards['card-3b'],
      link: textContent.cards['link-3'],
    },
    {
      id: 3,
      img: '/images/cyber-awareness/InfoSection/card-4.svg',
      title: textContent.cards['card-4'],
      title1: textContent.cards['card-4b'],
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
      <div className="flex flex-col items-center bg-black bg-opacity-5 px-5 py-20">
        <div className="flex flex-col items-center space-y-16">
          {lang === 'en' ? (
            <div>
              <p className="text-center text-5xl font-semibold">{textContent.title}</p>
            </div>
          ) : (
            <>
              <p className="text-center text-3xl font-semibold md:w-full md:max-w-xl">{textContent.title}</p>
              <p className="p-5 text-center text-lg font-normal md:w-full md:max-w-2xl">{textContent.subTitle}</p>
              <p className="text-center text-3xl font-semibold md:w-full md:max-w-xl">{textContent.cards.title}</p>
            </>
          )}
          <RevealY className="grid w-full grid-cols-1 justify-items-center gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-10">
            {infoCards.map(({ title1, title, id, img, link }) => (
              <InfoCard id={id} title={title} title1={title1} img={img} link={link} key={title} />
            ))}
          </RevealY>
          <RevealY className="flex flex-col space-y-3">
            <p className="text-center text-2xl font-medium sm:text-left">{textContent.footer.title}</p>
            <div className="w-full max-w-2xl space-y-6 pt-3 text-center sm:text-left">
              <p className="text-lg font-normal">{textContent.footer.body.part1}</p>
              <p className="text-lg font-normal">{textContent.footer.body.part2}</p>
              <p className="text-lg font-normal">{textContent.footer.body.part3}</p>
              <p className="text-lg font-normal">{textContent.footer.body.part4}</p>
            </div>
          </RevealY>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
