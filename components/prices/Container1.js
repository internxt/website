import React, { useState } from 'react';
import Image from 'next/image';

import styles from './Container1.module.css';
import PriceCardOld from '../cards/PriceCard';
import PriceCard from './PriceCard';
import { Transition } from '@headlessui/react'

const Container1 = ({ id, descriptions, cardDescriptions }) => {
  const description = descriptions.filter((desc) => desc.id === id);
  const [individual, setIndividual] = useState(true);
  const [billingFrequency, setBillingFrequency] = useState(12);
  const [teams, setTeams] = useState(false);

  return (
    <section className="bg-neutral-10">

      <div className="flex flex-col items-center">
        <h1 className="pt-40 text-center text-4xl">
          <p className={`${individual ? 'flex' : 'hidden'}`}>Individual Plans</p>
          <p className={`${individual ? 'hidden' : 'flex'}`}>Business Plans</p>
        </h1>
        <button className="pt-2 pb-10 text-center text-blue-60 active:text-blue-50 font-semibold cursor-pointer" onClick={() => {setIndividual(!individual)}}>
          <p className={`${individual ? 'flex' : 'hidden'}`}>Change to Business Plans</p>
          <p className={`${individual ? 'hidden' : 'flex'}`}>Change to Individual Plans</p>
        </button>

        <div className="flex flex-row p-1.5 bg-neutral-20 ring-1 ring-neutral-30 rounded-lg">
          <button onClick={() => {setBillingFrequency(1)}} className={`py-2 px-6 rounded-lg ${billingFrequency === 1 ? 'text-neutral-500 shadow-sm ring-1 ring-neutral-30 bg-white font-semibold' : 'text-neutral-100'}`}>Monthly</button>
          <button onClick={() => {setBillingFrequency(6)}} className={`py-2 px-6 rounded-lg ${billingFrequency === 6 ? 'text-neutral-500 shadow-sm ring-1 ring-neutral-30 bg-white font-semibold' : 'text-neutral-100'}`}>Semianually</button>
          <button onClick={() => {setBillingFrequency(12)}} className={`py-2 px-6 rounded-lg ${billingFrequency === 12 ? 'text-neutral-500 shadow-sm ring-1 ring-neutral-30 bg-white font-semibold' : 'text-neutral-100'}`}>Anually</button>
        </div>
        
          <div className={`${individual ? 'flex' : 'hidden'} content flex-row justify-center justify-items-center items-end space-x-6 p-20 pt-12 py-40`}>
            <PriceCard planType="individual" storage="2GB" pricePerMonth="free" billingFrequency={billingFrequency} />
            <PriceCard planType="individual" storage="20GB" pricePerMonth="0.89" billingFrequency={billingFrequency} />
            <PriceCard planType="individual" storage="200GB" pricePerMonth="3.49" billingFrequency={billingFrequency} popular />
            <PriceCard planType="individual" storage="2TB" pricePerMonth="8.99" billingFrequency={billingFrequency} />
          </div>
        

        <div className={`${individual ? 'hidden' : 'flex'} content flex-row justify-center justify-items-center items-end space-x-6 p-20 pt-12 py-40`}>
          <PriceCard planType="business" storage="200GB" pricePerMonth="free" billingFrequency={billingFrequency} />
          <PriceCard planType="business" storage="2TB" pricePerMonth="0.89" billingFrequency={billingFrequency} />
          <PriceCard planType="business" storage="200TB" pricePerMonth="3.49" billingFrequency={billingFrequency} popular />
          <PriceCard planType="business" storage="+200TB" pricePerMonth="8.99" billingFrequency={billingFrequency} />
        </div>
      </div>
      
      

    </section>
  );
};

export default Container1;
