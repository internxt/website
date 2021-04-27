import React from 'react';
import styles from './StakeCard.module.css';

const StakeCard = ({
  bundle, percentage, inxtQty, descriptions, disc,
}) => {
  const description = descriptions.filter((desc) => desc.id === 'StakeCard');

  return (
    <div>
      <p className={`${styles.bundle} sm:text-xl lg:text-base`}>
        {bundle}
      </p>

      <div className={`${styles.card} sm:py-6 lg:mt-2 lg:px-12 lg:py-4`}>
        <div className={styles.percentage_container}>
          <p className={`${styles.percentage} lg:text-5xl`}>
            {percentage}
          </p>
          <p className={`${styles.percentage2} lg:text-base`}>
            %
          </p>
        </div>

        <p className={`${styles.per_year} lg:text-sm`}>
          {disc ? description[0].discount : description[0].peryear}
        </p>

        <p className={`${styles.inxt} lg:text-xss lg:mt-6 lg:h-8`}>
          {inxtQty}
        </p>

        <p className={`${styles.get_started} lg:text-xss`}>
          {disc ? '' : description[0].getstarted}
        </p>
      </div>
    </div>
  );
};

export default StakeCard;
