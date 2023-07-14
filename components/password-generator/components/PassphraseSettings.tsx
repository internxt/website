import { useRouter } from 'next/router';
import { generate } from 'random-words';
import { useEffect, useState } from 'react';
import { checkPassword, getRandomInteger } from '../utils';
import CheckboxSettings from './CheckboxSettings';

interface PassphraseProperties {
  words: string;
  separator: string;
  capitalize: boolean;
  number: boolean;
}

const space = {
  en: 'Space',
  es: 'Espacio',
  ru: 'Пробел',
};

const PassphraseSettings = ({ textContent, setPassword, setCrackScore, regenerate }) => {
  const [passphraseProperties, setPassphraseProperties] = useState<PassphraseProperties>({
    words: '5',
    separator: '-',
    capitalize: true,
    number: true,
  });

  const router = useRouter();
  const lang = router.locale;

  useEffect(() => {
    setPassword(generateRandomPassphrase().value);
    setCrackScore(generateRandomPassphrase().score);
  }, [passphraseProperties, regenerate]);

  const generateRandomPassphrase = () => {
    const words = Number(passphraseProperties.words);
    const separator = passphraseProperties.separator;
    const capitalize = passphraseProperties.capitalize;
    const number = passphraseProperties.number;

    const wordListLength = generate(words);

    let passphrase = '';

    wordListLength.forEach((word) => {
      if (wordListLength.indexOf(word) !== wordListLength.length - 1 && separator !== '') {
        word += separator;
      }

      if (capitalize) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }

      passphrase += word;
    });

    // Add number in random position
    if (number) {
      const numberPosition = getRandomInteger(0, passphrase.length - 1);
      const number = getRandomInteger(0, 9);

      passphrase = passphrase.slice(0, numberPosition) + number + passphrase.slice(numberPosition);
    }

    return {
      value: passphrase,
      score: checkPassword({ target: { value: passphrase } }),
    };
  };
  return (
    <div className="flex w-full flex-col space-y-8">
      <div className="flex flex-col items-center space-y-5 lg:flex-row lg:space-y-0 lg:space-x-3">
        <div className="flex flex-row items-center space-x-3">
          <p className="text-base font-medium text-gray-100">{textContent.length}</p>
          <div className="flex  rounded-lg border border-gray-10 py-1 px-2">
            <p className="text-base font-medium text-gray-100">{passphraseProperties.words}</p>
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col">
          <input
            type="range"
            min="1"
            max="10"
            value={passphraseProperties.words}
            onChange={(e) =>
              setPassphraseProperties({
                ...passphraseProperties,
                words: e.target.value,
              })
            }
            className="flex w-full cursor-pointer"
          />
        </div>
      </div>

      <div className="flex w-full flex-row items-center space-x-20">
        <div className="flex flex-row items-center space-x-3">
          <div className="flex flex-col">
            <CheckboxSettings
              id="capitalize"
              onClick={() => {
                setPassphraseProperties({
                  ...passphraseProperties,
                  capitalize: !passphraseProperties.capitalize,
                });
              }}
              checked={passphraseProperties.capitalize}
            />
          </div>
          <p className="text-base font-medium text-gray-100">{textContent.options.capitalize}</p>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <div className="flex flex-col">
            <CheckboxSettings
              id="number"
              onClick={() => {
                setPassphraseProperties({
                  ...passphraseProperties,
                  number: !passphraseProperties.number,
                });
              }}
              checked={passphraseProperties.number}
            />
          </div>
          <p className="text-base font-medium text-gray-100">{textContent.options.numbers}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex w-full flex-col items-start space-y-3 md:flex-row md:justify-between md:space-y-0">
          <p className="text-base font-medium text-gray-100">{textContent.options.separator.title}</p>
          {textContent.options.separator.options.map((item) => (
            <div className="flex flex-row items-center space-x-3" key={item}>
              <div className="flex flex-col">
                <CheckboxSettings
                  id="symbols"
                  onClick={() => {
                    setPassphraseProperties({
                      ...passphraseProperties,
                      separator: item,
                    });
                  }}
                  checked={passphraseProperties.separator === item}
                />
              </div>
              <p className="text-base font-medium text-gray-100">{item === '\n' ? space[lang] : item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassphraseSettings;
