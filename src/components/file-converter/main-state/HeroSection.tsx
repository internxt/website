import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const HeroSection = ({ darkMode = false, textContent }) => {
  const router = useRouter();

  return (
    <section className={`overflow-hidden ${darkMode ? 'bg-gray-105' : 'bg-gray-1'} pb-20 pt-32`}>
      <div className="flex w-full flex-col items-center space-y-12 px-5">
        <div className="flex flex-col items-center space-y-5 text-center">
          <h1 className={`text-3xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'} lg:text-5xl`}>
            {textContent.title}
          </h1>
          <div className={`flex flex-col text-center text-xl ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
            <p>{textContent.description.normal}</p>
          </div>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-center justify-center">
          <div className="grid grid-flow-row grid-cols-1 flex-row flex-wrap gap-4 md:grid-cols-2 lg:grid-cols-5">
            {textContent.cards.map((card) => (
              <button
                key={card.title}
                className={`flex w-full max-w-[285px] cursor-pointer flex-col space-y-6 rounded-2xl ${
                  darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
                } px-10 py-5 text-start shadow-subtle-hard hover:ring-4 hover:ring-primary/8 lg:p-9`}
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
                <p className={`text-2xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>{card.title}</p>
                <p className="text-regular text-gray-50">{card.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
