import { useEffect, useState } from 'react';
import { checkPassword, getRandomInteger } from '../utils';
import Checkbox from '@/components/components/Checkbox';

interface PasswordProperties {
  length: string;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const PasswordSettings = ({ textContent, setPassword, setCrackScore, regenerate }) => {
  const [passwordProperties, setPasswordProperties] = useState<PasswordProperties>({
    length: '13',
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  useEffect(() => {
    setPassword(generateRandomPassword().value);
    setCrackScore(generateRandomPassword().score);
  }, [passwordProperties, regenerate]);

  const generateRandomPassword = () => {
    const length: number = Number(passwordProperties.length);
    let characters: string = '';
    const uppercase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase: string = 'abcdefghijklmnopqrstuvwxyz';
    const numbers: string = '0123456789';
    const symbols: string = '!@#$%^&*()<>,.?/[]{}-=_+|/';

    if (passwordProperties.uppercase) {
      characters += uppercase;
    }
    if (passwordProperties.lowercase) {
      characters += lowercase;
    }
    if (passwordProperties.numbers) {
      characters += numbers;
    }
    if (passwordProperties.symbols) {
      characters += symbols;
    }

    if (
      !passwordProperties.uppercase &&
      !passwordProperties.lowercase &&
      !passwordProperties.numbers &&
      !passwordProperties.symbols
    ) {
      passwordProperties.lowercase = true;
      characters += lowercase;
    }

    //Add 0 before the length if it's less than 10
    if (Number(passwordProperties.length) < 10) {
      passwordProperties.length = '0' + passwordProperties.length.replace(/^0+/, '');
    }

    let password = '';

    for (let i = 0; i < length; i++) {
      password += characters[getRandomInteger(0, characters.length - 1)];
    }

    return {
      value: password,
      score: checkPassword({ target: { value: password } }),
    };
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-5 lg:flex-row lg:space-x-3 lg:space-y-0">
        <div className="flex flex-row items-center space-x-3">
          <p className="text-base font-medium text-gray-100">{textContent.length}</p>
          <div className="flex  rounded-lg border border-gray-10 px-2 py-1">
            <p className="text-base font-medium text-gray-100">{passwordProperties.length}</p>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col">
          <input
            type="range"
            min="1"
            max="25"
            value={passwordProperties.length}
            onChange={(e) =>
              setPasswordProperties({
                ...passwordProperties,
                length: e.target.value,
              })
            }
            className="flex w-full cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-col items-start space-y-3 md:flex-row md:justify-between md:space-y-0">
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-col">
              <Checkbox
                rounded="rounded"
                showCheckIcon
                id="uppercase"
                onClick={() => {
                  setPasswordProperties({
                    ...passwordProperties,
                    uppercase: !passwordProperties.uppercase,
                  });
                }}
                checked={passwordProperties.uppercase}
              />
            </div>
            <p className="text-base font-medium text-gray-100">{textContent.options.uppercase}</p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-col">
              <Checkbox
                rounded="rounded"
                id="lowercase"
                showCheckIcon
                onClick={() => {
                  setPasswordProperties({
                    ...passwordProperties,
                    lowercase: !passwordProperties.lowercase,
                  });
                }}
                checked={passwordProperties.lowercase}
              />
            </div>
            <p className="text-base font-medium text-gray-100">{textContent.options.lowercase}</p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-col">
              <Checkbox
                rounded="rounded"
                id="numbers"
                showCheckIcon
                onClick={() => {
                  setPasswordProperties({
                    ...passwordProperties,
                    numbers: !passwordProperties.numbers,
                  });
                }}
                checked={passwordProperties.numbers}
              />
            </div>
            <p className="text-base font-medium text-gray-100">{textContent.options.numbers}</p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-col">
              <Checkbox
                rounded="rounded"
                id="symbols"
                showCheckIcon
                onClick={() => {
                  setPasswordProperties({
                    ...passwordProperties,
                    symbols: !passwordProperties.symbols,
                  });
                }}
                checked={passwordProperties.symbols}
              />
            </div>
            <p className="text-base font-medium text-gray-100">{textContent.options.symbols}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordSettings;
