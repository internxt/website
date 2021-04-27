import React from 'react';
import styles from './Container6.module.css';
import PartnerCard from '../cards/PartnerCard';

const Container6 = ({ id, descriptions, cardDescriptions }) => {
  const URL_BLACKBERRY = 'https://medium.com/internxt/internxt-and-blackberry-partner-to-enhance-x-clouds-security-25bb5ad7d33d';
  const URL_YCOMBINATOR = 'https://medium.com/internxt/internxt-has-been-accepted-to-y-combinators-startup-school-b7daf30ab407';
  const URL_LANZADERA = 'https://medium.com/internxt/internxt-joins-juan-roigs-startup-accelerator-lanzadera-9c2bae8f370d';
  const URL_500 = 'https://twitter.com/Internxt/status/1321545158756868096';

  const description = descriptions.filter((desc) => desc.id === id);
  const {
    title,
    company, bio1, bio2,
    company2, bio3, bio4,
    company3, bio5, bio6,
    company4, bio7, bio8,

  } = description[0];

  return (
    <div className={`${styles.main} sm:mb-24`}>
      <h1
        data-aos="fade-up"
        data-aos-duration="300"
        className={`${styles.title} sm:text-4xl sm:mt-16 sm:mb-6 lg:text-5xl lg:pt-20 lg:pb-8 xl:mt-24 xl:mb-12`}
      >
        {title}
      </h1>

      <div className="flex flex-col justify-center items-center lg:mb-24 xl:mb-32">
        <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="100">
          <PartnerCard
            company={company}
            bio={bio1}
            bio2={bio2}
            blue
            logo="Blackberry logo"
            logoW={157}
            logoH={27}
            image="Blackberry img"
            imageW={473}
            imageH={487}
            link={URL_BLACKBERRY}
            descriptions={cardDescriptions}
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="300">
          <PartnerCard
            company={company2}
            bio={bio3}
            bio2={bio4}
            blue={false}
            logo="Y Combinator logo"
            logoW={155}
            logoH={32}
            image="Y Combinator img"
            imageW={473}
            imageH={486}
            link={URL_YCOMBINATOR}
            descriptions={cardDescriptions}
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="300">
          <PartnerCard
            company={company3}
            bio={bio5}
            bio2={bio6}
            blue
            logo="Lanzadera logo"
            logoW={162}
            logoH={22}
            image="Lanzadera img"
            imageW={473}
            imageH={487}
            link={URL_LANZADERA}
            descriptions={cardDescriptions}
          />
        </div>

        <div data-aos="fade-up" data-aos-duration="300">
          <PartnerCard
            company={company4}
            bio={bio7}
            bio2={bio8}
            blue={false}
            logo="500 logo"
            logoW={175}
            logoH={47}
            image="500 img"
            imageW={471}
            imageH={486}
            link={URL_500}
            descriptions={cardDescriptions}
          />
        </div>
      </div>

    </div>
  );
};

export default Container6;
