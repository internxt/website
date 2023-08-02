import { useRouter } from 'next/router';
import Header from '../shared/Header';

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
    ) : (
      <>
        {textContent.title.normalText} <span className="text-primary">{textContent.title.blueText}</span>
      </>
    );

  return (
    <section className="overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center space-y-6 pt-16 text-center">
        <div className="flex w-full max-w-[796px] flex-col px-5">
          <Header>{title}</Header>
        </div>
        <div className="flex max-w-[850px] flex-col">
          <p className="text-xl text-gray-80">{textContent.description}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
