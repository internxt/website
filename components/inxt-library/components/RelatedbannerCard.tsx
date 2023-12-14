import Image from 'next/image';
import { useRouter } from 'next/router';

const RelatedBannerCard = ({ textContent, imageUrl, altUrl, learnMoreLink }) => {
  const router = useRouter();
  return (
    <section className="overflow-hidden px-5">
      <div className="flex max-h-[350px] flex-row items-center justify-center space-x-8 rounded-[32px] bg-gradient-to-br from-blue-20 to-white py-20 px-10">
        <div className="flex max-w-[388px] flex-col space-y-9">
          <div className="flex flex-col space-y-4">
            <p className="text-4xl font-semibold">
              {textContent.title} <br /> {textContent.downloadForFree}
            </p>

            <p className="text-xl font-medium">{textContent.subtitle}</p>
          </div>
          <button
            onClick={() => {
              router.push(learnMoreLink);
            }}
            className="flex rounded-lg bg-primary px-5 py-3 text-lg text-white lg:w-max"
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
