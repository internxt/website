import { useState, Fragment, createRef } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import { MetadataRemoverText } from '@/assets/types/metadata-remover';
import { removeMetadata as removeFileMetadata } from '@/lib/metadataRemover';
import { getImage } from '@/lib/getImage';

interface HeroSectionProps {
  textContent: MetadataRemoverText['HeroSection'];
  lang: string;
}

const HeroSection = ({ textContent, lang }: HeroSectionProps): JSX.Element => {
  const [isSelectedFile, setIsSelectedFile] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isProcessFinished, setIsProcessFinished] = useState(false);
  const [processResult, setProcessResult] = useState<any>(null);
  const [dragEnter, setDragEnter] = useState(false);
  const [fileSizeLimitReached, setFileSizeLimitReached] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const uploadFileRef = createRef<HTMLInputElement>();
  const [file, setFile] = useState<File | null>(null);
  const [showPopup, setShowPopup] = useState(true);
  const isDragging = dragEnter;
  const maxFileSize = 104_857_600; // 100MB

  const handleDragEnter = () => {
    if (!dragEnter && !isProcessing && !isProcessFinished) {
      setDragEnter(true);
      setIsSelectedFile(false);
    }
  };

  const handleDragExit = () => {
    setDragEnter(false);
  };

  const handleMetadataRemoval = async () => {
    setProcessResult(null);
    const fileInput = uploadFileRef.current;
    if (!fileInput?.files?.[0]) return;

    try {
      setIsProcessing(true);
      const file = fileInput.files[0];

      const cleanedFileBlob = await removeFileMetadata(file);

      const url = URL.createObjectURL(cleanedFileBlob);
      setDownloadUrl(url);

      setProcessResult({ success: true });
      setIsProcessFinished(true);
      setShowPopup(true);

      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = `cleaned_${file.name}`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Error processing file:', error);
      setIsError(true);
      setIsSelectedFile(false);
      setIsProcessing(false);
      setIsProcessFinished(false);
      setShowPopup(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl && file) {
      const downloadLink = document.createElement('a');
      downloadLink.href = downloadUrl;
      downloadLink.download = `cleaned_${file.name}`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const handleCancel = () => {
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
      setDownloadUrl(null);
    }
    handleRestartProcess();
  };

  const handleRestartProcess = () => {
    setProcessResult(null);
    setIsSelectedFile(false);
    setIsProcessing(false);
    setIsProcessFinished(false);
    setIsError(false);
    setShowPopup(false);
    setFile(null);
  };

  const handleCancelProcess = () => {
    setIsSelectedFile(false);
  };

  const handleConfirmProcess = () => {
    setIsProcessing(true);
    handleMetadataRemoval();
  };

  const handleFiles = () => {
    const fileInput = uploadFileRef.current;
    if (fileInput?.files) {
      setDragEnter(false);
      setFileSizeLimitReached(false);
      setIsSelectedFile(true);
      if (fileInput.files[0] && fileInput.files[0].size >= maxFileSize) {
        setFileSizeLimitReached(true);
      } else {
        setFile(fileInput.files[0]);
      }
    } else {
      console.error('No files to process');
    }
  };

  const handleFileInput = () => {
    const fileInput = uploadFileRef.current;
    if (fileInput?.files) {
      handleFiles();
    }
  };

  const handleOpenFileExplorer = () => {
    (document.querySelector('input[type=file]') as any).click();
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    const fileInput = uploadFileRef.current;
    if (!isProcessing && fileInput) {
      fileInput.files = e.dataTransfer.files;
      handleFiles();
    }
  };

  const processAgainButton = () => {
    return (
      <Transition
        as={Fragment}
        show={!isError && isProcessFinished}
        enter="transition duration-200 ease-in-out"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
      >
        <div className="flex w-full flex-row justify-center pt-6">
          <button
            type="button"
            className="group -bottom-16 z-10 flex h-12 flex-row items-center justify-center space-x-2 rounded-lg border border-gray-10 bg-primary px-6 text-lg text-white transition duration-150 ease-out active:scale-98 sm:-bottom-14 sm:h-10 sm:px-5 sm:text-base"
            onClick={() => {
              handleRestartProcess();
            }}
          >
            <p className="text-base font-medium">{textContent.scanAgain}</p>
          </button>
        </div>
      </Transition>
    );
  };

  const renderProcessStatus = () => {
    if (isProcessing && !isProcessFinished) {
      return (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-4 bg-opacity-3">
          <div className="relative">
            <div className="absolute inset-1">
              <div className="absolute left-0 z-10 h-1 w-full -translate-y-1/2 animate-pingpong-v rounded-xl bg-primary shadow-2xl"></div>
            </div>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-soft filter"
            >
              <g clipPath="url(#clip0_1573_1124)">
                <path
                  d="M10 3.75C10 1.67893 11.6789 0 13.75 0H40.4053C43.3714 0 46.2409 1.05475 48.5009 2.97576L65.5956 17.5063C68.3897 19.8813 70 23.3634 70 27.0305V76.25C70 78.3211 68.3211 80 66.25 80H13.75C11.6789 80 10 78.3211 10 76.25V3.75Z"
                  fill="#FCFCFD"
                />
                <path
                  d="M66.25 79.5H13.75C11.9551 79.5 10.5 78.0449 10.5 76.25V3.75C10.5 1.95507 11.9551 0.5 13.75 0.5H40.4053C43.2528 0.5 46.0075 1.51256 48.1771 3.35673L65.2718 17.8872C67.9541 20.1672 69.5 23.5101 69.5 27.0305V76.25C69.5 78.0449 68.0449 79.5 66.25 79.5Z"
                  stroke="#DDE1E6"
                />
                <path
                  d="M43.3336 1.53303C42.9225 1.09458 42.3683 0.702914 41.75 0.558744V0.512885C43.8731 0.622393 45.9067 1.42689 47.5335 2.80969L65.8665 18.3927C68.0442 20.2438 69.3503 22.91 69.4879 25.75H69.4413C69.2971 25.1318 68.9054 24.5775 68.467 24.1665C67.9178 23.6516 67.1762 23.25 66.5 23.25H47.5C45.7051 23.25 44.25 21.7949 44.25 20V3.5C44.25 2.82384 43.8484 2.08225 43.3336 1.53303Z"
                  fill="#F2F4F8"
                  stroke="#DDE1E6"
                />
                <path
                  d="M13.75 80H66.25C68.3211 80 70 78.3211 70 76.25V73.75C70 75.8211 68.3211 77.5 66.25 77.5H13.75C11.6789 77.5 10 75.8211 10 73.75V76.25C10 78.3211 11.6789 80 13.75 80Z"
                  fill="#DDE1E6"
                />
              </g>
              <defs>
                <clipPath id="clip0_1573_1124">
                  <rect width="80" height="80" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-2xl font-semibold">In progress</p>
        </div>
      );
    }

    if (isProcessFinished) {
      return (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-6 bg-opacity-3 px-5 py-5 text-center">
          <div className="flex flex-col items-center space-y-4">
            <CheckCircle weight="fill" size={48} className="text-green-1" />
            <div className="flex flex-col space-y-2">
              <p className="text-2xl font-semibold">{textContent.table.metadataRemoved}</p>
              <p className="text-lg text-cool-gray-60">{textContent.table.automaticDownload}</p>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <button
                type="button"
                className="flex h-12 flex-row items-center rounded-lg border border-gray-30 bg-white px-6 text-lg font-medium text-black transition duration-150 ease-out active:scale-98 sm:h-10 sm:px-5 sm:text-base"
                onClick={handleCancel}
              >
                {textContent.cancel}
              </button>
              <button
                type="button"
                className="flex h-12 flex-row items-center rounded-lg bg-primary px-6 text-lg font-medium text-white transition duration-150 ease-out active:scale-98 sm:h-10 sm:px-5 sm:text-base"
                onClick={handleDownload}
              >
                {textContent.download}
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (isSelectedFile && !isProcessing) {
      return (
        <div className="flex h-full w-full flex-col items-center justify-center space-y-6 bg-opacity-3 px-5 py-5">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl font-semibold">File uploaded successfully</p>
            <button
              type="button"
              className="flex h-12 flex-row items-center rounded-lg bg-primary px-6 text-lg font-medium text-white transition duration-150 ease-out active:scale-98 sm:h-10 sm:px-5 sm:text-base"
              onClick={handleMetadataRemoval}
            >
              {textContent.removeMetadata}
            </button>
          </div>
        </div>
      );
    }

    return null;
  };
  const languageForImage = ['zh', 'zh-tw', 'ru', 'en'].includes(lang) ? 'en' : lang;
  return (
    <section
      className="relative flex flex-row items-center justify-center pb-20 pt-32"
      onDragEnter={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleDragEnter();
      }}
    >
      <div className="hidden flex-col  items-center justify-center lg:flex lg:px-10 ">
        <Image
          src={getImage(`/banners/Ban_Internext_160x600_en.jpg`)}
          alt="BitDefender Vertical Banner"
          width={180}
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
      <label className="pointer-events-none absolute h-0 w-0 overflow-hidden">
        <input type="file" id="uploadFile" ref={uploadFileRef} tabIndex={-1} onChange={() => handleFileInput()} />
      </label>
      <div
        className={`fixed inset-0 z-50 ${isProcessing || !isDragging ? 'pointer-events-none' : ''}`}
        onDragLeave={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleDragExit();
        }}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => e.preventDefault()}
      />

      <div className="mx-10 flex flex-col items-center space-y-16 lg:mx-10 xl:mx-32">
        <div
          className={`z-20 mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between ${
            !isProcessing && isDragging ? 'pointer-events-none' : ''
          }`}
          onDrop={(e) => e.preventDefault()}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="mb-10 flex flex-col items-center space-y-5 lg:items-start lg:justify-between">
            <div className="flex w-full flex-col items-center space-y-5 text-center">
              <h1 className="text-3xl font-semibold text-cool-gray-100 md:text-6xl">{textContent.title}</h1>
              <p className="text-xl font-normal text-cool-gray-80 md:text-xl">{textContent.subtitle2}</p>
              <p className="md:text-regular flex items-center justify-center gap-2 text-sm font-normal text-cool-gray-80">
                <CheckCircle size={24} weight="fill" className="text-green-1" />
                {textContent.secure}
              </p>
            </div>
          </div>

          <div className="flex h-full w-full max-w-2xl rounded-2xl border-4 border-primary border-opacity-6 bg-primary bg-opacity-3">
            {isSelectedFile ? (
              <>
                {isProcessing ? (
                  <>
                    <div className="relative flex w-full flex-col items-start justify-start overflow-hidden rounded-xl sm:h-96">
                      <div className="flex h-16 w-full flex-shrink-0 flex-row items-center justify-between bg-primary bg-opacity-6 px-5">
                        {isProcessFinished ? (
                          <div className="flex flex-row items-center space-x-1.5"></div>
                        ) : (
                          <div></div>
                        )}
                        <div className="hidden w-1/2 flex-col items-end sm:flex">
                          <p className="max-w-xs truncate text-base font-medium text-cool-gray-80">{file?.name}</p>
                          <p className="text-sm text-cool-gray-60">{file?.type}</p>
                        </div>
                      </div>

                      {renderProcessStatus()}
                    </div>
                  </>
                ) : (
                  <>
                    {fileSizeLimitReached ? (
                      <>
                        <div className="flex h-60 w-full flex-col items-center justify-center rounded-xl bg-opacity-3 sm:h-96">
                          <Transition
                            as="div"
                            show={isSelectedFile}
                            enter="transition duration-200 ease-out"
                            enterFrom="opacity-0 translate-y-2"
                            enterTo="opacity-100 translate-y-0"
                          >
                            <div className="flex flex-col items-center space-y-6">
                              <div className="flex flex-col items-center">
                                <p className="text-2xl font-medium">{textContent.maxFileSize.title}</p>
                                <p className="text-xl text-cool-gray-60">{textContent.maxFileSize.description}</p>
                              </div>
                              <button
                                type="button"
                                className="flex h-10 flex-row items-center rounded-lg bg-primary px-5 font-medium text-white transition duration-150 ease-out active:scale-98"
                                onClick={() => {
                                  handleCancelProcess();
                                }}
                              >
                                {textContent.scanAgain}
                              </button>
                            </div>
                          </Transition>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex h-60 w-full flex-col items-stretch justify-center rounded-xl bg-opacity-3 sm:h-96">
                          <Transition
                            as="div"
                            show={isSelectedFile}
                            enter="transition duration-200 ease-out"
                            enterFrom="opacity-0 translate-y-2"
                            enterTo="opacity-100 translate-y-0"
                          >
                            <div className="flex w-full flex-col items-center space-y-6">
                              <div className="flex w-full flex-shrink flex-col items-center overflow-hidden">
                                <p className="px-4 text-center text-2xl font-medium">{textContent.fileSelected}</p>
                                <p className="w-full truncate px-10 text-center text-lg font-semibold text-cool-gray-60 lg:w-auto lg:max-w-md xl:max-w-xl">
                                  {file?.name}
                                </p>
                              </div>
                              <div className="flex flex-row items-center justify-center space-x-4">
                                <button
                                  type="button"
                                  className="flex h-12 flex-row items-center rounded-lg border border-gray-30 bg-white px-6 text-lg font-medium text-black transition duration-150 ease-out active:scale-98 sm:h-10 sm:px-5 sm:text-base"
                                  onClick={() => {
                                    handleCancelProcess();
                                  }}
                                >
                                  {textContent.cancel}
                                </button>
                                <button
                                  type="button"
                                  className="flex h-12 flex-row items-center rounded-lg bg-primary px-6 text-lg font-medium text-white transition duration-150 ease-out active:scale-98 sm:h-10 sm:px-5 sm:text-base"
                                  onClick={() => {
                                    handleConfirmProcess();
                                  }}
                                >
                                  {textContent.scanNow}
                                </button>
                              </div>
                            </div>
                          </Transition>
                        </div>
                      </>
                    )}
                  </>
                )}
              </>
            ) : (
              <label
                htmlFor="uploadFile"
                className={`flex h-60 w-full flex-col sm:h-96 ${!isProcessing && isDragging && 'pointer-events-none'}`}
              >
                {isDragging ? (
                  <>
                    <div className="flex h-60 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary bg-opacity-3 sm:h-96">
                      <Image
                        src="/images/virus-scanner/FileArrowUp.png"
                        alt="File Arrow Up icon"
                        width={80}
                        height={80}
                      />
                      <p className="pt-4 text-2xl font-semibold">{textContent.dropHere}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl">
                      <div className={`flex flex-row items-center lg:space-x-0 xl:space-x-20`}>
                        <div className="hidden lg:flex">
                          <Image
                            src="/images/virus-scanner/upload_file.webp"
                            width={187}
                            height={187}
                            alt="Upload File"
                          />
                        </div>
                        <div className="flex max-w-[255px] flex-col items-center space-y-4 text-center">
                          <div className="flex flex-col rounded-lg bg-primary/7 px-4 py-2">
                            <p className="text-sm font-medium text-gray-80">{textContent.maxFileSize.description}</p>
                          </div>
                          <p className="text-3xl font-semibold">{textContent.dropFile.line1}</p>
                          <button
                            type="button"
                            className="flex h-12 flex-row items-center rounded-lg bg-primary px-6 text-lg font-medium text-white transition duration-150 ease-out active:scale-98 group-hover:bg-primary group-hover:text-white sm:h-10 sm:px-5 sm:text-base"
                            onClick={() => {
                              handleOpenFileExplorer();
                            }}
                          >
                            {textContent.selectFile}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </label>
            )}
            {isError && (
              <div className="fixed inset-0 z-50 flex h-screen w-full flex-row items-center justify-center overflow-hidden rounded-xl bg-primary bg-opacity-3">
                <button
                  className="absolute inset-0 cursor-pointer bg-black bg-opacity-40"
                  onClick={() => {
                    handleRestartProcess();
                  }}
                />
                <Transition
                  as={Fragment}
                  show={isError}
                  enter="transition duration-200 ease-in-out"
                  enterFrom="opacity-0 translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                >
                  <div className="relative z-10 flex w-80 flex-col items-center justify-center space-y-4 rounded-xl bg-white p-5 shadow-subtle-hard">
                    <p className="text-xl font-medium">{textContent.error.title}</p>
                    <p className="w-full text-center text-sm text-cool-gray-40">{textContent.error.description}</p>
                    <button
                      type="button"
                      className="-bottom-14 z-10 flex h-10 w-full flex-row items-center justify-center space-x-2 rounded-lg bg-blue-10 px-5 text-primary transition duration-150 ease-out active:scale-98"
                      onClick={() => {
                        handleRestartProcess();
                      }}
                    >
                      <p>{textContent.close}</p>
                    </button>
                  </div>
                </Transition>
              </div>
            )}
          </div>
        </div>
        <div id="incontent_1" className="flex w-full max-w-[1000px] justify-center"></div>
      </div>
      <div className="hidden flex-col  items-center justify-center lg:flex lg:px-10 ">
        <Image
          src={getImage(`/banners/Ban_Internext_160x600_en.jpg`)}
          alt="BitDefender Vertical Banner"
          width={180}
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
