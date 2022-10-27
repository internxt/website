import React from 'react';
import PriceCard from './PriceCard';

const PaymentsSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center bg-gray-5 p-20">
        <div className="flex max-w-[641px] flex-col space-y-4 text-center">
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="text-xl font-normal">{textContent.subtitle}</p>
        </div>
        <div className="flex flex-row flex-wrap pt-16">
          <PriceCard
            plan={textContent.card1.plan}
            price={textContent.card1.price}
            month={textContent.month}
            annualPrice={textContent.card1.annualPrice}
            billedAnnually={textContent.billedAnnually}
            info={textContent.infoPlan}
          />
          <PriceCard
            plan={textContent.card2.plan}
            price={textContent.card2.price}
            month={textContent.month}
            annualPrice={textContent.card2.annualPrice}
            billedAnnually={textContent.billedAnnually}
            info={textContent.infoPlan}
          />
          <PriceCard
            plan={textContent.card3.plan}
            price={textContent.card3.price}
            month={textContent.month}
            annualPrice={textContent.card3.annualPrice}
            billedAnnually={textContent.billedAnnually}
            info={textContent.infoPlan}
            isPopular
            mostPopular={textContent.popular}
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentsSection;
