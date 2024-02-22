import { LockKey, WarningCircle } from '@phosphor-icons/react';
import TextInput from '@/components/components/TextInput';
import CheckboxItem from '@/components/shared/CheckboxItem';
import { useEffect, useState } from 'react';
import { Roulette, useRoulette } from 'react-hook-roulette';
import axios, { AxiosError } from 'axios';

const WheelComponent = ({ onViewChange, setResult }) => {
  const [email, setEmail] = useState('');
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [error, setError] = useState(false);

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

  useEffect(() => {
    if (result) {
      setResult(result);
      onViewChange('congratulations');
    }
  }, [result]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);

  const onEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const onCheckboxChange = () => {
    setFirstCheckbox(!firstCheckbox);
  };

  const handleOnButtonClick = (e) => {
    e.preventDefault();
    axios
      .post('/api/authenticate', {
        userEmail: email,
      })
      .then(() => {
        setError(true);
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 404 || error.response?.status === 403) {
          onStart();
        } else {
          console.error('[ERROR]: ', 'You are not authorized to access this resource');
        }
      });
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="hidden w-full max-w-[500px] flex-col items-center justify-end space-y-5 rounded-l-2xl bg-[url('/images/banners/wheel-banner-bg.webp')] bg-cover bg-no-repeat px-10 pb-14 lg:flex">
        {/* Icon */}
        <div className="flex w-max rounded-[20px] bg-white p-3">
          <LockKey weight="fill" size={42} className="text-primary" />
        </div>
        {/* Text */}
        <div className="flex w-full flex-col space-y-5 text-center text-white">
          <p className="text-6xl font-bold">Safer Internet Day!</p>
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
          <p className="text-4xl font-bold text-primary">Safer Internet Day!</p>
          <p className="text-xl font-semibold text-gray-80">Spin, save, and secure your data!</p>
        </div>
        <div className="flex flex-col">
          <Roulette roulette={roulette} />
        </div>
        {/* Text input and button */}
        <form className="flex w-full max-w-[240px] flex-col space-y-2" onSubmit={handleOnButtonClick}>
          <TextInput
            placeholder="Email Address"
            value={email}
            passwordError={error}
            type="email"
            className="w-full"
            onChange={onEmailInputChange}
          />
          {error && (
            <div className="flex flex-row items-center space-x-1 text-sm text-red">
              <WarningCircle size={13} weight="fill" />
              <p className="">Offer unavailable for paid users</p>
            </div>
          )}
          <button
            disabled={email === ''}
            className={`rounded-lg ${email === '' ? 'bg-gray-30' : 'bg-primary'}  w-full py-2.5 text-white`}
            type="submit"
          >
            Spin to win
          </button>
        </form>
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
  );
};

export default WheelComponent;
