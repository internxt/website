import { useRouter } from 'next/navigation';
import Header from '../shared/Header';
import Image from 'next/image';

const HeroSection = ({ textContent }) => {
  const router = useRouter();

  return (
    <section className="overflow-hidden bg-gray-1 pt-32 pb-20">
      <div className="flex w-full flex-col items-center space-y-12 px-5">
        <div className="flex max-w-[700px] flex-col space-y-5 text-center">
          <Header>{textContent.title}</Header>
          <div className="flex flex-col text-center text-xl text-gray-80">
            <p>{textContent.description.normal}</p>
            <p className="font-semibold">{textContent.description.bold}</p>
          </div>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-center justify-center">
          <div className="grid grid-flow-row grid-cols-1 flex-row flex-wrap gap-4 md:grid-cols-2 lg:grid-cols-4">
            {textContent.cards.map((card) => (
              <button
                key={card.id}
                className="flex w-full max-w-[285px] cursor-pointer flex-col space-y-6 rounded-2xl bg-white px-10 py-5 text-start shadow-subtle-hard hover:ring-4 hover:ring-primary/8 lg:p-9"
                onClick={() => {
                  router.push(`/file-converter/${card.pathname}`);
                }}
              >
                <Image
                  src={`/icons/file-converter/${card.pathname}.svg`}
                  width={64}
                  height={62}
                  alt={`${card.title} icon`}
                />
                <p className="text-2xl font-semibold text-gray-100">{card.title}</p>
                <p className="text-xl text-gray-80">{card.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
