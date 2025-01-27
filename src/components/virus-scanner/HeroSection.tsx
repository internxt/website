import { useState, Fragment, createRef } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircle, WarningCircle } from '@phosphor-icons/react';
import Image from 'next/legacy/image';
import Header from '../shared/Header';

const FILE_SCANNER_URL = process.env.NEXT_PUBLIC_FILE_SCANNER_URL;

const HeroSection = ({ textContent }) => {
  const [isSelectedFile, setIsSelectedFile] = useState(false);
  const [isScannig, setIsScannig] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isScanFinished, setIsScanFinished] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);
  const [dragEnter, setDragEnter] = useState(false);
  const [fileSizeLimitReached, setFileSizeLimitReached] = useState(false);
  const uploadFileRef = createRef<HTMLInputElement>();
  const [file, setFile] = useState<File | null>(null);
  const isDragging = dragEnter;
  const maxFileSize = 1_000_000_000;

  const handleDragEnter = () => {
    if (!dragEnter && !isScannig && !isScanFinished) {
      setDragEnter(true);
      setIsSelectedFile(false);
    }
  };

  const handleDragExit = () => {
    setDragEnter(false);
  };

  const scanFiles = () => {
    setScanResult(null);
    const fileInput = uploadFileRef.current;
    const formdata = new FormData();
    formdata.append('', (fileInput as any).files[0], 'test.txt');

    const requestOptions = {
      method: 'POST',
      body: formdata,
    };

    fetch(`https://clamav.internxt.com/filescan`, requestOptions)
      .then(async (res) => {
        if (res.status === 200) {
          const data = await res.json();

          setScanResult(data);
          setIsScanFinished(true);
        } else {
          setIsError(true);
          setIsSelectedFile(false);
          setIsScannig(false);
          setIsScanFinished(false);
        }
      })
      .catch(() => {
        setIsError(true);
        setIsSelectedFile(false);
        setIsScannig(false);
        setIsScanFinished(false);
      });
  };

  const handleRestartScan = () => {
    setScanResult(null);
    setIsSelectedFile(false);
    setIsScannig(false);
    setIsScanFinished(false);
    setIsError(false);
    setFile(null);
  };

  const handleCancelScan = () => {
    setIsSelectedFile(false);
  };

  const handleConfirmScan = () => {
    setIsScannig(true);
    scanFiles();
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
      console.error('No files to scan');
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
    if (!isScannig && fileInput) {
      fileInput.files = e.dataTransfer.files;
      handleFiles();
    }
  };

  const scanAgainButton = (onlyOneVirus) => {
    return (
      <Transition
        as={Fragment}
        show={!isError && isScanFinished}
        enter="transition duration-200 ease-in-out"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
      >
        <div className="flex w-full flex-row justify-center pt-6">
          <button
            type="button"
            className={`group -bottom-16 z-10 flex h-12 flex-row items-center justify-center space-x-2 rounded-lg border border-gray-10 px-6 text-lg transition duration-150 ease-out active:scale-98 sm:-bottom-14 sm:h-10 sm:px-5 sm:text-base ${
              onlyOneVirus ? 'bg-primary text-white' : 'bg-white text-black'
            }`}
            onClick={() => {
              handleRestartScan();
            }}
          >
            <p className="text-base font-medium">{textContent.scanAgain}</p>
          </button>
        </div>
      </Transition>
    );
  };

  return (
    <section
      className="relative pb-20 pt-32"
      onDragEnter={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleDragEnter();
      }}
    >
      <label className="pointer-events-none absolute h-0 w-0 overflow-hidden">
        <input type="file" id="uploadFile" ref={uploadFileRef} tabIndex={-1} onChange={() => handleFileInput()} />
      </label>

      <div
        className={`fixed inset-0 z-50 ${isScannig || !isDragging ? 'pointer-events-none' : ''}`}
        onDragLeave={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleDragExit();
        }}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => e.preventDefault()}
      />
      <div className="mx-4 flex flex-col items-center space-y-16 lg:mx-10 xl:mx-32">
        <div
          className={`z-20 mx-auto flex w-full max-w-screen-xl flex-col items-center justify-between lg:flex-row lg:items-stretch ${
            !isScannig && isDragging ? 'pointer-events-none' : ''
          }`}
          onDrop={(e) => e.preventDefault()}
          onDragOver={(e) => e.preventDefault()}
        >
          {/* Title and subtitle */}
          <div className="mb-10 flex flex-col items-center space-y-5 lg:mb-0 lg:items-start lg:justify-between lg:text-left">
            <div className="flex w-full flex-col items-center space-y-5 text-center lg:w-[316px] lg:items-start lg:text-left">
              <Header isToolsPage>{textContent.title}</Header>
              <h2 className="text-xl font-semibold text-cool-gray-80">
                {textContent.subtitle1}
                <br />
              </h2>
              <p className=" text-xl font-normal text-cool-gray-80">{textContent.subtitle2}</p>
            </div>
          </div>

          {/* Scan container (drop area & scan information) */}
          <div className="flex h-full w-full max-w-2xl rounded-2xl border-4 border-primary border-opacity-6 bg-primary bg-opacity-3">
            {isSelectedFile ? (
              <>
                {isScannig ? (
                  <>
                    {/* Scan process */}
                    <div className="relative flex w-full flex-col items-start justify-start overflow-hidden rounded-xl sm:h-96">
                      <div className="flex h-16 w-full flex-shrink-0 flex-row items-center justify-between bg-primary bg-opacity-6 px-5">
                        {isScanFinished ? (
                          <div className="flex flex-row items-center space-x-1.5">
                            {scanResult?.isInfected ? (
                              <div className="flex flex-row gap-2">
                                <WarningCircle weight="fill" size={24} className="text-red" />
                                <span
                                  className={`text-lg font-semibold text-red
                              `}
                                >
                                  {textContent.table.virusDetected}
                                </span>
                              </div>
                            ) : (
                              <div className="flex flex-row gap-2">
                                <CheckCircle weight="fill" size={24} className="text-green" />
                                <span className={`text-lg font-semibold text-green-dark`}>
                                  {textContent.table.noVirusDetected}
                                </span>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div></div>
                        )}

                        <div className="hidden w-1/2 flex-col items-end sm:flex">
                          <p className="max-w-xs truncate text-base font-medium text-cool-gray-80">{file?.name}</p>
                          <p className="text-sm text-cool-gray-60">{file?.type}</p>
                        </div>
                      </div>

                      {isScanFinished ? (
                        <>
                          {scanResult.isInfected ? (
                            <div className="flex h-full w-full flex-col items-center justify-center">
                              <p className="text-2xl font-semibold">Virus identified:</p>
                              <div className="flex max-w-xl flex-row space-x-1 text-center">
                                {scanResult.viruses
                                  ? scanResult.viruses.map((virus) => (
                                      <p key={virus} className="text-lg font-semibold text-gray-50">
                                        {virus};
                                      </p>
                                    ))
                                  : null}
                              </div>
                              {scanResult.viruses.length > 1 ? scanAgainButton(false) : scanAgainButton(true)}
                            </div>
                          ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-opacity-3 px-5 py-5 text-center text-gray-80">
                              {/* CTA */}
                              <div className="flex flex-col items-center justify-center rounded-xl border-4 border-blue-20  bg-primary bg-opacity-6">
                                <div className="flex flex-col items-center justify-center rounded-xl border border-primary p-4">
                                  <div className="flex max-w-[427px] flex-col items-center justify-center space-y-5">
                                    <div className="flex flex-col space-y-2">
                                      <span className="text-xl font-medium">
                                        {textContent.table.noVirusesDetected.title}
                                      </span>
                                      <span>{textContent.table.noVirusesDetected.subtitle}</span>
                                    </div>

                                    <a href="https://internxt.com/pricing" target="_top" className="button-primary">
                                      {textContent.table.noVirusesDetected.cta}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {scanAgainButton(false)}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center space-y-4 bg-opacity-3">
                          <div className="relative">
                            <div className="absolute inset-1">
                              <div className="animate-pingpong-v absolute left-0 z-10 h-1 w-full -translate-y-1/2 rounded-xl bg-primary shadow-2xl" />
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
                          <p className="text-2xl font-semibold">{textContent.table.analyzing}</p>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    {fileSizeLimitReached ? (
                      <>
                        {/* File size limit reached */}
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
                                  handleCancelScan();
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
                        {/* Scan confirmation */}
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
                                    handleCancelScan();
                                  }}
                                >
                                  {textContent.cancel}
                                </button>

                                <button
                                  type="button"
                                  className="flex h-12 flex-row items-center rounded-lg bg-primary px-6 text-lg font-medium text-white transition duration-150 ease-out active:scale-98 sm:h-10 sm:px-5 sm:text-base"
                                  onClick={() => {
                                    handleConfirmScan();
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
                className={`flex h-60 w-full flex-col sm:h-96 ${!isScannig && isDragging && 'pointer-events-none'}`}
              >
                {isDragging ? (
                  <>
                    {/* Drop file here */}
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
                    {/* Default state */}
                    <div className=" flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl">
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
                    handleRestartScan();
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
                        handleRestartScan();
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
    </section>
  );
};

export default HeroSection;
