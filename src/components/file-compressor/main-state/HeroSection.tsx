import { useRouter } from 'next/navigation';
import Header from '../../shared/Header';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

export const HeroSection = ({ textContent }) => {
  const router = useRouter();

  return (
    <section className="overflow-hidden bg-gray-1 pb-20 pt-32">
      <div className="flex w-full flex-col items-center space-y-12 px-5">
        <div className="flex flex-col items-center space-y-5 text-center">
          <Header maxWidth="max-w-[700px]">{textContent.title}</Header>
          <div className="flex flex-col text-center text-xl text-gray-80">
            <p>{textContent.description.normal}</p>
          </div>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-center justify-center">
          <div className="grid grid-flow-row grid-cols-1 flex-row flex-wrap gap-4 md:grid-cols-2 lg:grid-cols-4">
            {textContent.cards.map((card) => (
              <button
                key={card.title}
                className="flex w-full max-w-[400px] cursor-pointer flex-col items-start space-y-6 rounded-2xl bg-white px-10 py-5 text-start shadow-subtle-hard hover:ring-4 hover:ring-primary/8 lg:p-9"
                onClick={() => {
                  router.push(`/file-compressor/${card.pathname}`);
                }}
              >
                <div className="flex flex-row items-center justify-center">
                  <Image
                    width={64}
                    height={62}
                    alt={`${card.title} icon`}
                    src={getImage(`/icons/file-compressor/${card.pathname}.svg`)}
                  />
                  <p className="px-2 text-2xl font-semibold text-gray-100">{card.title}</p>
                </div>
                <p className="text-regular text-gray-50">{card.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
