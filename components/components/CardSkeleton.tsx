/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-nested-ternary */
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { checkout } from '../../lib/auth';
import { PriceCardProps } from '../prices/PriceCard';

export default function CardSkeleton() {
  return (
    <div className="priceCard card m-2 flex w-full max-w-xs flex-shrink-0 flex-grow-0 animate-pulse flex-col overflow-hidden rounded-2xl xs:w-72">
      <div className="info flex flex-col items-center justify-center rounded-t-2xl bg-white p-6 pt-6">
        <Skeleton height={30} width={70} className="rounded-full" />

        <div className="planPrice flex flex-col items-center justify-center space-y-4 py-8">
          <div className="priceBreakdown flex flex-row items-end space-x-px text-neutral-700">
            <Skeleton height={40} width={80} />
          </div>

          <Skeleton height={20} width={100} />
        </div>

        <div className="flex w-full flex-row">
          <div className="subscribePlan flex h-10 w-full origin-center transform cursor-pointer select-none items-center justify-center rounded-lg border border-transparent bg-blue-20 px-6 py-2 text-lg font-medium text-white transition-all duration-75"></div>
        </div>
      </div>

      <div className="featureList flex flex-col border-t border-neutral-20 bg-neutral-10 p-6 text-gray-80">
        <Skeleton count={4} />
      </div>
    </div>
  );
}
