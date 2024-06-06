import Link from 'next/link';
import Header from '../shared/Header';

export const ComparisonHeader = ({ textContent, redirectUrl }) => (
  <div className="relative z-20 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-primary-dark px-6 py-16 pt-[130px] text-white">
    <div className="relative z-10 mb-16 flex flex-col items-center justify-center space-y-4 md:mb-8">
      <Header className="text-center text-white">
        {textContent.title.line1}
        <br className="hidden sm:inline-flex" /> {textContent.title.line2}
      </Header>

      <h2 className="max-w-3xl text-center text-xl">{textContent.description}</h2>
      {textContent.useCode ? <p className="text-center text-xl font-bold">{textContent.useCode}</p> : undefined}
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center">
      <Link
        href={redirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="get-started-link"
        className="flex w-full items-center justify-center rounded-lg border border-transparent bg-white px-6 py-2 text-lg font-medium text-primary hover:bg-blue-10 focus:outline-none sm:inline-flex sm:w-auto"
      >
        {textContent.cta}
      </Link>
    </div>

    <div className="absolute top-2/3 left-0 h-full w-full scale-y-200 rounded-t-full-percentage bg-primary-dark blur-3xl filter" />
  </div>
);
