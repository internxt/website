import Link from 'next/link';
import Header from '../shared/Header';

interface ComparisonHeaderProps {
  textContent: any;
  redirectUrl: string;
  maxWithForTitle?: string;
}

const CodeComponent = ({ textContent }) => (
  <div className="flex flex-col items-center gap-2 text-center text-xl font-bold md:flex-row">
    <div className="flex flex-row items-center gap-2 md:flex-row">
      <p>{textContent.line1}</p>
      <p className="rounded-full border-2 border-white px-2 py-1 text-base md:text-xl">{textContent.code}</p>
    </div>
    <p className="md:ml-2 md:mt-0">{textContent.line2}</p>
  </div>
);

export const ComparisonHeader = ({ textContent, redirectUrl, maxWithForTitle }: ComparisonHeaderProps) => (
  <div className="relative z-20 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-primary-dark px-6 py-16 pt-[130px] text-white">
    <div className="relative z-10 mb-16 flex flex-col items-center justify-center space-y-4 md:mb-8">
      <Header maxWidth={maxWithForTitle} className="text-center text-white">
        {textContent.title}
      </Header>

      <h2 className="max-w-3xl text-center text-xl">{textContent.description}</h2>

      {textContent.useCode ? <CodeComponent textContent={textContent.useCode} /> : undefined}
    </div>

    <div className="relative z-10 flex flex-col items-center justify-center">
      <Link
        href={redirectUrl}
        rel="noopener noreferrer"
        id="get-started-link"
        className="flex w-full items-center justify-center rounded-lg border border-transparent bg-white px-6 py-2 text-lg font-medium text-primary hover:bg-blue-10 focus:outline-none sm:inline-flex sm:w-auto"
      >
        {textContent.cta}
      </Link>
    </div>

    <div className="absolute left-0 top-2/3 h-full w-full scale-y-200 rounded-t-full-percentage bg-primary-dark blur-3xl filter" />
  </div>
);
