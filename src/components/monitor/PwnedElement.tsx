import DOMPurify from 'dompurify';

export interface PwnedElementCardProps {
  textContent: {
    logoPath: string;
    domain: string;
    title: string;
    description: string;
    compromisedData: string;
    dataClasses: string[];
  };
}

const PwnedElementCard: React.FC<PwnedElementCardProps> = ({ textContent }) => {
  const sanitizedHTML = DOMPurify.sanitize(
    textContent.description.replace(/<a /g, `<a class="underline text-blue-600 hover:text-blue-800 cursor-pointer"`),
  );
  return (
    <div className="flex max-w-[1019px] flex-col pb-5 md:flex-row">
      <div className="order-1 mb-4 flex items-center justify-center bg-gray-5 p-4 md:order-2 md:mb-0">
        <div className="flex h-24 w-24  items-center justify-center overflow-hidden rounded-full bg-gray-20">
          <img src={textContent.logoPath} alt={`${textContent.domain} logo`} width={70} height={70} />
        </div>
      </div>
      <div className="order-2 max-w-full space-y-5 bg-white px-6 pb-6 pt-6 text-center md:order-1 md:max-w-[1019px] md:px-10 md:pb-8 md:pt-8 md:text-left">
        <p className="text-xl font-bold text-gray-100 md:text-2xl">{textContent.title}</p>
        <p
          className="text-regular text-base text-gray-80 md:text-lg"
          dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        />

        <div className="inline-flex flex-wrap items-center gap-x-1 text-base text-gray-80 md:text-lg">
          <span className="font-bold">{textContent.compromisedData}</span>
          {textContent.dataClasses.map((dataClass, index) => (
            <span key={index}>
              {dataClass}
              {index < textContent.dataClasses.length - 1 ? ',' : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PwnedElementCard;
