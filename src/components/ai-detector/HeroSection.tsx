import { useState, Fragment, createRef } from 'react';
import { AiDetectorText } from '@/assets/types/aiDetector';
import pdfToText from 'react-pdftotext';

interface HeroSectionProps {
  textContent: AiDetectorText['HeroSection'];
  lang: string;
}

const MIN_CHARS = 250;
const MAX_CHARS = 15000;

const HeroSection = ({ textContent }: HeroSectionProps): JSX.Element => {
  const [text, setText] = useState('');
  const [detectionScore, setDetectionScore] = useState<number | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const uploadFileRef = createRef<HTMLInputElement>();

  const resetDetectionState = () => {
    setDetectionScore(null);
    setError(null);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    resetDetectionState();
  };

  const processPdfFile = async (file: File) => {
    try {
      const text = await pdfToText(file);
      setText(text);
      resetDetectionState();
    } catch (err) {
      setError(textContent.error.fileReadError);
      console.error('Error reading PDF:', err);
    }
  };

  const processTextFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileText = event.target?.result as string;
      setText(fileText);
      resetDetectionState();
    };
    reader.readAsText(file);
  };

  const isValidFileType = (file: File): boolean => {
    return file.type === 'application/pdf' || file.type === 'text/plain' || file.name.endsWith('.txt');
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!isValidFileType(file)) {
      setError(textContent.error.unsupportedFile);
      return;
    }

    try {
      if (file.type === 'application/pdf') {
        await processPdfFile(file);
      } else {
        processTextFile(file);
      }
    } catch (err) {
      setError(textContent.error.fileReadError);
      console.error('Error reading file:', err);
    }
  };

  const processApiResponse = (result: any) => {
    if (!result.success || !result.data) {
      throw new Error('Invalid response format');
    }

    const aiPercentage = parseFloat(result.data.fakePercentage);
    const humanPercentage = Math.round(100 - aiPercentage);
    setDetectionScore(humanPercentage);
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input_text: text }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const result = await response.json();
      processApiResponse(result);
    } catch (err) {
      setError(textContent.error.apiError);
      console.error('Error:', err);
    } finally {
      setIsScanning(false);
    }
  };

  const getProgressBarColor = (score: number): string => {
    if (score > 60) return 'bg-green-1';
    if (score > 30) return 'bg-yellow';
    return 'bg-red';
  };

  const renderDetectionResult = () => {
    if (isScanning) {
      return (
        <div className="mb-4 flex flex-col items-center">
          <div className="loader mb-2"></div>
          <span className="text-lg font-medium text-gray-100">Scanning...</span>
        </div>
      );
    }

    return (
      <>
        <div className="mb-4 text-6xl font-semibold text-gray-50">
          {detectionScore !== null ? <span className="text-semibold text-gray-100">{detectionScore}%</span> : '%'}
        </div>

        <div className="relative mb-4 h-8 w-3/4 overflow-hidden rounded-full bg-gray-10 shadow-inner">
          {detectionScore !== null && (
            <div
              className={`flex h-8 items-center justify-end rounded-full pr-4 text-lg font-bold transition-all duration-500 ${getProgressBarColor(
                detectionScore,
              )}`}
              style={{ width: `${detectionScore}%` }}
            ></div>
          )}
        </div>

        <div className="mb-4 text-xl font-medium text-gray-50">
          {detectionScore !== null && (
            <span className="text-semibold text-gray-100">{textContent.humanGeneratedText}</span>
          )}
        </div>

        <div className="text-base font-semibold text-gray-50">
          {detectionScore === null ? (
            textContent.detectionScore
          ) : (
            <div className="text-center text-base font-semibold text-gray-50">
              {detectionScore >= 50 ? textContent.likelyHumanText : textContent.likelyAiText}
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <section className="relative flex flex-row items-center justify-center pb-20 pt-32">
      <section className="flex flex-col items-center justify-center space-y-6">
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
                <div className="mb-2 flex flex-col pr-2 text-[15px] leading-5 text-gray-100 sm:mb-0">
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
              <div className="flex w-full flex-col items-center">{renderDetectionResult()}</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
