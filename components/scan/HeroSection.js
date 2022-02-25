/* eslint-disable no-console */
import React, { useState } from 'react';

const HeroSection = ({
  textContent
}) => {
  const [dragEnter, setDragEnter] = useState(false);
  // const [dragOver, setDragOver] = useState(false);
  const isDragging = dragEnter;

  const handleDragEnter = () => {
    if (!dragEnter) {
      setDragEnter(true);
      console.log('Drag enter');
    }
  };

  // const handleDragOver = () => {
  //   if (!dragOver) {
  //     setDragOver(true);
  //     console.log('Drag over');
  //   }
  // };

  const handleDragExit = () => {
    // setDragOver(false);
    setDragEnter(false);
    console.log('Drag exit');
  };

  const handleDrop = () => {
    console.log('Drop');
  };

  // const scanFile = (file) => {
  //   const form = new FormData();
  //   console.log(file);
  //   form.append('file', file);

  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'x-apikey': '9bcaac2fa88a6abb2bd3986bb64f73365f18b38e40a06035474ce9ac0417a291',
  //       'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001'
  //     }
  //   };
  //   options.body = form;

  //   fetch('https://www.virustotal.com/api/v3/files', options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // };

  // const uploadFile = () => {
  //   const file = document.querySelector('input[type=file]').files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', () => {
  //     // convierte la imagen a una cadena en base64
  //     const blob = new File([reader.result], file.name, { ...file, type: file.type });
  //     console.log(blob);
  //     // file.body = reader.result;
  //     scanFile(blob);
  //   }, false);

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <section
      className="bg-white py-36 space-y-10"
      onDragEnter={(e) => { e.stopPropagation(); e.preventDefault(); handleDragEnter(); }}
      // onDragOver={(e) => { e.stopPropagation(); e.preventDefault(); handleDragOver(); }}
      onDragLeave={(e) => { e.stopPropagation(); e.preventDefault(); handleDragExit(); }}
      onDrop={(e) => { e.stopPropagation(); e.preventDefault(); handleDrop(); }}
    >

      <div className={`flex flex-col lg:flex-row lg:space-x-32 px-4 lg:p-16 mx-auto max-w-screen-xl ${isDragging && 'pointer-events-none'}`}>
        {/* Title and subtitle */}
        <div className="flex flex-col flex-shrink-0 space-y-5 items-center lg:items-start text-center lg:text-left mb-20 lg:mb-0 pt-10">
          <h1 className="text-7xl">
            {textContent.title.line1}
            <br />
            {textContent.title.line2}
          </h1>

          <h2 className="text-xl text-cool-gray-60">
            {textContent.subtitle1.line1}
            <br className="hidden lg:flex" />
            {textContent.subtitle1.line2}
            <br className="hidden lg:flex" />
            {textContent.subtitle1.line3}
          </h2>

          <h2 className="text-xl text-cool-gray-60">
            {textContent.subtitle2.line1}
            <br className="hidden lg:flex" />
            {textContent.subtitle2.line2}
          </h2>
        </div>

        <div className="flex flex-col w-full h-96">

          {isDragging ? (
            <>
              <div className="flex flex-col items-center justify-center w-full h-96 rounded-3xl bg-blue-10 border-2 border-blue-60 border-dashed ring-5 ring-blue-10">
                <p className="text-5xl text-blue-60">{textContent.dropHere}</p>
              </div>
            </>
          ) : (
            <>
              {/* NOT DRAGGING -- Default state */}
              <div className="group flex flex-col items-center justify-center w-full h-96 rounded-3xl bg-blue-10 bg-opacity-20 border-2 border-blue-60 ring-5 ring-blue-10 cursor-pointer">

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
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <p className="text-2xl font-medium">
                      {textContent.dropFile.line1}
                      <br />
                      {textContent.dropFile.line2}
                    </p>
                    <p className="text-cool-gray-40">{textContent.or}</p>
                    <button className="flex flex-row items-center h-11 px-6 rounded-lg bg-blue-10 group-hover:bg-blue-60 text-blue-60 group-hover:text-white font-medium transform active:scale-98 transition duration-150 ease-out" type="button">
                      {textContent.selectFile}
                    </button>
                  </div>
                </div>

              </div>
            </>
          )}

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
