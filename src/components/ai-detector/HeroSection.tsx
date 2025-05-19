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
        // Use react-pdftotext to extract text from PDF
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
        // Handle text files
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

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white ">
      <section className="flex flex-col items-center justify-center space-y-12 overflow-hidden px-5 pb-10 pt-20 ">
        <div className="flex w-full flex-col items-center justify-center space-y-6 text-center ">
          <p className="text-4xl font-semibold text-gray-100 lg:text-6xl">{textContent.mainTitle}</p>
          <div className="flex flex-col space-y-6 lg:max-w-[800px]">
            {textContent.subtitle && <p className="font-regular text-xl text-gray-80">{textContent.subtitle}</p>}
          </div>
        </div>
      </section>
      <div className="w-full max-w-4xl rounded-2xl border border-[#ededf0] bg-white p-0 shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Left: Input area */}
          <div className="flex-1 p-8">
            <label className="mb-6 block text-lg font-medium">{textContent.title}</label>
            <div>
              <textarea
                className="placeholder-gray-400 min-h-[260px] w-full rounded-xl border-2 border-[#ededf0] bg-[#f7f7fa] p-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder={textContent.placeholder}
                value={text}
                onChange={handleTextChange}
                minLength={MIN_CHARS}
                maxLength={MAX_CHARS}
                style={{ resize: 'none' }}
              />
            </div>
            <div className="mt-4 flex flex-col items-start justify-between sm:flex-row sm:items-center">
              <div className="text-gray-400 mb-2 flex flex-col text-[15px] leading-5 sm:mb-0">
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
                  className="text-gray-700 rounded-lg border border-[#ededf0] bg-white px-6 py-2 text-base font-medium shadow-sm transition hover:bg-[#ededf0]"
                  onClick={() => uploadFileRef.current?.click()}
                  type="button"
                >
                  {textContent.uploadButton}
                </button>
                <button
                  className="rounded-lg bg-[#1673ff] px-6 py-2 text-base font-semibold text-white shadow-sm transition hover:bg-[#005ae0]"
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
          {/* Right: Detection score */}
          <div className="flex w-full flex-col items-center justify-center rounded-br-2xl rounded-tr-2xl bg-gray-1 p-8 md:w-[320px]">
            <div className="flex w-full flex-col items-center">
              {isScanning ? (
                <>
                  <div className="mb-4 flex flex-col items-center">
                    <div className="loader mb-2"></div>
                    <span className="text-gray-400 text-lg font-medium">Scanning...</span>
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
                        className="flex h-8 items-center justify-end rounded-full bg-gray-10 pr-4 text-lg font-bold transition-all duration-500"
                        style={{
                          width: `${detectionScore}%`,
                          background: `linear-gradient(90deg, ${
                            detectionScore > 60
                              ? '#22c55e, #16a34a' // green
                              : detectionScore > 30
                              ? '#facc15, #eab308' // yellow
                              : '#ef4444, #b91c1c' // red
                          })`,
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
  );
};

export default HeroSection;

/* Add spinner CSS at the bottom of the file or in a global CSS file */
/*
.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1673ff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
*/
