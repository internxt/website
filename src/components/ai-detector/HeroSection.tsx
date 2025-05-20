import { useState, Fragment, createRef } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircle, WarningCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import Header from '../shared/Header';
import { getImage } from '@/lib/getImage';
import BitdefenderBanner from '../banners/BitdefenderBanner';
import { AiDetectorText } from '@/assets/types/aiDetector';
import pdfToText from 'react-pdftotext';

interface HeroSectionProps {
  textContent: AiDetectorText['HeroSection'];
  lang: string;
}

const MIN_CHARS = 250;
const MAX_CHARS = 15000;

const HeroSection = ({ textContent, lang }: HeroSectionProps): JSX.Element => {
  const [text, setText] = useState('');
  const [detectionScore, setDetectionScore] = useState<number | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const uploadFileRef = createRef<HTMLInputElement>();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setDetectionScore(null);
    setError(null);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      if (file.type === 'application/pdf') {
        pdfToText(file)
          .then((text: string) => {
            setText(text);
            setDetectionScore(null);
            setError(null);
          })
          .catch((err: any) => {
            setError(textContent.error.fileReadError);
            console.error('Error reading PDF:', err);
          });
      } else if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const fileText = event.target?.result as string;
          setText(fileText);
          setDetectionScore(null);
          setError(null);
        };
        reader.readAsText(file);
      } else {
        setError(textContent.error.unsupportedFile);
      }
    } catch (err) {
      setError(textContent.error.fileReadError);
      console.error('Error reading file:', err);
    }
  };

  const handleScan = async () => {
    if (text.length < MIN_CHARS) {
      setError(textContent.error.minChars);
      return;
    }
    setIsScanning(true);
    setError(null);

    try {
      const response = await fetch('/api/ai-detector', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input_text: text,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();

      if (result.success && result.data) {
        const aiPercentage = parseFloat(result.data.fakePercentage);
        const humanPercentage = Math.round(100 - aiPercentage);
        setDetectionScore(humanPercentage);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err) {
      setError(textContent.error.apiError);
      console.error('Error:', err);
    } finally {
      setIsScanning(false);
    }
  };

  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;

  return (
    <section className="relative flex flex-row  items-center justify-center pb-8 pt-32 ">
      <div className="flex w-full flex-col items-center justify-center ">
        <Image
          src={getImage(`/banners/Ban_Internext_160x600_en.jpg`)}
          alt="BitDefender Vertical Banner"
          width={200}
          height={700}
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
      <section className="flex flex-col items-center justify-center space-y-6 px-2">
        <div className="flex w-full flex-col items-center justify-center space-y-6 pb-10 text-center">
          <p className="text-4xl font-semibold text-gray-100 lg:text-6xl">{textContent.mainTitle}</p>
          <div className="flex flex-col space-y-6 lg:max-w-[800px]">
            {textContent.subtitle && <p className="font-regular text-xl text-gray-80">{textContent.subtitle}</p>}
          </div>
        </div>

        <div className="w-full max-w-4xl rounded-2xl border border-gray-10 bg-white p-0 shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 p-8">
              <label className="mb-6 block text-lg font-medium">{textContent.title}</label>
              <div>
                <textarea
                  className="placeholder-gray-400 min-h-[260px] w-full rounded-xl border-2 border-gray-10 bg-gray-1 p-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder={textContent.placeholder}
                  value={text}
                  onChange={handleTextChange}
                  minLength={MIN_CHARS}
                  maxLength={MAX_CHARS}
                  style={{ resize: 'none' }}
                />
              </div>
              <div className="mt-4 flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <div className="mb-2 flex flex-col text-[15px] leading-5 text-gray-100 sm:mb-0">
                  <span>
                    {text.length.toLocaleString()}/{MAX_CHARS.toLocaleString()} {textContent.maxChars}
                  </span>
                  <span>
                    {textContent.minChars} {MIN_CHARS}
                  </span>
                </div>
                <div className="flex gap-3">
                  <input
                    type="file"
                    accept=".txt,.pdf"
                    ref={uploadFileRef}
                    className="hidden"
                    onChange={handleFileUpload}
                  />
                  <button
                    className="rounded-lg border border-gray-10 bg-white px-6 py-2 text-base font-medium text-gray-100 shadow-sm transition hover:bg-gray-10"
                    onClick={() => uploadFileRef.current?.click()}
                    type="button"
                  >
                    {textContent.uploadButton}
                  </button>
                  <button
                    className="rounded-lg bg-primary px-6 py-2 text-base font-semibold text-white shadow-sm transition hover:bg-primary-dark"
                    onClick={handleScan}
                    disabled={isScanning || text.length < MIN_CHARS}
                    type="button"
                  >
                    {isScanning ? textContent.scanningText : textContent.scanButton}
                  </button>
                </div>
              </div>
              {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}
            </div>
            <div className="flex w-full flex-col items-center justify-center rounded-br-2xl rounded-tr-2xl bg-gray-1 p-8 md:w-[320px]">
              <div className="flex w-full flex-col items-center">
                {isScanning ? (
                  <>
                    <div className="mb-4 flex flex-col items-center">
                      <div className="loader mb-2"></div>
                      <span className="text-lg font-medium text-gray-100">Scanning...</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4 text-6xl font-semibold text-gray-50">
                      {detectionScore !== null ? (
                        <span className="text-semibold text-gray-100">{detectionScore}%</span>
                      ) : (
                        '%'
                      )}
                    </div>

                    <div className="relative mb-4 h-8 w-3/4 overflow-hidden rounded-full bg-gray-10 shadow-inner">
                      {detectionScore !== null && (
                        <div
                          className={[
                            'flex h-8 items-center justify-end rounded-full pr-4 text-lg font-bold transition-all duration-500',
                            detectionScore > 60 ? 'bg-green-1' : detectionScore > 30 ? 'bg-yellow' : 'bg-red',
                          ].join(' ')}
                          style={{
                            width: `${detectionScore}%`,
                          }}
                        ></div>
                      )}
                    </div>
                    <div className="mb-4 text-xl font-medium text-gray-50">
                      {detectionScore !== null ? (
                        <span className="text-semibold text-gray-100">{textContent.humanGeneratedText}</span>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="text-base font-semibold text-gray-50">{textContent.detectionScore}</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex w-full flex-col items-center justify-center ">
        <Image
          src={getImage(`/banners/Ban_Internext_160x600_en.jpg`)}
          alt="BitDefender Vertical Banner"
          width={200}
          height={700}
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
function pdfToText(file: File) {
  throw new Error('Function not implemented.');
}
