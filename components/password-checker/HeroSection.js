import React from 'react';
import pwnedpasswords from '../../lib/checker';

const HeroSection = ({
  textContent
}) => {
  const test = () => {
    pwnedpasswords('password')
      .then((count) => {
        console.log('Password was found %d times.', count);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section
      className="relative bg-white py-20"
    >
      <button
        type="button"
        className=""
        onClick={() => test()}
      >
        Test
      </button>
    </section>
  );
};

export default HeroSection;
