import React, { useEffect, useState } from 'react';
import { LockKey, X } from '@phosphor-icons/react';
import { Roulette, useRoulette } from 'react-hook-roulette';
import TextInput from '../components/TextInput';
import CheckboxItem from '../shared/CheckboxItem';
import { GlobalDialog, useGlobalDialog } from '../../contexts/GlobalUIManager';
import axios, { AxiosError } from 'axios';

const SHOW_WHEEL_BANNER = 'showWheelBanner';

const WheelBanner = () => {
  const [bannerVisible, setBannerVisible] = useState(false);
  const globalDialogs = useGlobalDialog();
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

  useEffect(() => {
    const getSquareBannerLS = sessionStorage.getItem(SHOW_WHEEL_BANNER);
    if (getSquareBannerLS) setBannerVisible(false);
    else setBannerVisible(true);
  }, []);

  // Stop the roulette after random seconds between 4 and 6 seconds
  useEffect(() => {
    setTimeout(() => {
      onStop();
    }, Math.floor(Math.random() * 2000) + 4000);
  }, [onStart]);

  const handleOnButtonClick = () => {
    axios
      .post('/api/authenticate', {
        userEmail: email,
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 404 || error.response?.status === 403) {
          onStart();
        } else {
          console.error('[ERROR]: ', 'You are not authorized to access this resource');
        }
      });
  };

  function handleOnClose() {
    setBannerVisible(false);
    sessionStorage.setItem(SHOW_WHEEL_BANNER, 'false');
    globalDialogs.closeDialog(GlobalDialog.Wheel);
  }

  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const onCheckboxChange = (checked) => {
    setFirstCheckbox(!checked);
  };

  return (
    <section
      className={`${
        bannerVisible || globalDialogs.dialogIsOpen(GlobalDialog.Wheel) ? 'flex' : 'hidden'
      }  fixed top-0 left-0 right-0 bottom-0 z-50 h-screen bg-black bg-opacity-50 px-10 lg:px-0`}
    >
      <div
        className={`${
          bannerVisible || globalDialogs.dialogIsOpen(GlobalDialog.Wheel) ? 'flex' : 'hidden'
        } absolute top-1/2 left-1/2
        flex w-full max-w-[1000px] -translate-y-1/2 -translate-x-1/2 transform flex-col bg-white text-neutral-900 lg:rounded-2xl`}
      >
        <button className="absolute right-0 m-7 flex w-auto text-black" onClick={handleOnClose}>
          <X size={32} />
        </button>
        <div className="flex flex-row justify-between">
          <div className="hidden w-full max-w-[500px] flex-col items-center justify-end space-y-5 rounded-l-2xl bg-[url('/images/banners/wheel-banner-bg.webp')] bg-cover bg-no-repeat px-10 pb-14 lg:flex">
            {/* Icon */}
            <div className="flex w-max rounded-[20px] bg-white p-3">
              <LockKey weight="fill" size={42} className="text-primary" />
            </div>
            {/* Text */}
            <div className="flex w-full flex-col space-y-5 text-center text-white">
              <p className="text-6xl font-bold">Safer Internxt Day!</p>
              <p className="text-xl font-semibold">Subscribe, spin, and save on a subscription of your choice!*</p>
            </div>
            <div className="flex flex-col pt-20 text-white">
              <p className="text-sm font-semibold">*Offer is for free accounts or new customers</p>
            </div>
          </div>
          {/* Wheel and mobile view */}
          <div className="flex h-screen w-full max-w-[500px] flex-col items-center justify-center space-y-10 py-11 lg:h-full">
            {/* Title */}
            <div className="flex w-full flex-col space-y-5 text-center lg:hidden">
              <p className="text-4xl font-bold text-primary">Safer Internxt Day!</p>
              <p className="text-xl font-semibold text-gray-80">Spin, save, and secure your data!</p>
            </div>
            <div className="flex flex-col">
              <Roulette roulette={roulette} />
            </div>
            {/* Text input and button */}
            <div className="flex max-w-[240px] flex-col space-y-2">
              <TextInput placeholder="Email Address" className="w-max" onChange={onEmailInputChange} />
              <button className="rounded-lg bg-primary py-2.5 text-white" type="button" onClick={handleOnButtonClick}>
                Spin to win
              </button>
            </div>
            {/* Checkbox and privacy policy */}
            <div className="flex flex-col space-y-6 text-center">
              <CheckboxItem
                checked={firstCheckbox}
                setCheckbox={onCheckboxChange}
                textColor="text-gray-100"
                label={'By subscribing, you agree to our [privacy policy](https://internxt.com/legal).'}
              />
              <div className="flex flex-col text-gray-100 lg:hidden">
                <p className="text-sm font-semibold">*Offer is for free accounts or new customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WheelBanner;
