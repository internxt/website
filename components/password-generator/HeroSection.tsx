import { useEffect, useState } from 'react';
import pwnedpasswords from '../../lib/checker';
import zxcvbn from 'zxcvbn';
import Checkbox from '../components/Checkbox';
import { ArrowsClockwise, Copy, WarningCircle } from '@phosphor-icons/react';
import { generate } from 'random-words';
import { notificationService } from '../Snackbar';
import Tooltip from '../prices/ToolTip';

interface PasswordProperties {
  length: string;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  ambiguous: boolean;
}

interface PassphraseProperties {
  words: string;
  separator: string;
  capitalize: boolean;
  number: boolean;
}

const HeroSection = () => {
  const textContent = require('../../assets/lang/en/password-checker.json');
  const [passwordType, setPasswordType] = useState<'password' | 'passphrase'>('password');
  const [passwordProperties, setPasswordProperties] = useState<PasswordProperties>({
    length: '10',
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    ambiguous: true,
  });
  const [passphraseProperties, setPassphraseProperties] = useState<PassphraseProperties>({
    words: '4',
    separator: '-',
    capitalize: true,
    number: true,
  });
  const [password, setPassword] = useState<any>();
  const [regenerate, setRegenerate] = useState(false);
  const [pwned, setPwned] = useState('-');
  const [regenerateIcon, setRegenerateIcon] = useState(false);
  const [copyIcon, setCopyIcon] = useState(false);
  const [crackTime, setCrackTime] = useState('-');
  const [crackScore, setCrackScore] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (passwordType === 'password') {
      setPassword(generateRandomPassword());
    } else if (passwordType === 'passphrase') {
      setPassword(generateRandomPassphrase());
    }
  }, [passwordProperties, passphraseProperties, passwordType, regenerate]);

  useEffect(() => {
    if (regenerateIcon) {
      setTimeout(() => {
        setRegenerateIcon(false);
      }, 1000);
    } else if (copyIcon) {
      setTimeout(() => {
        setCopyIcon(false);
      }, 500);
    }
  }, [regenerateIcon, copyIcon]);

  const hasNumber = (string) => /\d/.test(string);

  const getTimeTranslation = (displaytTime) => {
    const timecases = textContent.HeroSection.result.crack.cases;
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

    if (password === '') {
      setPwned('-');
      setCrackTime('-');
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
      setCrackTime(getTimeTranslation(crack.crack_times_display.offline_slow_hashing_1e4_per_second));
      setCrackScore(crack.score);
    }
  };

  const getRandomInteger = (min, max) => {
    const randomWords = new Uint32Array(1);
    window.crypto.getRandomValues(randomWords);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((randomWords[0] / (0xffffffff + 1)) * (max - min + 1)) + min;
  };

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
    if (!passwordProperties.ambiguous) {
      lowercase = lowercase.replace(/[iol]/g, '');
      uppercase = uppercase.replace(/[IO]/g, '');
      numbers = numbers.replace(/[01]/g, '');
      characters = characters.replace(/[iolIO01|]/g, '');
    }
    if (
      !passwordProperties.uppercase &&
      !passwordProperties.lowercase &&
      !passwordProperties.numbers &&
      !passwordProperties.symbols &&
      !passwordProperties.ambiguous
    ) {
      passwordProperties.lowercase = true;
      characters += lowercase;
    }

    let password = '';

    for (let i = 0; i < length; i++) {
      password += characters[getRandomInteger(0, characters.length - 1)];
    }

    checkPassword({ target: { value: password } });

    return password;
  };

  const generateRandomPassphrase = () => {
    const words = Number(passphraseProperties.words);
    const separator = passphraseProperties.separator;
    const capitalize = passphraseProperties.capitalize;
    const number = passphraseProperties.number;

    const wordListLength = generate(words);

    let passphrase = '';

    wordListLength.map((word) => {
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

    checkPassword({ target: { value: passphrase } });

    return passphrase;
  };

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center pt-32">
        <div className="flex w-full max-w-xl flex-col space-y-6">
          <div className="flex w-full max-w-lg flex-col items-center justify-center space-y-6">
            <div className="flex w-full items-center justify-center rounded-lg border border-gray-10 py-3 shadow-lg">
              <p>{password}</p>
            </div>
            <div className="flex h-1.5 w-full flex-row">
              {['0', '1', '2', '3', '4'].map((step, index) => (
                <div
                  key={step}
                  // eslint-disable-next-line no-nested-ternary
                  className={`${
                    (index <= crackScore && Number(passwordProperties.length) !== 0) ||
                    (index <= crackScore && Number(passphraseProperties.words) !== 0)
                      ? crackScore > 3
                        ? 'bg-green'
                        : crackScore > 1
                        ? 'bg-orange'
                        : 'bg-red'
                      : 'bg-gray-10'
                  } h-full w-full transition-all duration-75 ease-out first:rounded-l-full last:rounded-r-full`}
                />
              ))}
            </div>
            <div className="flex w-full flex-row space-x-2">
              <div
                className="flex w-full cursor-pointer items-center justify-center space-x-1 rounded-lg bg-green py-2"
                onClick={() => {
                  navigator.clipboard.writeText(password);
                  notificationService.openSuccessToast('Password copied to clipboard');
                  setCopyIcon(true);
                }}
              >
                <Copy className={`h-5 w-5 ${copyIcon && 'animate-ping'} text-white`} />
                <p className="font-medium text-white">Copy password</p>
              </div>
              <div
                className="flex w-full cursor-pointer flex-row items-center justify-center space-x-1 rounded-lg bg-primary py-2"
                onClick={() => {
                  setRegenerate(!regenerate);
                  setRegenerateIcon(true);
                }}
              >
                <ArrowsClockwise className={`h-5 w-5 text-white ${regenerateIcon && 'animate-spin'}`} />
                <p className="font-medium text-white">Regenerate</p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col space-y-3">
            <div className="flex w-full flex-row items-center">
              <div className="flex w-full flex-row items-center space-x-3">
                <p>Password</p>
                <div className="flex w-full flex-col">
                  <Checkbox
                    id="uppercase"
                    onClick={() => {
                      setPasswordType('password');
                    }}
                    checked={passwordType === 'password'}
                  />
                </div>
              </div>
              <div className="flex w-full flex-row items-center space-x-3">
                <p>Passphrase</p>
                <div className="flex w-full flex-col">
                  <Checkbox
                    id="lowercase"
                    onClick={() => {
                      setPasswordType('passphrase');
                    }}
                    checked={passwordType === 'passphrase'}
                  />
                </div>
              </div>
            </div>
            {passwordType === 'password' ? (
              <>
                <div className="flex w-full max-w-lg flex-row items-center space-x-3">
                  <p>Length</p>
                  <div className="flex rounded-lg border border-gray-10 py-1 px-2">
                    <p>{passwordProperties.length}</p>
                  </div>
                  <div className="flex w-full flex-col">
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
                      className="w-full cursor-pointer"
                      color="#000000"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-row items-center">
                  <div className="flex w-full flex-row items-center space-x-3">
                    <p>Uppercase</p>
                    <div className="flex w-full flex-col">
                      <Checkbox
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
                  </div>
                  <div className="flex w-full flex-row items-center space-x-3">
                    <p>Lowercase</p>
                    <div className="flex w-full flex-col">
                      <Checkbox
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
                  </div>
                </div>
                <div className="flex w-full flex-row items-center space-x-3">
                  <div className="flex w-full flex-row items-center space-x-3">
                    <p>Numbers</p>
                    <div className="flex w-full flex-col">
                      <Checkbox
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
                  </div>
                  <div className="flex w-full flex-row items-center space-x-3">
                    <p>Symbols</p>
                    <div className="flex w-full flex-col">
                      <Checkbox
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
                  </div>
                </div>
                <div className="flex w-full flex-row items-center space-x-3">
                  <p>Ambiguous Characters</p>
                  <div className="flex w-full flex-col">
                    <Checkbox
                      id="symbols"
                      onClick={() => {
                        setPasswordProperties({
                          ...passwordProperties,
                          ambiguous: !passwordProperties.ambiguous,
                        });
                      }}
                      checked={passwordProperties.ambiguous}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex w-full max-w-lg flex-row items-center space-x-3">
                  <p>Words</p>
                  <div className="flex rounded-lg border border-gray-10 py-1 px-2">
                    <p>{passphraseProperties.words}</p>
                  </div>
                  <div className="flex w-full flex-col">
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
                      className="w-full cursor-pointer"
                      color="#000000"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-row items-center">
                  <div className="flex w-full flex-row items-center space-x-3">
                    <p>Capitalize</p>
                    <div className="flex w-full flex-col">
                      <Checkbox
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
                  </div>
                  <div className="flex w-full flex-row items-center space-x-3">
                    <p>Numbers</p>
                    <div className="flex w-full flex-col">
                      <Checkbox
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
                  </div>
                </div>
                <div className="flex w-full flex-row items-center justify-center space-x-3">
                  <div className="flex w-full flex-row items-center space-x-3">
                    <p>Word Separator</p>
                    <div className="flex flex-col py-1 px-2">
                      <input
                        type="text"
                        value={passphraseProperties.separator}
                        onChange={(e) => {
                          // Only allow certain characters and allow removal of separator if it exists
                          let parametersAllowed = /^[-.!?$ ]$/;
                          if (e.target.value.match(parametersAllowed) || e.target.value === '') {
                            setPassphraseProperties({
                              ...passphraseProperties,
                              separator: e.target.value,
                            });
                          }
                        }}
                        className="flex w-max rounded-lg border border-gray-10 py-1 px-2 focus:border-primary"
                      />
                    </div>
                    <div className="flex w-full flex-row items-center space-x-1">
                      <div
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        className="flex cursor-pointer rounded-full bg-gray-10 px-2 py-0.5"
                        title="Only -.!?$ are allowed"
                      >
                        <p className="text-gray-400 select-none text-xs">?</p>
                      </div>
                      {showTooltip && (
                        <div className="flex w-full flex-col bg-white">
                          <p className="text-gray-400 select-none text-sm">Only -, ., !, ?, $ and space are allowed</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
