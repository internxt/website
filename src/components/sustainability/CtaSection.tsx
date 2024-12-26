import Link from 'next/link';

const CtaSection = ({
  textContent,
  url,
  maxWidth,
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
    <section className={`overflow-hidden  bg-green-1 bg-cover px-5 py-14`}>
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className={`flex  ${maxWidth} flex-col items-center space-y-4 text-center text-white`}>
          <p className="text-4xl font-semibold">{textContent.title}</p>
          {customDescription}
        </div>
        <Link
          href={url}
          target={target}
          className={`text-green flex rounded-lg bg-white bg-white px-5 py-3 text-lg text-xl font-medium hover:bg-blue-10`}
        >
          {textContent.cta}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
