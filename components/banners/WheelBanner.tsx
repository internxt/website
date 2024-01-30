import React, { useEffect, useState } from 'react';
import { Lock, LockKey, X } from '@phosphor-icons/react';
import Wheel from '../shared/Wheel';
import { useRoulette } from 'react-hook-roulette';
import TextInput from '../components/TextInput';
import CheckboxItem from '../shared/CheckboxItem';

const WheelBanner = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const items = [
    { name: '10% OFF', bg: '#001D6C' },
    { name: '15% OFF', bg: '#002D9C' },
    { name: '25% OFF', bg: '#0043CE' },
    { name: '30% OFF', bg: '#0066FF' },
    { name: '45% OFF', bg: '#4589FF' },
    { name: '50% OFF', bg: '#78A9FF' },
  ];
  const { roulette, onStart, onStop, result } = useRoulette({
    items,
    options: {
      size: 300,
      style: {
        label: {
          defaultColor: '#fff',
        },
      },
    },
  });

  // Stop the roulette after random seconds between 4 and 6 seconds
  useEffect(() => {
    setTimeout(() => {
      onStop();
    }, Math.floor(Math.random() * 2000) + 4000);
  }, [onStart]);

  const onClose = () => {
    setBannerVisible(false);
  };

  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section
      className={`${
        bannerVisible ? 'flex' : 'hidden'
      }  fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <div
        className={`${bannerVisible ? 'flex' : 'hidden'} absolute top-1/2 left-1/2
        flex w-full max-w-[1000px] -translate-y-1/2 -translate-x-1/2 transform flex-col rounded-2xl bg-white text-neutral-900`}
      >
        <button className="absolute right-0 m-7 flex w-auto text-black" onClick={onClose}>
          <X size={32} />
        </button>
        <div className="flex flex-row justify-between">
          <div className="flex w-full max-w-[500px] flex-col items-center justify-end space-y-5 rounded-l-2xl bg-[url('/images/banners/wheel-banner-bg.webp')] bg-cover bg-no-repeat px-10 pb-14">
            {/* Icon */}
            <div className="flex w-max rounded-[20px] bg-white p-3">
              <LockKey weight="fill" size={32} className="text-primary" />
            </div>
            <div className="flex w-full flex-col space-y-5 text-center text-white">
              <p className="text-6xl font-bold">Safer Internxt Day!</p>
              <p className="text-xl font-semibold">Subscribe, spin, and save on a subscription of your choice!*</p>
            </div>
            <div className="flex flex-col pt-20 text-white">
              <p className="text-sm font-semibold">*Offer is for free accounts or new customers</p>
            </div>
          </div>
          <div className="flex w-full max-w-[500px] flex-col items-center justify-center space-y-10 py-11">
            <Wheel items={items} roulette={roulette} />
            {/* Text input and button */}
            <div className="flex max-w-[240px] flex-col space-y-2">
              <TextInput placeholder="Email Address" className="w-max" onChange={onEmailInputChange} />
              <button className="rounded-lg bg-primary py-2.5 text-white" type="button" onClick={onStart}>
                Spin to win
              </button>
            </div>
            {/* Checkbox and privacy policy */}
            <div className="flex flex-row">
              <CheckboxItem
                checked={firstCheckbox}
                setCheckbox={setFirstCheckbox}
                textColor="text-gray-100"
                label={'By subscribing, you agree to our [privacy policy](https://internxt.com/legal).'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WheelBanner;
