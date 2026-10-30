import Link from 'next/link';

const CtaSection = ({
  textContent,
  url,
  maxWidth = '',
  target,
  onClick,
  bgColor,
  customDescription,
}: {
  textContent: any;
  url: string;
  maxWidth?: string;
  target?: string;
  bgColor?: string;
  onClick?: () => void;
  customDescription?: React.ReactNode;
}) => {
  return (
    <section className="overflow-hidden bg-green-1 dark:bg-green-0 bg-cover px-5 py-14">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className={`flex  ${maxWidth} flex-col items-center space-y-4 text-center text-white`}>
          <p className="text-4xl font-semibold">{textContent.title}</p>
          {customDescription}
        </div>
        <Link
          href={url}
          target={target}
          className="flex rounded-lg bg-white dark:bg-gray-95 dark:text-white-95 px-5 py-3 text-xl font-medium hover:bg-blue-10 dark:hover:bg-gray-105"
        >
          {textContent.cta}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
