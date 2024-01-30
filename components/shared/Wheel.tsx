import { useEffect } from 'react';
import { Roulette, useRoulette } from 'react-hook-roulette';
import TextInput from '../components/TextInput';

const Wheel = ({ items, roulette }) => {
  return (
    <div className="flex flex-col">
      <Roulette roulette={roulette} />
    </div>
  );
};

export default Wheel;
