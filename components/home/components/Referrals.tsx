import { CaretDown } from 'phosphor-react';
import React from 'react';

const ReferralsItems = [
  {
    step: 'Create an account',
    stepColor: 'text-gray-40',
    space: '1GB',
    spaceColor: 'text-green-dark ',
    spaceBg: 'bg-green bg-opacity-15',
  },
  {
    step: 'Install mobile app',
    stepColor: 'text-gray-80',
    space: '1GB',
    spaceColor: 'text-gray-60',
    spaceBg: 'bg-gray-5',
  },
  {
    step: 'Share file via link',
    stepColor: 'text-gray-40',
    space: '1GB',
    spaceColor: 'text-green-dark ',
    spaceBg: 'bg-green bg-opacity-15',
  },
  {
    step: 'Subscribe to newsletter',
    stepColor: 'text-gray-40',
    space: '1GB',
    spaceColor: 'text-green-dark ',
    spaceBg: 'bg-green bg-opacity-15',
  },
  {
    step: 'Install desktop app',
    stepColor: 'text-gray-80',
    space: '1GB',
    spaceColor: 'text-gray-60',
    spaceBg: 'bg-gray-5',
  },
  {
    step: 'Invite 0/4 friends',
    stepColor: 'text-gray-80',
    space: '1GB',
    spaceColor: 'text-gray-60',
    spaceBg: 'bg-gray-5',
  },
];

const Referrals = () => {
  return (
    <div className="flex overflow-hidden rounded-xl shadow-2xl">
      <div className="flex flex-col space-y-6 p-5">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <p className="text-base font-medium text-gray-80">Get 10GB for free</p>
            <p className="text-xs font-medium text-green-dark">Unlocked 4GB out of 10GB</p>
          </div>
          <CaretDown size={20} className="text-gray-40" />
        </div>
        <div className="flex flex-col space-y-3">
          {ReferralsItems.map((item) => (
            <div className="flex flex-row items-center justify-between space-x-1" key={item.step}>
              <div className="flex flex-row items-center space-x-2">
                <div className={`flex h-4 w-10 items-center justify-center rounded-full ${item.spaceBg}`}>
                  <p className={`text-xs font-medium ${item.spaceColor}`}>{item.space}</p>
                </div>
                <div className="flex flex-col">
                  <p className={`text-sm ${item.stepColor}`}>{item.step}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Referrals;
