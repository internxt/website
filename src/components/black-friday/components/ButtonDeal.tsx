import React from 'react';

const ButtonDeal = ({ lang }) => {
  const translations = {
    en: "Choose a plan",
    es: "Elige un plan",
    ru: "Выбрать план",
    fr: "Choisissez un plan",
    de: "Wählen Sie einen Plan",
    it: "Scegli un piano",
    zh: "选择一个计划",
    "zh-tw": "選擇一個計劃"
  };
  const selectedText = translations[lang] || translations.en;
  return (
    <>
      <button
        className="relative flex flex-row items-center justify-center rounded-lg bg-primary py-3 px-6 text-base text-white transition duration-100 focus:outline-none focus-visible:bg-primary-dark active:bg-primary-dark sm:text-lg"
        onClick={() => {
          window.location.href = '/pricing';
        }}
      >
       {selectedText}

      </button>
    </>
  );
};

export default ButtonDeal;
