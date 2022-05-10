/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';
import { Eye, EyeSlash } from 'phosphor-react';
import pwnedpasswords from '../../lib/checker';

const HeroSection = ({
  textContent
}) => {
  const [inputTypePassword, setInputTypePassword] = useState(true);
  const [pwned, setPwned] = useState('-');
  const [crackFeedback, setCrackFeedback] = useState('-');
  const [crackScore, setCrackScore] = useState(0);
  const [crackTime, setCrackTime] = useState('-');
  const [crackTimeInSeconds, setCrackTimeInSeconds] = useState(0);

  useEffect(() => {
    document.getElementById('input').focus();
  });

  const toggleShowPassword = () => {
    setInputTypePassword(!inputTypePassword);
    document.getElementById('input').focus();
  };

  const checkPassword = (pswrd) => {
    const password = pswrd.target.value;

    if (password === '') {
      setPwned('-');
      setCrackTime('-');
      setCrackTimeInSeconds(0);
      setCrackFeedback('-');
      setCrackScore(0);
    } else {
      // Check for leaked passwords
      pwnedpasswords(password)
        .then((count) => {
          setPwned(count);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });

      // Check for crack time and get anti-crack feedback
      const crack = zxcvbn(password);
      if (crack.feedback.warning !== '') {
        setCrackFeedback(crack.feedback.warning);
      } else {
        setCrackFeedback('-');
      }
      setCrackScore(crack.score);
      setCrackTime(crack.crack_times_display.offline_fast_hashing_1e10_per_second);
      setCrackTimeInSeconds(crack.crack_times_seconds.offline_fast_hashing_1e10_per_second);
    }
  };

  return (
    <section
      className="relative flex flex-col items-center bg-white pt-32 pb-16 space-y-16"
    >
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-5xl font-medium">{textContent.title}</h1>
        <h2 className="text-center text-lg">
          {textContent.subtitle1}
          <br />
          {textContent.subtitle2}
        </h2>
      </div>

      <div className="flex flex-col items-center w-full max-w-lg space-y-5">
        <div className="relative w-full">
          <input
            onKeyUp={(e) => checkPassword(e)}
            id="input"
            type={inputTypePassword ? 'password' : 'text'}
            placeholder={textContent.placeholder}
            className="h-14 w-full bg-white rounded-xl border-2 border-gray-10 focus:border-primary ring-5 ring-primary ring-opacity-0 focus:ring-opacity-10 px-4 text-2xl placeholder-gray-30 appearance-none outline-none shadow-subtle focus:shadow-subtle-hard transition-all duration-150 ease-out delay-150"
          />
          <label
            onClick={() => toggleShowPassword()}
            className="absolute top-3 right-4 flex flex-col items-center justify-center w-8 h-8 text-gray-80 cursor-pointer"
          >
            {inputTypePassword ? (
              <EyeSlash size={28} />
            ) : (
              <Eye size={28} />
            )}
          </label>
        </div>

        <div className="flex flex-row w-full h-1.5 bg-gray-10 rounded-full overflow-hidden">
          <div
            // eslint-disable-next-line no-nested-ternary
            className={`${crackScore > 3 ? 'bg-green' : (crackScore > 1 ? 'bg-orange' : 'bg-red')} h-full rounded-full transition-all duration-75 ease-out`}
            style={{
              width: `${20 + (crackScore / 4) * 80}%`
            }}
          />
        </div>

        <span className="text-sm text-gray-30">
          {textContent.subtitle3}
        </span>
      </div>

      <div className="flex flex-row items-stretch h-48 space-x-5">

        <div className="flex flex-col w-64 bg-gray-5 rounded-2xl p-8 space-y-1">
          <span className="text-xs font-semibold text-gray-60">
            {textContent.result.security.title}
          </span>
          <span className={`${crackFeedback === '-' ? 'text-4xl' : 'text-xl'} font-medium`}>
            {crackFeedback}
          </span>
        </div>

        <div className="flex flex-col w-64 bg-gray-5 rounded-2xl p-8">
          <div className="flex flex-col h-full space-y-1">
            <span className="text-xs font-semibold text-gray-60">
              {textContent.result.pwned.title}
            </span>
            <span className="text-4xl font-medium">
              {pwned}
            </span>
          </div>

          <span className="text-sm text-gray-40">
            {textContent.result.pwned.subtitle}
          </span>
        </div>

        <div className="flex flex-col w-64 bg-gray-5 rounded-2xl p-8">
          <div className="flex flex-col h-full space-y-1">
            <span className="text-xs font-semibold text-gray-60">
              {textContent.result.crack.title}
            </span>
            <span className={`${(crackTimeInSeconds < 1 && crackTime !== '-') ? 'text-xl' : 'text-4xl'} font-medium`}>
              {crackTime}
            </span>
          </div>

          <span className="text-sm text-gray-40">
            {textContent.result.crack.subtitle}
          </span>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
