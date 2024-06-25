import Link from 'next/link';

const CtaSection = ({
  textContent,
  url,
  maxWidth,
  target,
}: {
  textContent: any;
  url: string;
  maxWidth?: string;
  target?: string;
}) => {
  return (
    <section
      style={{
        backgroundImage: 'url(/images/cyber-awareness/Background.svg)',
      }}
      className="overflow-hidden bg-primary bg-cover px-5 py-14"
    >
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <div className={`flex  ${maxWidth} flex-col items-center space-y-4 text-center text-white`}>
          <p className="text-4xl font-semibold">{textContent.title}</p>
          <p className="w-full max-w-[573px] text-xl font-normal">{textContent.description}</p>
        </div>
        <Link
          href={url}
          target={target}
          className="flex rounded-lg bg-white px-5 py-3 text-lg font-medium text-primary hover:bg-blue-10"
        >
          {textContent.cta}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
