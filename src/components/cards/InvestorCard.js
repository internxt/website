import React from 'react';
import Image from "next/legacy/image";
import styles from './InvestorCard.module.css';

const InvestorCard = ({ company, description, investor, w, h }) => {
  const url = `/images/1440/About/Section 4/${investor}.webp`;

  return (
    <div className={`${styles.card} col-span-1`}>
      <div className="flex justify-center lg:w-40">
        <Image src={url} width={w} alt="Investor image" height={h} className="lg:w-full" />
      </div>

      <h1 className={`${styles.name} sm:pt-6 sm:text-xl lg:pt-8 lg:text-base`}>{company}</h1>

      <p className={`${styles.desc} sm:text-lg lg:text-sm`}>{description}</p>
    </div>
  );
};

export default InvestorCard;
