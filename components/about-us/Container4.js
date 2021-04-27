import React from 'react';
import styles from './Container4.module.css';
import PersonalCard from '../cards/PersonalCard';

const Container4 = ({ id, descriptions }) => {
  const description = descriptions.filter((desc) => desc.id === id);
  const {
    employee, job,
    employee2, job2,
    employee3, job3,

  } = description[0];

  return (
    <div className={`${styles.main} sm:pt-16 lg:pt-0 lg:pb-24 items-center`}>
      <h1 className={`${styles.title} sm:text-4xl sm:mt-12 lg:text-5xl`}>
        {description[0].title}
      </h1>

      <div className="grid grid-cols-6 gap-x-4 sm:grid-cols-1 sm:gap-y-6 sm:mt-12 lg:pt-12 xl:my-16">
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="col-span-2"
        >
          <PersonalCard name={employee} job={job} picture="Harrison" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="50"
          className="col-span-2"
        >
          <PersonalCard name={employee2} job={job2} picture="Alex" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-delay="100"
          className="col-span-2"
        >
          <PersonalCard name={employee3} job={job3} picture="Jerome" />
        </div>

      </div>
    </div>
  );
};

export default Container4;
