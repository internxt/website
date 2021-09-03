import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import styles from './PartnerCard.module.css';

const PartnerCard = ({
  company, bio, bio2, blue, logo, logoW, logoH, image, link, descriptions,
}) => {
  const description = descriptions.filter((desc) => desc.id === 'PartnerCard');

  const logourl = `/images/1440/About/Section 5/${logo}.webp`;
  const imageurl = `/images/1440/About/Section 5/${image}.webp`;

  const [cardstyle, setCardstyle] = useState(`${styles.PartnerCard}`);
  const [companystyle, setCompanystyle] = useState(`${styles.company}`);
  const [biostyle, setBiostyle] = useState(`${styles.bio}`);
  const [readmorestyle, setReadmorestyle] = useState(`${styles.read_more}`);

  const changeClass = () => {
    if (!blue) {
      setCardstyle(`${styles.PartnerCard} ${styles.reverse}`);
      setCompanystyle(`${styles.company} ${styles.text_black}`);
      setBiostyle(`${styles.bio} ${styles.text_black}`);
      setReadmorestyle(`${styles.read_more} ${styles.text_black}`);
    }
  };

  useEffect(() => {
    changeClass();
  }, []);

  return (
    <div className={`${cardstyle} sm:h-auto sm:w-84 lg:w-8/12 lg:h-90`}>
      <div className={`${styles.content} sm:w-auto sm:px-8 lg:p-0 lg:pt-8 lg:pl-12`}>
        <div className="w-32 sm:w-40">
          <Image
            src={logourl}
            width={logoW}
            height={logoH}
          />
        </div>

        <h1 className={`${companystyle} sm:text-2xl lg:text-xl lg:my-4`}>
          {company}
        </h1>

        <p className={`${biostyle} sm:leading-6 sm:text-base sm:w-68 sm:mb-4 lg:text-13 lg:w-11/12 lg:mb-4 lg:leading-6 xl:mb-6`}>
          {bio}
        </p>

        <p className={`${biostyle} sm:leading-6 sm:text-base sm:w-68 sm:mb-20 lg:text-13 lg:w-11/12 lg:mb-0 xl:w-93`}>
          {bio2}
        </p>

        <a
          href={link}
          target="_blank"
          className={`${readmorestyle} hover:opacity-80 sm:mb-6 lg:text-sm lg:mb-6 xl:mb-12`}
          rel="noreferrer"
        >
          {description[0].link}
        </a>
      </div>

      <div className="w-6/12 overflow-hidden sm:hidden">
        <img loading="lazy"
          src={imageurl}
          className="object-contain lg:object-cover lg:h-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default PartnerCard;
