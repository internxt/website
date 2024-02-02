import { useState } from 'react';
import Checkbox from '../components/Checkbox';
import { ArrowsClockwise, Copy, Info } from '@phosphor-icons/react';
import { notificationService } from '../Snackbar';
import PasswordSettings from './components/PasswordSettings';
import PassphraseSettings from './components/PassphraseSettings';
import Header from '../shared/Header';

const HeroSection = ({ textContent }) => {
  const [passwordType, setPasswordType] = useState<'password' | 'passphrase'>('password');
  const [password, setPassword] = useState<any>();
  const [regenerate, setRegenerate] = useState(false);
  const [crackScore, setCrackScore] = useState(0);
  const passwordProperties = { length: 13 };
  const passphraseProperties = { words: 5 };

  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center pt-32 pb-20">
        <div className="flex w-full max-w-[702px] flex-col items-center justify-center space-y-16">
          <div className="flex flex-col items-center space-y-5 text-center">
            <Header isToolsPage className="text-gray-100">
              {textContent.title}
            </Header>
            <p className="text-xl font-semibold text-gray-80">{textContent.subtitle}</p>
          </div>
          <div className="flex w-full max-w-xl flex-col items-center justify-center rounded-2xl border-4 border-primary/7 bg-primary/2">
            <div className="flex w-full flex-col items-center justify-center space-y-4 p-9">
              <div
                id="input"
                className="flex w-full flex-col justify-center overflow-x-auto rounded-lg border-2 border-primary bg-white py-3 px-3 text-center placeholder-gray-30 shadow-subtle outline-none ring-4 ring-primary ring-opacity-10"
              >
                <p className="flex-row text-xl font-medium text-gray-100">{password}</p>
              </div>

              <div className="flex h-1.5 w-full flex-row space-x-1.5">
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
                    } h-full w-full rounded-full transition-all duration-75 ease-out`}
                  />
                ))}
              </div>
              <div className="flex flex-row items-center justify-center space-x-1 text-gray-50">
                <Info size={16} weight="bold" />
                <p className="text-sm">{textContent.info}</p>
              </div>
              <div className="flex w-full flex-col gap-2 md:flex-row">
                <div
                  role="button"
                  className="flex w-full cursor-pointer select-none items-center justify-center space-x-2 rounded-lg bg-primary py-2 hover:bg-primary-dark"
                  onClick={() => {
                    navigator.clipboard.writeText(password);
                    notificationService.openSuccessToast('Password copied to clipboard');
                  }}
                >
                  <Copy className={`hidden h-5 w-5 text-center text-white md:flex`} />
                  <p className="font-medium text-white">{textContent.copy}</p>
                </div>
                <div
                  className="flex w-full cursor-pointer select-none flex-row items-center justify-center space-x-2 rounded-lg border border-gray-10 bg-white py-2 text-gray-100 hover:bg-gray-10"
                  onClick={() => {
                    setRegenerate(!regenerate);
                  }}
                >
                  <ArrowsClockwise className={`hidden h-5 w-5 text-center md:flex`} />
                  <p className="font-medium">{textContent.generate}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col space-y-8">
            <div className="flex w-full flex-col items-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-2">
              <div
                onClick={() => setPasswordType('password')}
                className={`flex w-full cursor-pointer flex-row items-center space-x-3 rounded-lg border ${
                  passwordType === 'password' ? 'border-primary ring-4 ring-primary ring-opacity-10' : 'border-gray-10'
                } p-5`}
              >
                <div className="flex flex-col">
                  <Checkbox
                    id="uppercase"
                    onClick={() => {
                      setPasswordType('password');
                    }}
                    checked={passwordType === 'password'}
                  />
                </div>
                <p className={`text-xl font-medium ${passwordType === 'password' ? 'text-gray-100' : 'text-gray-50'}`}>
                  {textContent.password.title}
                </p>
              </div>
              <div
                onClick={() => setPasswordType('passphrase')}
                className={`flex w-full cursor-pointer flex-row items-center space-x-3 rounded-lg border ${
                  passwordType === 'passphrase'
                    ? 'border-primary ring-4 ring-primary ring-opacity-10'
                    : 'border-gray-10'
                } p-5`}
              >
                <div className="flex flex-col">
                  <Checkbox
                    id="lowercase"
                    onClick={() => {
                      setPasswordType('passphrase');
                    }}
                    checked={passwordType === 'passphrase'}
                  />
                </div>
                <p
                  className={`text-xl font-medium ${passwordType === 'passphrase' ? 'text-gray-100' : 'text-gray-50'}`}
                >
                  {textContent.passphrase.title}
                </p>
              </div>
            </div>
            {passwordType === 'password' ? (
              <PasswordSettings
                textContent={textContent.password}
                setPassword={setPassword}
                setCrackScore={setCrackScore}
                regenerate={regenerate}
              />
            ) : (
              <PassphraseSettings
                textContent={textContent.passphrase}
                setPassword={setPassword}
                setCrackScore={setCrackScore}
                regenerate={regenerate}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
