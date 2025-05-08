import { useState, Fragment, createRef } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircle, WarningCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import Header from '../shared/Header';
import { getImage } from '@/lib/getImage';
import BitdefenderBanner from '../banners/BitdefenderBanner';
import { VirusScannerText } from '@/assets/types/virusScanner';
const FILE_SCANNER_URL = process.env.NEXT_PUBLIC_FILE_SCANNER_URL;

interface HeroSectionProps {
  textContent: VirusScannerText['HeroSection'];
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileText = event.target?.result as string;
        setText(fileText);
        setDetectionScore(null);
        setError(null);
      };
      reader.readAsText(file);
    }
  };

  const handleScan = async () => {
    if (text.length < MIN_CHARS) {
      setError(`Enter at least ${MIN_CHARS} characters.`);
      return;
    }
    setIsScanning(true);
    setError(null);
    // Placeholder: Replace with real AI detection API call
    setTimeout(() => {
      // Simulate a detection score
      setDetectionScore(Math.floor(Math.random() * 100));
      setIsScanning(false);
    }, 1500);
  };

  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;

  return (
    <section className="flex min-h-screen items-center justify-center bg-white py-12">
      <div className="w-full max-w-4xl rounded-2xl border border-[#ededf0] bg-white p-0 shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Left: Input area */}
          <div className="flex-1 p-8">
            <label className="mb-6 block text-lg font-medium">Paste or write your text here</label>
            <div>
              <textarea
                className="placeholder-gray-400 min-h-[260px] w-full rounded-xl border-2 border-[#ededf0] bg-[#f7f7fa] p-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder={`Enter at least ${MIN_CHARS} characters`}
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
                  {text.length.toLocaleString()}/{MAX_CHARS.toLocaleString()} characters
                </span>
                <span>Minimum {MIN_CHARS} characters</span>
              </div>
              <div className="flex gap-3">
                <input type="file" accept=".txt" ref={uploadFileRef} className="hidden" onChange={handleFileUpload} />
                <button
                  className="text-gray-700 rounded-lg border border-[#ededf0] bg-white px-6 py-2 text-base font-medium shadow-sm transition hover:bg-[#ededf0]"
                  onClick={() => uploadFileRef.current?.click()}
                  type="button"
                >
                  Upload
                </button>
                <button
                  className="rounded-lg bg-[#1673ff] px-6 py-2 text-base font-semibold text-white shadow-sm transition hover:bg-[#005ae0]"
                  onClick={handleScan}
                  disabled={isScanning || text.length < MIN_CHARS}
                  type="button"
                >
                  {isScanning ? 'Scanning...' : 'Scan for AI'}
                </button>
              </div>
            </div>
            {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}
          </div>
          {/* Right: Detection score */}
          <div className="flex w-full flex-col items-center justify-center  bg-gray-1 p-8 md:w-[320px] ">
            <div className="flex w-full flex-col items-center">
              <div className="mb-4 text-6xl font-medium text-gray-50">
                {detectionScore !== null ? <span className="text-[#1673ff]">{detectionScore}%</span> : '%'}
              </div>

              <div className="relative mb-4 h-8 w-3/4 overflow-hidden rounded-full bg-gray-10 shadow-inner">
                {detectionScore !== null && (
                  <div
                    className="flex h-8 items-center justify-end rounded-full bg-gray-10 pr-4 text-lg font-bold text-white transition-all duration-500"
                    style={{
                      width: `${detectionScore}%`,
                      background: `linear-gradient(90deg, ${
                        detectionScore < 40
                          ? '#22c55e, #16a34a' // green
                          : detectionScore < 70
                          ? '#facc15, #eab308' // yellow
                          : '#ef4444, #b91c1c' // red
                      })`,
                    }}
                  >
                    <span className="drop-shadow-md">{detectionScore}%</span>
                  </div>
                )}
              </div>
              <div className="text-base font-semibold text-gray-50">Detection score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
