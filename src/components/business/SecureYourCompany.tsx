interface SecureYourCompanyProps {
  textContent: any;
}

export const SecureYourCompany = ({ textContent }: SecureYourCompanyProps): JSX.Element => (
  <section
    className="overflow-hidden px-5 py-10 lg:py-20"
    style={{ background: 'linear-gradient(359.93deg, #F4F8FF 0.4%, #001D6C 94.89%)' }}
  >
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="flex w-[350px] flex-col gap-4 text-center lg:w-[800px] lg:gap-8">
        <h2 className="text-30 font-bold leading-tight text-white lg:text-3xl ">{textContent.title}</h2>
        <h3 className="text-base font-normal leading-tight text-white lg:text-xl">{textContent.description}</h3>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-5 lg:gap-14 lg:py-9">
        {textContent.cards.map((card) => (
          <div className="flex w-[190px] flex-col gap-[15px] text-center lg:w-[230px]" key={card.title}>
            <p className="text-3xl font-semibold text-blue-62 lg:text-5xl">{card.title}</p>
            <p className="text-base font-medium leading-tight text-white-95 lg:text-xl">{card.description}</p>
          </div>
        ))}
      </div>

      <p className="w-[350px] text-center text-sm leading-tight text-gray-60 lg:w-full lg:text-base">
        {textContent.footerText}
      </p>
    </div>
  </section>
);
