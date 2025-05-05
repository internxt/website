import { useState } from 'react';
import { ArrowsClockwise, Copy, Info } from '@phosphor-icons/react';
import { notificationService } from '@/components/Snackbar';
import PasswordSettings from './components/PasswordSettings';
import PassphraseSettings from './components/PassphraseSettings';
import Header from '@/components/shared/Header';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';
const CheckboxButton = ({ checked, id }) => (
  <>
    <div
      className={`relative flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded-full
                  border p-1 text-white ${
                    checked ? 'border-primary bg-primary' : 'border-gray-30 hover:border-gray-40'
                  }`}
    >
      {checked && (
        <div
          className={`flex cursor-pointer flex-col items-center justify-center rounded-full
                      text-white`}
        >
          <div className="rounded-full bg-white p-1" />
        </div>
      )}
    </div>
    <input
      id={id}
      checked={checked}
      type="checkbox"
      readOnly
      className="base-checkbox h-0 w-0 appearance-none opacity-0"
    />
  </>
);

const HeroSection = ({ textContent, lang }) => {
  const [passwordType, setPasswordType] = useState<'password' | 'passphrase'>('password');
  const [password, setPassword] = useState<any>();
  const [regenerate, setRegenerate] = useState(false);
  const [crackScore, setCrackScore] = useState(0);
  const passwordProperties = { length: 13 };
  const passphraseProperties = { words: 5 };

  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;

  return (
    <section className="flex flex-row overflow-hidden px-5 pt-32">
      <div className="hidden h-full w-full flex-col items-center justify-center lg:flex">
        <Image
          src={getImage(`/banners/Ban_Internext_160x600_en.jpg`)}
          alt="BitDefender Vertical Banner"
          width={210}
          height={210}
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
      <div className="flex flex-col items-center justify-center pb-20 pt-32">
        <div className="flex w-full max-w-[702px] flex-col items-center justify-center space-y-16">
          <div className="flex flex-col items-center space-y-5 text-center">
            <Header isToolsPage className="text-gray-100">
              {textContent.title}
            </Header>
            <p className="text-xl font-semibold text-gray-80">{textContent.subtitle}</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center rounded-2xl border-4 border-primary/7 bg-primary/2">
            <div className="flex w-full flex-col items-center justify-center space-y-4 p-9">
              <div
                id="input"
                className="flex w-full flex-col justify-center overflow-x-auto rounded-lg border-2 border-primary bg-white px-3 py-3 text-center placeholder-gray-30 shadow-subtle outline-none ring-4 ring-primary ring-opacity-10"
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
                <button
                  className="flex w-full cursor-pointer select-none items-center justify-center space-x-2 rounded-lg bg-primary py-2 hover:bg-primary-dark"
                  onClick={() => {
                    navigator.clipboard.writeText(password);
                    notificationService.openSuccessToast('Password copied to clipboard');
                  }}
                >
                  <Copy className={`hidden h-5 w-5 text-center text-white md:flex`} />
                  <p className="font-medium text-white">{textContent.copy}</p>
                </button>
                <button
                  className="flex w-full cursor-pointer select-none flex-row items-center justify-center space-x-2 rounded-lg border border-gray-10 bg-white py-2 text-gray-100 hover:bg-gray-10"
                  onClick={() => {
                    setRegenerate(!regenerate);
                  }}
                >
                  <ArrowsClockwise className={`hidden h-5 w-5 text-center md:flex`} />
                  <p className="font-medium">{textContent.generate}</p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col space-y-8">
            <div className="flex w-full flex-col items-center space-y-4 lg:flex-row lg:space-x-2 lg:space-y-0">
              <button
                onClick={() => setPasswordType('password')}
                className={`flex w-full cursor-pointer flex-row items-center space-x-3 rounded-lg border ${
                  passwordType === 'password' ? 'border-primary ring-4 ring-primary ring-opacity-10' : 'border-gray-10'
                } p-5`}
              >
                <CheckboxButton checked={passwordType === 'password'} id={'uppercase'} />
                <p className={`text-xl font-medium ${passwordType === 'password' ? 'text-gray-100' : 'text-gray-50'}`}>
                  {textContent.password.title}
                </p>
              </button>
              <button
                onClick={() => setPasswordType('passphrase')}
                className={`flex w-full cursor-pointer flex-row items-center space-x-3 rounded-lg border ${
                  passwordType === 'passphrase'
                    ? 'border-primary ring-4 ring-primary ring-opacity-10'
                    : 'border-gray-10'
                } p-5`}
              >
                <CheckboxButton checked={passwordType === 'passphrase'} id={'lowercase'} />

                <p
                  className={`text-xl font-medium ${passwordType === 'passphrase' ? 'text-gray-100' : 'text-gray-50'}`}
                >
                  {textContent.passphrase.title}
                </p>
              </button>
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
      <div className="hidden h-full w-full flex-col items-center justify-center lg:flex">
        <Image
          src={getImage(`/banners/Ban_Internext_160x600_en.jpg`)}
          alt="BitDefender Vertical Banner"
          width={210}
          height={210}
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
