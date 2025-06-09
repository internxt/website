/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import { Info, Eye, EyeSlash, WarningCircle } from '@phosphor-icons/react';
import pwnedpasswords from '@/lib/checker';
import Header from '@/components/shared/Header';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

const HeroSection = ({ textContent, lang }) => {
  const [inputTypePassword, setInputTypePassword] = useState(true);
  const [passwordLength, setPasswordLength] = useState(0);
  const [pwned, setPwned] = useState('-');
  const [crackFeedback, setCrackFeedback] = useState('-');
  const [crackScore, setCrackScore] = useState(0);
  const [crackTime, setCrackTime] = useState('-');
  const [crackTimeInSeconds, setCrackTimeInSeconds] = useState(0);

  const toggleShowPassword = () => {
    setInputTypePassword(!inputTypePassword);
    document.getElementById('input')?.focus();
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
        });

      // Check for crack time and get anti-crack feedback
      const crack = zxcvbn(password);
      if (crack.feedback.warning !== '') {
        setCrackFeedback(getFeedbackTranslation(crack.feedback.warning));
      } else {
        setCrackFeedback('-');
      }
      setCrackScore(crack.score);
      setCrackTime(getTimeTranslation(crack.crack_times_display.offline_slow_hashing_1e4_per_second));
      setCrackTimeInSeconds(crack.crack_times_seconds.offline_slow_hashing_1e4_per_second);
    }
  };

  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;

  return (
    <section className=" relative flex flex-row items-start pb-8 pt-32">
      <div className="hidden h-full w-full flex-col items-center justify-center lg:flex">
        <Image
          src={getImage(`/banners/Ban_Internext_160x600_en.jpg`)}
          alt="BitDefender Vertical Banner"
          width={180}
          height={180}
          quality={100}
          style={{ cursor: 'pointer' }}
          onClick={() =>
            window.open(
              `https://www.bitdefender.com/pages/consumer/${languageForImage}/new/trial/ts-trial-3m/internxt/`,
              '_blank',
              'noopener noreferrer',
            )
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-6 px-2">
        <div className="lg:max flex flex-col items-center space-y-5 px-4 text-center lg:max-w-2xl lg:px-0">
          <Header isToolsPage className="text-gray-100">
            {textContent.title}
          </Header>
          <h2 className="text-lg font-normal text-gray-80 lg:text-xl">
            <span className="font-semibold">{textContent.subtitle1}</span>
            <br />
            {textContent.subtitle2}
          </h2>
        </div>
        <div className="flex w-full max-w-2xl flex-col items-center rounded-2xl border-4 border-primary/7 bg-primary/2 p-9">
          <div className="flex w-full max-w-lg flex-col items-center space-y-5">
            <div className="relative w-full">
              <input
                onKeyUp={(e) => checkPassword(e)}
                id="input"
                type={inputTypePassword ? 'password' : 'text'}
                placeholder={textContent.placeholder}
                autoComplete="off"
                className="h-14 w-full appearance-none rounded-lg border-2 border-gray-10 bg-white pl-4 pr-14 text-2xl placeholder-gray-30 shadow-subtle outline-none ring-5 ring-primary ring-opacity-0 transition-all delay-150 duration-150 ease-out focus:border-primary focus:ring-opacity-10"
              />
              <label
                onClick={() => toggleShowPassword()}
                className="absolute right-4 top-3 flex h-8 w-8 cursor-pointer flex-col items-center justify-center text-gray-80"
              >
                {inputTypePassword ? <EyeSlash size={28} /> : <Eye size={28} />}
              </label>
            </div>

            <div className="flex h-1.5 w-full flex-row space-x-1.5">
              {['0', '1', '2', '3', '4'].map((step, index) => (
                <div
                  key={step}
                  className={`${
                    index <= crackScore && passwordLength !== 0
                      ? crackScore > 3
                        ? 'bg-green'
                        : crackScore > 1
                        ? 'bg-orange'
                        : 'bg-red'
                      : 'bg-gray-10'
                  } h-full w-full rounded-full transition-all duration-75 ease-out`}
                />
              ))}
            </div>
            <div className="flex flex-row items-start space-x-1 px-10 text-sm text-gray-50">
              <Info size={16} className="pt-1" />
              <span>{textContent.subtitle3}</span>
            </div>
          </div>
        </div>

        {/* Password dynamic feedback */}
        <div className="flex w-full flex-col items-stretch space-y-4 lg:h-48 lg:w-auto lg:max-w-2xl lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="relative flex h-40 w-full flex-col space-y-1 rounded-2xl bg-gray-1 p-8 lg:h-auto lg:w-64">
            <span className="text-sm text-gray-50">{textContent.result.feedback.title}</span>
            <span className={`text-2xl font-semibold text-gray-80`}>{crackFeedback}</span>
          </div>

          <div className="relative flex h-40 w-full flex-col rounded-2xl bg-gray-1 p-8 lg:h-auto lg:w-64">
            <div className="flex h-full flex-col space-y-1">
              <span className="text-sm text-gray-50">{textContent.result.pwned.title}</span>
              <span className="text-2xl font-semibold text-gray-80">{pwned}</span>
            </div>

            <span className="text-sm text-gray-50">{textContent.result.pwned.subtitle}</span>

            <div
              className={`absolute right-8 top-8 text-red-dark transition-opacity duration-100 ease-out ${
                hasNumber(pwned) && pwned.toString() !== '0' ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <WarningCircle weight="fill" size={24} />
            </div>
          </div>

          <div className="flex h-40 w-full flex-col rounded-2xl bg-gray-1 p-8 lg:h-auto lg:w-64 ">
            <div className="flex h-full flex-col space-y-1">
              <span className="text-sm text-gray-50">{textContent.result.crack.title}</span>
              <span className={`text-2xl font-semibold text-gray-80`}>{crackTime}</span>
            </div>

            <span className="text-sm text-gray-50">{textContent.result.crack.subtitle}</span>
          </div>
        </div>
      </div>
      <div className="hidden h-full w-full flex-col items-center justify-center  lg:flex">
        <Image
          src={getImage(`/banners/Ban_Internext_160x600_en.jpg`)}
          alt="BitDefender Vertical Banner"
          width={180}
          height={180}
          quality={100}
          style={{ cursor: 'pointer' }}
          onClick={() =>
            window.open(
              `https://www.bitdefender.com/pages/consumer/${languageForImage}/new/trial/ts-trial-3m/internxt/`,
              '_blank',
              'noopener noreferrer',
            )
          }
        />
      </div>
    </section>
  );
};

export default HeroSection;
