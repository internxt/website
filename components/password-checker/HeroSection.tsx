/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import {
  Info,
  Eye,
  EyeSlash,
  WarningCircle
} from 'phosphor-react';
import pwnedpasswords from '../../lib/checker';

const HeroSection = ({
  textContent
}) => {
  const [inputTypePassword, setInputTypePassword] = useState(true);
  const [passwordLength, setPasswordLength] = useState(0);
  const [pwned, setPwned] = useState('-');
  const [crackFeedback, setCrackFeedback] = useState('-');
  const [crackScore, setCrackScore] = useState(0);
  const [crackTime, setCrackTime] = useState('-');
  const [crackTimeInSeconds, setCrackTimeInSeconds] = useState(0);

  // useEffect(() => {
  //   // Autofocus password input
  //   document.getElementById('input').focus();
  // });

  const toggleShowPassword = () => {
    setInputTypePassword(!inputTypePassword);
    document.getElementById('input').focus();
  };

  const getFeedbackTranslation = (feedback) => {
    const translations = textContent.result.feedback.cases;
    return translations[feedback];
  };

  const hasNumber = (string) => /\d/.test(string);

  const getTimeTranslation = (displaytTime) => {
    const timecases = textContent.result.crack.cases;
    const displaytTimeHasNumbers = hasNumber(displaytTime);

    // Time is composed of a number and one or more words
    if (displaytTimeHasNumbers) {
      const number = displaytTime.split(' ')[0]; // Get number (1 year --> 1)
      const timecase = displaytTime.split(' ')[1]; // Get timecase (1 year --> year)
      return `${number} ${timecases[timecase]}`;
    }

    // Time has only words
    return timecases[displaytTime];
  };

  const checkPassword = (pswrd) => {
    const password = pswrd.target.value;
    setPasswordLength(password.length);

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
        setCrackFeedback(getFeedbackTranslation(crack.feedback.warning));
      } else {
        setCrackFeedback('-');
      }
      setCrackScore(crack.score);
      setCrackTime(
        getTimeTranslation(crack.crack_times_display.offline_slow_hashing_1e4_per_second)
      );
      setCrackTimeInSeconds(crack.crack_times_seconds.offline_slow_hashing_1e4_per_second);
    }
  };

  return (
    <section className="relative flex flex-col items-center bg-white pt-32 pb-10 sm:pb-16 space-y-12 md:space-y-16">
      <div className="flex flex-col items-center text-center space-y-2 px-4 lg:px-0">
        <h1 className="text-3xl lg:text-5xl font-medium">
          {textContent.title}
        </h1>
        <h2 className="text-lg">
          {textContent.subtitle1}
          <br />
          {textContent.subtitle2}
        </h2>
      </div>

      <div className="flex flex-col items-center w-full max-w-lg space-y-5 px-4 lg:px-0">
        <div className="flex flex-row items-center text-sm text-gray-50 space-x-1">
          <Info size={16} />
          <span>{textContent.subtitle3}</span>
        </div>
        <div className="relative w-full">
          <input
            onKeyUp={(e) => checkPassword(e)}
            id="input"
            type={inputTypePassword ? 'password' : 'text'}
            placeholder={textContent.placeholder}
            autoComplete="off"
            className="h-14 w-full bg-white rounded-lg border-2 border-gray-10 focus:border-primary ring-5 ring-primary ring-opacity-0 focus:ring-opacity-10 pl-4 pr-14 text-2xl placeholder-gray-30 appearance-none outline-none shadow-subtle transition-all duration-150 ease-out delay-150"
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

        <div className="flex flex-row w-full h-1.5 space-x-1.5">
          {['0', '1', '2', '3', '4'].map((step, index) => (
            <div
              key={step}
              // eslint-disable-next-line no-nested-ternary
              className={`${(index <= crackScore && passwordLength !== 0) ? (crackScore > 3 ? 'bg-green' : (crackScore > 1 ? 'bg-orange' : 'bg-red')) : 'bg-gray-10'} h-full w-full rounded-full transition-all duration-75 ease-out`}
            />
          ))}
        </div>
      </div>

      {/* Password dynamic feedback */}
      <div className="flex flex-col lg:flex-row items-stretch w-full lg:w-auto lg:h-48 space-y-4 lg:space-y-0 lg:space-x-5 px-4">

        <div className="flex flex-col w-full lg:w-64 h-40 lg:h-auto bg-gray-5 rounded-2xl p-8 space-y-1">
          <span className="text-xs font-semibold text-gray-50">
            {textContent.result.feedback.title}
          </span>
          <span className={`${crackFeedback === '-' ? 'text-4xl font-normal' : 'text-xl font-medium'}`}>
            {crackFeedback}
          </span>
        </div>

        <div className="flex flex-col w-full lg:w-64 h-40 lg:h-auto bg-gray-5 rounded-2xl p-8 relative">
          <div className="flex flex-col h-full space-y-1">
            <span className="text-xs font-semibold text-gray-50">
              {textContent.result.pwned.title}
            </span>
            <span className="text-4xl font-normal">
              {pwned}
            </span>
          </div>

          <span className="text-sm text-gray-40">
            {textContent.result.pwned.subtitle}
          </span>

          <div className={`absolute top-8 right-8 text-red-dark transition-opacity duration-100 ease-out ${(hasNumber(pwned) && pwned.toString() !== '0') ? 'opacity-100' : 'opacity-0'}`}>
            <WarningCircle weight="fill" size={24} />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-64 h-40 lg:h-auto bg-gray-5 rounded-2xl p-8">
          <div className="flex flex-col h-full space-y-1">
            <span className="text-xs font-semibold text-gray-50">
              {textContent.result.crack.title}
            </span>
            <span className={`${(crackTimeInSeconds < 1 && crackTime !== '-') ? 'text-xl font-medium' : 'text-4xl font-normal'}`}>
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
