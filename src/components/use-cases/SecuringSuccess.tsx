import { Buildings, Camera, CaretRight, Laptop, MicrophoneStage, Scales, Student } from '@phosphor-icons/react';

const SecuringSuccess = ({ textContent }) => {
  const cards = [
    {
      id: 0,
      icon: MicrophoneStage,
      title: textContent.cards.journalists.title,
      pathname: textContent.cards.journalists.pathname,
    },
    {
      id: 1,
      icon: Laptop,
      title: textContent.cards.digitalNomads.title,
      pathname: textContent.cards.digitalNomads.pathname,
    },
    {
      id: 2,
      icon: Student,
      title: textContent.cards.students.title,
      pathname: textContent.cards.students.pathname,
    },
    {
      id: 3,
      icon: Camera,
      title: textContent.cards.photographers.title,
      pathname: textContent.cards.photographers.pathname,
    },
    {
      id: 4,
      icon: Buildings,
      title: textContent.cards.techCompanies.title,
      pathname: textContent.cards.techCompanies.pathname,
    },
    {
      id: 5,
      icon: Scales,
      title: textContent.cards.lawyers.title,
      pathname: textContent.cards.lawyers.pathname,
    },
  ];

  return (
    <section className="overflow-hidden bg-gray-1">
      <div className="flex flex-col items-center justify-center space-y-16 px-5 py-20">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
          <p className="font-gray-80 max-w-[750px] text-xl">{textContent.description}</p>
        </div>
        <div className="flex max-w-[808px] flex-row flex-wrap items-center justify-center gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex w-full max-w-[256px] flex-col items-start space-y-6 rounded-2xl bg-white p-8 pb-14"
            >
              <card.icon size={32} className="text-primary" />
              <div
                className=" flex cursor-pointer flex-row items-center space-x-2 hover:underline"
                onClick={() => {
                  window.open(`${window.location.origin}/${card.pathname}`, '_blank');
                }}
              >
                <h3 className="whitespace-nowrap text-2xl font-medium text-gray-80">{card.title}</h3>
                <CaretRight size={24} className="text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuringSuccess;
