import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import styles from './PartnerCard.module.css';

const PartnerCard = ({ company, bio, bio2, blue, logo, logoW, logoH, image, link, descriptions }) => {
  const description = descriptions.filter((desc) => desc.id === 'PartnerCard');

  const logourl = `/images/1440/About/Section 5/${logo}.webp`;
  const imageurl = `/images/1440/About/Section 5/${image}.webp`;

  const [cardstyle, setCardstyle] = useState(`${styles.PartnerCard}`);
  const [companystyle, setCompanystyle] = useState(`${styles.company}`);
  const [biostyle, setBiostyle] = useState(`${styles.bio}`);
  const [readmorestyle, setReadmorestyle] = useState(`${styles['read-more']}`);

  const changeClass = () => {
    if (!blue) {
      setCardstyle(`${styles.PartnerCard} ${styles.reverse}`);
      setCompanystyle(`${styles.company} ${styles['text-black']}`);
      setBiostyle(`${styles.bio} ${styles['text-black']}`);
      setReadmorestyle(`${styles.read_more} ${styles['text-black']}`);
    }
  };

  useEffect(() => {
    changeClass();
  });

  return (
    <div className={`${cardstyle} sm:w-84 lg:h-90 sm:h-auto lg:w-8/12`}>
      <div className={`${styles.content} sm:w-auto sm:px-8 lg:p-0 lg:pt-8 lg:pl-12`}>
        <div className="w-32 sm:w-40">
          <Image src={logourl} width={logoW} alt="Logo image" height={logoH} loading={'lazy'} />
        </div>

        <h1 className={`${companystyle} sm:text-2xl lg:my-4 lg:text-xl`}>{company}</h1>

        <p
          className={`${biostyle} sm:w-68 lg:text-13 sm:mb-4 sm:text-base sm:leading-6 lg:mb-4 lg:w-11/12 lg:leading-6 xl:mb-6`}
        >
          {bio}
        </p>

        <p className={`${biostyle} sm:w-68 lg:text-13 xl:w-93 sm:mb-20 sm:text-base sm:leading-6 lg:mb-0 lg:w-11/12`}>
          {bio2}
        </p>

        <a
          href={link}
          target="_blank"
          className={`${readmorestyle} hover:opacity-80 sm:mb-6 lg:mb-6 lg:text-sm xl:mb-12`}
          rel="noreferrer"
        >
          {description[0].link}
        </a>
      </div>

      <div className="w-6/12 overflow-hidden sm:hidden">
        <img loading="lazy" src={imageurl} className="object-contain lg:h-full lg:object-cover" alt="" />
      </div>
    </div>
  );
};

export default PartnerCard;
