import { useRouter } from 'next/router';

const HeroSection = ({ textContent }) => {
  const router = useRouter();
  const lang = router.locale;
  const blueTextInChinese = textContent.title.normalText.substring('开源', 2);
  const textInChinese = textContent.title.normalText.split('开源');

  const title =
    lang === 'zh' ? (
      <>
        {textInChinese[0]} <span className="text-primary">{blueTextInChinese}</span> {textInChinese[1]}
      </>
    ) : lang === 'ru' ? (
      <>
        {textContent.title.normalText} <br /> <span className="text-primary">{textContent.title.blueText}</span>
      </>
    ) : (
      <>
        {textContent.title.normalText} <span className="text-primary">{textContent.title.blueText}</span>
      </>
    );

  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-6 pt-16 text-center">
        <div className="flex w-full flex-col items-center px-5">
          <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">{title}</h1>
        </div>
        <div className="flex max-w-[850px] flex-col">
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
