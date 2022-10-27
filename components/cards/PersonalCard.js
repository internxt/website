import React from 'react';
import styles from './PersonalCard.module.css';

const PersonalCard = ({ name, job, picture }) => {
  const url = `/images/1440/About/Section 3/${picture}.webp`;

  return (
    <div className={`${styles.card} col-span-2 lg:w-80`}>
      <div className={`${styles.bio} sm:w-56 sm:pl-6 lg:m-0 lg:pl-5 xl:pl-6`}>
        <p className={`${styles.name} sm:pr-4 sm:text-lg lg:text-sm`}>{name}</p>

        <p className={`${styles.job} sm:text-13 lg:text-xss lg:mt-3`}>{job}</p>
      </div>

      <div className={`${styles.image} sm:w-auto`}>
        <img
          loading="lazy"
          src={url}
          style={{
            width: '109px',
            height: '155px',
            borderTopRightRadius: '6px',
            borderBottomRightRadius: '6px',
          }}
          alt=""
        />
      </div>
    </div>
  );
};

export default PersonalCard;
