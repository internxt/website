import { CirclesThree, Fingerprint, Hash, NumberCircleThree, Ruler, TextAa, TextT } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import SignUpInline from '../auth/SignUpInline';
import SignUpBanner from '../banners/SignUpBanner';
import CtaSection from '../shared/CtaSection';
import RenderDescription from '../shared/RenderDescription';

const InfoSection = ({ textContent, bannerText }): JSX.Element => {
  const router = useRouter();
  const lang = router.locale;

  const iconSize = 32;
  const tipIcons = [
    <Ruler size={iconSize} key={0} />,
    <TextT size={iconSize} key={1} />,
    <TextAa size={iconSize} key={2} />,
    <NumberCircleThree size={iconSize} key={3} />,
    <Hash size={iconSize} key={4} />,
    <CirclesThree size={iconSize} key={5} />,
  ];
  const cards1 = [
    {
      icon: Ruler,
      title: textContent.infoCards1[0].title,
      description: textContent.infoCards1[0].description,
    },
    {
      icon: CirclesThree,
      title: textContent.infoCards1[1].title,
      description: textContent.infoCards1[1].description,
    },
    {
      icon: Fingerprint,
      title: textContent.infoCards1[2].title,
      description: textContent.infoCards1[2].description,
    },
  ];

  const getSectionText = (text) => {
    return (
      <div className="flex w-full max-w-2xl flex-col space-y-3 ">
        <p className="text-2xl font-medium text-gray-100">{text.title}</p>
        <RenderDescription description={text.description} />
      </div>
    );
  };

  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-16 py-20 px-5">
        <SignUpBanner textContent={bannerText} lang={lang} />
        {getSectionText(textContent.firstSection)}
        {getSectionText(textContent.secondSection)}
        <div className="gap flex flex-row flex-wrap items-center justify-center gap-8">
          {cards1.map((item) => (
            <div className="z-10 flex max-w-[320px] flex-col rounded-2xl bg-white p-10" key={item.title}>
              <div className="z-10 flex max-w-[205px] flex-col items-center justify-center space-y-6 text-center lg:items-start lg:text-left">
                <item.icon className="h-8 w-8 text-primary" />
                <p className="text-2xl font-medium text-gray-100">{item.title}</p>
                <div className="flex flex-row items-center justify-center text-primary">
                  <p className="text-2xl text-gray-80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CtaSection textContent={textContent.ctaSection} url="https://drive.internxt.com/new" maxWidth="max-w-2xl" />
      <div className="flex flex-col items-center justify-center space-y-16 bg-white py-20 px-5">
        {getSectionText(textContent.thirdSection)}
        <div className="flex max-w-2xl flex-col items-start space-y-3 text-gray-80 md:px-0">
          {getSectionText(textContent.fourthSection)}
          <p className="text-lg">{textContent.bulletedList.title}</p>
          <ul className="list-disc pl-5 text-lg">
            {textContent.bulletedList.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <img
          src={`/images/converter-tool/PasswordChecker${lang.toUpperCase()}.png`}
          alt="Password Checker"
          className="w-full max-w-4xl cursor-pointer px-5"
          onClick={() => {
            window.open(`${window.origin}${lang === 'en' ? '' : `/${lang}`}/password-checker`, '_blank');
          }}
        />
        {getSectionText(textContent.fifthSection)}

        <div className="grid auto-rows-auto grid-cols-1 gap-5 px-1 sm:grid-cols-2 lg:max-w-max lg:grid-cols-3">
          {textContent.infoCards2.map((tip, index) => (
            <div
              key={tip}
              className="flex flex-col items-start space-y-3 rounded-2xl bg-gray-1 p-8 lg:h-full lg:max-w-[256px]"
            >
              <p className="flex flex-col text-primary">{tipIcons[index]}</p>
              <p className="text-2xl">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
