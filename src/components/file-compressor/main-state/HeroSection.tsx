import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

export const HeroSection = ({ textContent }) => {
  const router = useRouter();

  return (
    <section className="overflow-hidden bg-gray-1 pb-20 pt-32">
      <div className="flex w-full flex-col items-center space-y-12 px-5">
        <div className="flex flex-col items-center space-y-5 text-center">
          <p className="text-5xl font-semibold">{textContent.title}</p>
          <div className="flex flex-col  text-center text-xl text-gray-80">
            <p>{textContent.description.normal}</p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center lg:max-w-[1000px] lg-xl:max-w-[1000px]">
          <div className="grid grid-flow-row grid-cols-1 flex-row flex-wrap gap-4 md:grid-cols-2 lg:grid-cols-4 lg-xl:w-full lg-xl:gap-8">
            {textContent.cards.map((card) => (
              <button
                key={card.title}
                className="flex w-full max-w-[300px] cursor-pointer flex-col items-start space-y-2 rounded-2xl bg-white px-10 py-5 text-start shadow-subtle-hard hover:ring-4 hover:ring-primary/8 lg:p-9 "
                onClick={() => {
                  router.push(`/file-compressor/${card.pathname}`);
                }}
              >
                <div className="flex flex-row items-center justify-center gap-3 ">
                  <Image
                    width={40}
                    height={40}
                    alt={`${card.title} icon`}
                    src={getImage(`/icons/file-compressor/${card.pathname}.svg`)}
                  />
                  <>
                    <p className="block text-2xl font-semibold text-gray-100 lg:block">
                      {card.title.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                    <p className="hidden text-2xl font-semibold text-gray-100 lg:hidden">
                      {card.title.replace('\n', ' ')}
                    </p>
                  </>
                </div>
                <>
                  <p className="text-regular block text-gray-100 lg:block">
                    {card.description.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                  <p className="text-regular hidden text-gray-100 lg:hidden">{card.description.replace('\n', ' ')}</p>
                </>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
