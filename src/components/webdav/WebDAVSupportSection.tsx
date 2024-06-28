import ReactMarkdown from 'react-markdown';
import RenderDescription from '../shared/RenderDescription';
import SignUpBanner from '../banners/SignUpBanner';

export const WebDAVSupportSection = ({ textContent }) => {
  const bannerLang = require('../../assets/lang/en/banners.json');

  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="flex flex-col items-center gap-12">
        <h2 className="max-w-[749px] text-center text-5xl font-semibold text-gray-100">{textContent.title}</h2>
        <div className="flex w-full max-w-[672px] flex-col gap-12">
          <RenderDescription description={textContent.description} />

          {/* Steps */}
          <div className="flex flex-col gap-6 md:gap-3">
            <p className="text-center text-2xl font-semibold text-gray-100 md:text-left">
              {textContent.howToInstall.title}
            </p>
            <div className="flex flex-col gap-3">
              {textContent.howToInstall.steps.map((steps) => (
                <div className="flex flex-row items-start gap-3 md:items-center">
                  <div className="flex whitespace-nowrap rounded-lg bg-gray-5 px-4 py-2">
                    <p className="text-lg font-semibold text-gray-80">{steps.step}</p>
                  </div>
                  <ReactMarkdown className="markdown text-lg text-gray-80">{steps.description}</ReactMarkdown>
                </div>
              ))}
            </div>
          </div>

          {/* Why use CLI + WebDAV */}
          <div className="flex flex-col gap-3">
            <p className="text-center text-2xl font-medium text-gray-100 md:text-left">{textContent.whyUseCLI.title}</p>
            <RenderDescription description={textContent.whyUseCLI.description} />
          </div>
        </div>
        <SignUpBanner textContent={bannerLang.SignUpWebDAVBanner} lang="en" />
      </div>
    </section>
  );
};
