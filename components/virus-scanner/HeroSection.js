/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import {
  UilRedo,
  UilExclamationOctagon,
  UilCheckCircle
} from '@iconscout/react-unicons';

const HeroSection = ({
  textContent
}) => {
  const [isSelectedFile, setIsSelectedFile] = useState(false);
  const [isScannig, setIsScannig] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isScanFinished, setIsScanFinished] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [dragEnter, setDragEnter] = useState(false);
  const [fileSizeLimitReached, setFileSizeLimitReached] = useState(false);
  const [file, setFile] = useState({});
  const isDragging = dragEnter;
  const maxFileSize = 1_000_000_000;

  const handleDragEnter = () => {
    if (!dragEnter && (!isScannig || !isScanFinished)) {
      setDragEnter(true);
      setIsSelectedFile(false);
    }
  };

  const handleDragExit = () => {
    setDragEnter(false);
  };

  const scanFiles = () => {
    setScanResult(null);
    const fileInput = document.querySelector('#uploadFile');
    const formdata = new FormData();
    formdata.append('', fileInput.files[0], 'test.txt');

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch('https://clamav.internxt.com/filescan', requestOptions)
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
      .catch((error) => {
        console.error('error', error);
      });
  };

  const handleRestartScan = () => {
    setScanResult(null);
    setIsSelectedFile(false);
    setIsScannig(false);
    setIsScanFinished(false);
    setIsError(false);
    setFile({});
  };

  const handleCancelScan = () => {
    setIsSelectedFile(false);
  };

  const handleConfirmScan = () => {
    setIsScannig(true);
    scanFiles();
  };

  const handleFiles = () => {
    const fileInput = document.querySelector('#uploadFile');
    if (fileInput.files) {
      setDragEnter(false);
      setFileSizeLimitReached(false);
      setIsSelectedFile(true);
      if (fileInput.files[0].size >= maxFileSize) {
        setFileSizeLimitReached(true);
      } else {
        setFile(fileInput.files[0]);
      }
    } else {
      console.error('No files to scan');
    }
  };

  const handleFileInput = () => {
    const fileInput = document.querySelector('#uploadFile');
    if (fileInput.files) {
      handleFiles();
    }
  };

  const handleOpenFileExplorer = () => {
    document.querySelector('input[type=file]').click();
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    if (!isScannig) {
      document.querySelector('#uploadFile').files = e.dataTransfer.files;
      handleFiles();
    }
  };

  return (
    <section
      className="relative bg-white py-20"
      onDragEnter={(e) => { e.stopPropagation(); e.preventDefault(); handleDragEnter(); }}
    >
      <label htmlFor="uploadFile" className="absolute pointer-events-none w-0 h-0 overflow-hidden">
        <input
          type="file"
          id="uploadFile"
          tabIndex={-1}
          onChange={() => handleFileInput()}
        />
      </label>

      <div
        className={`fixed inset-0 z-50 ${(isScannig || !isDragging) ? 'pointer-events-none' : ''}`}
        onDragLeave={(e) => { e.stopPropagation(); e.preventDefault(); handleDragExit(); }}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => e.preventDefault()}
      />

      <div
        className={`relative flex flex-col lg:flex-row lg:space-x-32 px-6 lg:p-16 w-full mx-auto max-w-screen-xl z-20 ${(!isScannig && isDragging) ? 'pointer-events-none' : ''}`}
        onDrop={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
      >
        {/* Title and subtitle */}
        <div className="flex flex-col flex-shrink-0 space-y-5 items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0 pt-8 sm:pt-2">
          <h1 className="text-4xl lg:text-7xl font-medium lg:font-normal tracking-tighter">
            {textContent.title.line1}
            {' '}
            <br className="hidden lg:flex" />
            {textContent.title.line2}
          </h1>

          <div className="flex flex-col lg:space-y-5">
            <h2 className="text-lg text-cool-gray-60">
              {textContent.subtitle1.line1}
              {' '}
              <br className="hidden lg:flex" />
              {textContent.subtitle1.line2}
              {' '}
              <br className="hidden lg:flex" />
              {textContent.subtitle1.line3}
              {' '}
              <div className="hidden lg:flex h-3" />
              {textContent.subtitle2.line1}
              {' '}
              <br className="hidden lg:flex" />
              {textContent.subtitle2.line2}
              {' '}
              <br className="hidden lg:flex" />
              {textContent.subtitle2.line3}
              {' '}
              <br className="hidden lg:flex" />
              {textContent.subtitle2.line4}
            </h2>

          </div>
        </div>

        <div className="relative w-full">
          {/* Scan container (drop area & scan information) */}
          {isSelectedFile ? (
            <>
              {isScannig ? (
                <>
                  {/* Scan process */}
                  <div className="relative flex flex-col items-start justify-start w-full h-80 sm:h-96 rounded-xl bg-white border border-cool-gray-20 overflow-hidden shadow-subtle">

                    <div className="flex flex-row items-center justify-between flex-shrink-0 w-full h-16 bg-cool-gray-10 border-b border-cool-gray-20 px-5">
                      {isScanFinished ? (
                        <div className="flex flex-row items-end space-x-1.5">
                          <span className={`text-3xl font-semibold ${scanResult.isInfected && 'text-red-60'}`}>
                            {scanResult && (scanResult.isInfected ? scanResult.viruses.length : '0')}
                          </span>
                          <span className="text-lg text-cool-gray-60">{textContent.table.virusDetected}</span>
                        </div>
                      ) : (
                        <div>{textContent.table.loading}</div>
                      )}

                      <div className="hidden sm:flex flex-col items-end w-1/2">
                        <p className="text-base text-cool-gray-80 font-medium max-w-xs truncate">{file.name}</p>
                        <p className="text-sm text-cool-gray-60">{file.type}</p>
                      </div>
                    </div>

                    {isScanFinished ? (
                      <>
                        {scanResult && scanResult.isInfected ? (
                          <>
                            <div className="flex flex-row items-center justify-between flex-shrink-0 w-full h-8 bg-cool-gray-5 border-b border-cool-gray-20 px-5 text-cool-gray-40 text-sm">
                              <div className="w-52">
                                {textContent.table.detection}
                              </div>
                              <div className="flex-1">
                                {textContent.table.name}
                              </div>
                            </div>

                            <div className="flex flex-col w-full divide-y divide-cool-gray-10 overflow-auto">

                              {/* Virus list */}
                              {scanResult.viruses && scanResult.viruses.map((virus) => (
                                <div className="flex flex-row items-center justify-start flex-shrink-0 h-12 px-5 hover:bg-cool-gray-5">
                                  <div className="flex flex-row items-center w-52 text-red-60 space-x-1.5">
                                    <UilExclamationOctagon className="w-5 h-5" />
                                    <span>{textContent.table.detected}</span>
                                  </div>
                                  <div className="flex-1 font-medium">
                                    {virus}
                                  </div>
                                </div>
                              ))}

                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex flex-col items-center justify-center w-full h-full bg-green-10 bg-opacity-65 space-y-5">
                              <UilCheckCircle className="w-8 h-8 text-green-50" />
                              <span className="text-xl text-green-70 text-center">
                                {textContent.table.noVirusesDetected}
                              </span>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
                          <div className="relative">
                            <div className="absolute inset-1">
                              <div className="absolute left-0 w-full h-1 rounded bg-blue-60 shadow-2xl transform -translate-y-1/2 animate-pingpong-v z-10" />
                            </div>
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="filter drop-shadow-soft">
                              <g clipPath="url(#clip0_1573_1124)">
                                <path d="M10 3.75C10 1.67893 11.6789 0 13.75 0H40.4053C43.3714 0 46.2409 1.05475 48.5009 2.97576L65.5956 17.5063C68.3897 19.8813 70 23.3634 70 27.0305V76.25C70 78.3211 68.3211 80 66.25 80H13.75C11.6789 80 10 78.3211 10 76.25V3.75Z" fill="#FCFCFD" />
                                <path d="M66.25 79.5H13.75C11.9551 79.5 10.5 78.0449 10.5 76.25V3.75C10.5 1.95507 11.9551 0.5 13.75 0.5H40.4053C43.2528 0.5 46.0075 1.51256 48.1771 3.35673L65.2718 17.8872C67.9541 20.1672 69.5 23.5101 69.5 27.0305V76.25C69.5 78.0449 68.0449 79.5 66.25 79.5Z" stroke="#DDE1E6" />
                                <path d="M43.3336 1.53303C42.9225 1.09458 42.3683 0.702914 41.75 0.558744V0.512885C43.8731 0.622393 45.9067 1.42689 47.5335 2.80969L65.8665 18.3927C68.0442 20.2438 69.3503 22.91 69.4879 25.75H69.4413C69.2971 25.1318 68.9054 24.5775 68.467 24.1665C67.9178 23.6516 67.1762 23.25 66.5 23.25H47.5C45.7051 23.25 44.25 21.7949 44.25 20V3.5C44.25 2.82384 43.8484 2.08225 43.3336 1.53303Z" fill="#F2F4F8" stroke="#DDE1E6" />
                                <path d="M13.75 80H66.25C68.3211 80 70 78.3211 70 76.25V73.75C70 75.8211 68.3211 77.5 66.25 77.5H13.75C11.6789 77.5 10 75.8211 10 73.75V76.25C10 78.3211 11.6789 80 13.75 80Z" fill="#DDE1E6" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1573_1124">
                                  <rect width="80" height="80" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <p>{textContent.table.analyzing}</p>
                        </div>
                      </>
                    )}

                  </div>
                </>
              ) : (
                <>
                  {fileSizeLimitReached ? (
                    <>
                      {/* File size limit reached */}
                      <div className="flex flex-col items-center justify-center w-full h-60 sm:h-96 rounded-3xl bg-blue-10 bg-opacity-20 border-2 border-blue-60 ring-5 ring-blue-10">

                        <Transition
                          as="div"
                          show={isSelectedFile}
                          enter="transform transition duration-200 ease-out"
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
                              className="flex flex-row items-center h-10 px-5 rounded-lg bg-blue-10 text-blue-60 font-medium transform active:scale-98 transition duration-150 ease-out"
                              onClick={() => { handleCancelScan(); }}
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
                      <div className="flex flex-col items-stretch justify-center w-full h-60 sm:h-96 rounded-3xl bg-blue-10 bg-opacity-20 border-2 border-blue-60 ring-5 ring-blue-10">

                        <Transition
                          as="div"
                          show={isSelectedFile}
                          enter="transform transition duration-200 ease-out"
                          enterFrom="opacity-0 translate-y-2"
                          enterTo="opacity-100 translate-y-0"
                        >
                          <div className="flex flex-col items-center w-full space-y-6">
                            <div className="flex flex-col flex-shrink items-center w-full overflow-hidden">
                              <p className="text-2xl font-medium px-4 text-center">{textContent.fileSelected}</p>
                              <p className="text-xl text-center w-full lg:w-auto lg:max-w-md xl:max-w-xl truncate text-cool-gray-60 px-10">
                                {file.name}
                              </p>
                            </div>

                            <div className="flex flex-row items-center justify-center space-x-4">
                              <button
                                type="button"
                                className="flex flex-row items-center h-12 sm:h-10 px-6 sm:px-5 text-lg sm:text-base rounded-lg bg-blue-10 text-blue-60 font-medium transform active:scale-98 transition duration-150 ease-out"
                                onClick={() => { handleCancelScan(); }}
                              >
                                {textContent.cancel}
                              </button>

                              <button
                                type="button"
                                className="flex flex-row items-center h-12 sm:h-10 px-6 sm:px-5 text-lg sm:text-base rounded-lg bg-blue-60 text-white font-medium transform active:scale-98 transition duration-150 ease-out"
                                onClick={() => { handleConfirmScan(); }}
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
            <>
              <label
                htmlFor="uploadFile"
                className={`flex flex-col w-full h-60 sm:h-96 ${!isScannig && (isDragging && 'pointer-events-none')}`}
              >
                {isDragging ? (
                  <>
                    {/* Drop file here */}
                    <div className="flex flex-col items-center justify-center w-full h-60 sm:h-96 rounded-3xl bg-blue-10 border-2 border-blue-60 border-dashed ring-5 ring-blue-10">
                      <p className="text-2xl sm:text-5xl text-blue-60 font-medium">{textContent.dropHere}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default state */}
                    <div className="group flex flex-col items-center justify-center w-full h-60 sm:h-96 rounded-3xl bg-blue-10 bg-opacity-20 border-2 border-blue-60 ring-5 ring-blue-10 cursor-pointer">
                      <div className="flex flex-row items-center sm:space-x-20 lg:space-x-0 xl:space-x-20">
                        {/* Icons */}
                        <div className="relative w-32 h-32 hidden sm:flex lg:hidden xl:flex">
                          <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-2.5 left-7 transform rotate-10 filter drop-shadow-soft">
                            <path d="M0 6C0 2.68629 2.68629 0 6 0L122 0C125.314 0 128 2.68629 128 6V122C128 125.314 125.314 128 122 128H6C2.68629 128 0 125.314 0 122L0 6Z" fill="#FCFCFD" />
                            <path d="M83.0323 70.2095C83.5224 69.597 84.4587 69.6116 84.9294 70.2391L97.56 87.08C98.1533 87.8711 97.5888 89 96.6 89H31.7127C30.6709 89 30.124 87.7636 30.8247 86.9928L53.1534 62.4312C53.6143 61.9242 54.4054 61.9054 54.8899 62.3899L73.052 80.5519C73.5577 81.0576 74.3907 81.0115 74.8375 80.453L83.0323 70.2095Z" fill="#7A869A" />
                            <path d="M86.5 49C86.5 54.5228 82.0228 59 76.5 59C70.9771 59 66.5 54.5228 66.5 49C66.5 43.4772 70.9771 39 76.5 39C82.0228 39 86.5 43.4772 86.5 49Z" fill="#7A869A" />
                            <path d="M6 0.8L122 0.8C124.872 0.8 127.2 3.12812 127.2 6V122C127.2 124.872 124.872 127.2 122 127.2H6C3.12812 127.2 0.8 124.872 0.8 122L0.8 6C0.8 3.12812 3.12812 0.8 6 0.8Z" stroke="#EBECF0" strokeWidth="1.6" />
                            <path d="M6 128H122C125.314 128 128 125.314 128 122V118C128 121.314 125.314 124 122 124H6C2.68629 124 0 121.314 0 118L0 122C0 125.314 2.68629 128 6 128Z" fill="#EBECF0" />
                          </svg>
                          <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0.5 -left-7 transform rotate-10- filter drop-shadow-soft">
                            <g filter="url(#filter0_i_1551_1125)">
                              <path d="M16 5.99991C16 2.6862 18.6863 -9.15527e-05 22 -9.15527e-05L106 -9.15527e-05C109.314 -9.15527e-05 112 2.6862 112 5.99991V122C112 125.314 109.314 128 106 128H22C18.6863 128 16 125.314 16 122L16 5.99991Z" fill="#FCFCFD" />
                            </g>
                            <path d="M16 5.99991C16 2.6862 18.6863 -9.15527e-05 22 -9.15527e-05L106 -9.15527e-05C109.314 -9.15527e-05 112 2.6862 112 5.99991V122C112 125.314 109.314 128 106 128H22C18.6863 128 16 125.314 16 122L16 5.99991Z" fill="#FCFCFD" />
                            <path d="M22 0.799908L106 0.799908C108.872 0.799908 111.2 3.12803 111.2 5.99991V122C111.2 124.872 108.872 127.2 106 127.2H22C19.1281 127.2 16.8 124.872 16.8 122L16.8 5.99991C16.8 3.12803 19.1281 0.799908 22 0.799908Z" stroke="#DDE1E6" strokeWidth="1.6" />
                            <path d="M22 128H106C109.314 128 112 125.314 112 122V118C112 121.314 109.314 124 106 124H22C18.6863 124 16 121.314 16 118V122C16 125.314 18.6863 128 22 128Z" fill="#DDE1E6" />
                            <path d="M38.095 52.5999V74.9999H42.767V65.8479H47.119C51.887 65.8479 54.255 63.2239 54.255 59.2879C54.255 55.4159 51.887 52.5999 47.119 52.5999H38.095ZM42.767 61.9759V56.7279H46.447C48.367 56.7279 49.615 57.3999 49.615 59.3519C49.615 61.3039 48.367 61.9759 46.447 61.9759H42.767ZM63.1423 74.9999C71.5903 74.9999 74.9183 69.9759 74.9183 63.7999C74.9183 57.6239 71.5903 52.5999 63.1423 52.5999H56.2623V74.9999H63.1423ZM60.9343 56.7279H62.9183C68.0703 56.7279 70.1183 59.7999 70.1183 63.7999C70.1183 67.7999 68.0703 70.8719 62.9183 70.8719H60.9343V56.7279ZM91.2 52.5999H77.44V74.9999H82.112V65.6559H89.952V61.5279H82.112V56.7279H91.2V52.5999Z" fill="#F63831" />
                            <defs>
                              <filter id="filter0_i_1551_1125" x="16" y="-9.15527e-05" width="96" height="128" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-4" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1551_1125" />
                              </filter>
                            </defs>
                          </svg>
                          <div className="absolute flex flex-row items-center -bottom-14 left-1/2 h-8 px-4 rounded-full transform -translate-x-1/2 text-sm text-cool-gray-40 bg-cool-gray-10 whitespace-nowrap">{textContent.maxFileSize.description}</div>
                        </div>

                        <div className="flex flex-col items-center space-y-2">
                          <p className="text-2xl font-medium">
                            {textContent.dropFile.line1}
                            <br />
                            {textContent.dropFile.line2}
                          </p>
                          <p className="text-cool-gray-40">{textContent.or}</p>
                          <button
                            type="button"
                            className="flex flex-row items-center h-12 sm:h-10 px-6 sm:px-5 text-lg sm:text-base rounded-lg bg-blue-10 group-hover:bg-blue-60 focus-visible:bg-blue-60 text-blue-60 group-hover:text-white focus-visible:text-white font-medium transform active:scale-98 transition duration-150 ease-out"
                            onClick={() => { handleOpenFileExplorer(); }}
                          >
                            {textContent.selectFile}
                          </button>
                        </div>
                      </div>

                    </div>
                  </>
                )}
              </label>
            </>
          )}

          <Transition
            as={Fragment}
            show={(!isError && isScanFinished)}
            enter="transform transition duration-200 ease-in-out"
            enterFrom="opacity-0 translate-y-2"
            enterTo="opacity-100 translate-y-0"
          >
            <div className="absolute flex flex-row justify-center w-full">
              <button
                type="button"
                className="absolute group flex flex-row items-center justify-center -bottom-16 sm:-bottom-14 h-12 sm:h-10 px-6 sm:px-5 text-lg sm:text-base bg-blue-10 text-blue-60 rounded-lg space-x-2 transform active:scale-98 transition duration-150 ease-out z-10"
                onClick={() => { handleRestartScan(); }}
              >
                <UilRedo className="w-5 sm:w-4 h-5 sm:h-4 transform group-hover:rotate-full transition duration-0 group-hover:duration-500 ease-out" />
                <p>{textContent.scanAgain}</p>
              </button>
            </div>
          </Transition>

          {isError && (
            <>
              <div className="absolute inset-0 flex flex-row justify-center items-center w-full h-full bg-white bg-opacity-75 rounded-3xl z-50 overflow-hidden">
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 cursor-pointer"
                  onClick={() => { handleRestartScan(); }}
                />
                <Transition
                  as={Fragment}
                  show={isError}
                  enter="transform transition duration-200 ease-in-out"
                  enterFrom="opacity-0 translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                >
                  <div className="realtive flex flex-col justify-center items-center w-80 p-5 bg-white rounded-xl space-y-4 z-10 shadow-subtle-hard">
                    <p className="text-xl font-medium">{textContent.error.title}</p>
                    <p className="text-sm text-cool-gray-40 w-full text-center">{textContent.error.description}</p>
                    <button
                      type="button"
                      className="flex flex-row items-center justify-center -bottom-14 h-10 w-full px-5 bg-blue-10 text-blue-60 rounded-lg space-x-2 transform active:scale-98 transition duration-150 ease-out z-10"
                      onClick={() => { handleRestartScan(); }}
                    >
                      <p>{textContent.close}</p>
                    </button>
                  </div>
                </Transition>
              </div>
            </>
          )}

        </div>

      </div>

    </section>
  );
};

export default HeroSection;
