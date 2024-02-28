import { useRouter } from 'next/navigation';
import Header from '../shared/Header';
import { useEffect } from 'react';

const HeroSection = ({ textContent }) => {
  const router = useRouter();

  useEffect(() => {}, []);

  return (
    <section className="overflow-hidden bg-gray-1 pt-32 pb-20">
      <div className="flex flex-col items-center space-y-12 py-20 px-5">
        <div className="flex max-w-[700px] flex-col space-y-5 text-center">
          <Header>{textContent.title}</Header>
          <div className="flex flex-col text-center text-xl text-gray-80">
            <p>{textContent.description.normal}</p>
            <p className="font-semibold">{textContent.description.bold}</p>
          </div>
        </div>
        <div className="flex max-w-screen-xl flex-row flex-wrap gap-4">
          {textContent.cards.map((card) => (
            <button
              key={card.id}
              className="flex w-full max-w-[285px] cursor-pointer flex-col justify-center rounded-2xl bg-white px-5 py-5 shadow-subtle-hard hover:shadow-box-floating lg:p-9"
              onClick={() => {
                router.push(`/file-converter/${card.pathname}`);
              }}
            >
              <div className="flex flex-col justify-center space-y-3">
                <p className="text-xl font-semibold">{card.title}</p>
                <p className="text-gray-80">{card.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
