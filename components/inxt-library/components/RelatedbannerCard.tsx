import Image from 'next/image';
import { useRouter } from 'next/router';

const RelatedBannerCard = ({ textContent, imageUrl, altUrl, learnMoreLink }) => {
  const router = useRouter();
  return (
    <section className="overflow-hidden px-5">
      <div className="flex flex-col items-center justify-center space-y-8 rounded-[32px] bg-gradient-to-br from-blue-20 to-white py-10 px-10 lg:max-h-[350px] lg:flex-row lg:space-y-0 lg:space-x-8 lg:py-20">
        <div className="flex max-w-[388px] flex-col items-center space-y-9 lg:items-start">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <p className="text-4xl font-semibold">
              {textContent.title} <br /> {textContent.downloadForFree}
            </p>

            <p className="text-xl font-medium">{textContent.subtitle}</p>
          </div>
          <button
            onClick={() => {
              router.push(learnMoreLink);
            }}
            className="flex w-max justify-center rounded-lg bg-primary px-5 py-3 text-lg text-white"
          >
            {textContent.cta}
          </button>
        </div>
        <div className="flex object-contain">
          <Image src={imageUrl} alt={altUrl} width={401} height={289} draggable={false} />
        </div>
      </div>
    </section>
  );
};

export default RelatedBannerCard;
