import Card from './components/Card';
import DownloadCard from './components/DownloadCard';

const WhatWeDo = ({ textContent, downloadCardImgUrl, downloadCardImgAlt, imageCardURL, imageCardAlt, bookUrl }) => {
  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center py-20 px-5">
        <div className="flex flex-col items-center justify-center space-y-9">
          <div className="flex max-w-[774px] flex-col items-center justify-center space-y-4 text-center">
            <p className="max-w-[500px] text-5xl font-semibold text-gray-100">{textContent.title}</p>
            <p className="text-2xl font-medium text-gray-100">{textContent.subtitle}</p>
            <div className="flex flex-col space-y-5">
              {textContent.firstParagraph.map((item) => {
                return (
                  <div key={item} className="flex flex-col text-left">
                    <p className="text-lg text-gray-80">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <DownloadCard
            imageUrl={downloadCardImgUrl}
            imageAlt={downloadCardImgAlt}
            textContent={textContent.downloadCard}
            bookUrl={bookUrl}
          />
          <div className="flex max-w-[774px] flex-col space-y-5">
            {textContent.secondParagraph.map((item) => {
              return (
                <div key={item} className="flex flex-col text-left">
                  <p className="text-lg text-gray-80">{item}</p>
                </div>
              );
            })}
          </div>
          <Card imageAlt={imageCardAlt} imageUrl={imageCardURL} textContent={textContent.card} />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
