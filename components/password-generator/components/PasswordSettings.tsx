import { useEffect, useState } from 'react';
import CheckboxSettings from './CheckboxSettings';
import { checkPassword, getRandomInteger } from '../utils';

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
    let uppercase: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercase: string = 'abcdefghijklmnopqrstuvwxyz';
    let numbers: string = '0123456789';
    let symbols: string = '!@#$%^&*()<>,.?/[]{}-=_+|/';

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
          <p className="text-xl font-medium text-gray-100">{textContent.length}</p>
          <div className="flex  rounded-lg border border-gray-10 py-1 px-2">
            <p className="text-xl font-medium text-gray-100">{passwordProperties.length}</p>
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
        <div className="flex flex-col items-start lg:w-full lg:flex-row lg:justify-between">
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-col">
              <CheckboxSettings
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
            <p className="text-xl font-medium text-gray-100">{textContent.options.uppercase}</p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-col">
              <CheckboxSettings
                id="lowercase"
                onClick={() => {
                  setPasswordProperties({
                    ...passwordProperties,
                    lowercase: !passwordProperties.lowercase,
                  });
                }}
                checked={passwordProperties.lowercase}
              />
            </div>
            <p className="text-xl font-medium text-gray-100">{textContent.options.lowercase}</p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-col">
              <CheckboxSettings
                id="numbers"
                onClick={() => {
                  setPasswordProperties({
                    ...passwordProperties,
                    numbers: !passwordProperties.numbers,
                  });
                }}
                checked={passwordProperties.numbers}
              />
            </div>
            <p className="text-xl font-medium text-gray-100">{textContent.options.numbers}</p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-col">
              <CheckboxSettings
                id="symbols"
                onClick={() => {
                  setPasswordProperties({
                    ...passwordProperties,
                    symbols: !passwordProperties.symbols,
                  });
                }}
                checked={passwordProperties.symbols}
              />
            </div>
            <p className="text-xl font-medium text-gray-100">{textContent.options.symbols}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordSettings;
