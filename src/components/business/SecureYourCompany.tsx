interface SecureYourCompanyProps {
  textContent: any;
}

export const SecureYourCompany = ({ textContent }: SecureYourCompanyProps): JSX.Element => (
  <section className="overflow-hidden bg-neutral-17 px-5 py-10 lg:py-20">
    <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>
    <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:left-32 lg:right-32"></div>
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="flex w-[350px] flex-col gap-4 text-center lg:w-[800px] lg:gap-8">
        <h2 className="text-30 font-bold leading-tight text-gray-100 lg:text-3xl ">{textContent.title}</h2>
        <h3 className="text-base font-normal leading-tight text-gray-100 lg:text-xl">{textContent.description}</h3>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-5 lg:gap-14 lg:py-9">
        {textContent.cards.map((card) => (
          <div className="flex w-[190px] flex-col gap-[15px] text-center lg:w-[230px]" key={card.title}>
            <p className="text-30 font-semibold text-blue-62 lg:text-3xl">{card.title}</p>
            <p className="text-base font-medium leading-tight text-gray-100 lg:text-xl">{card.description}</p>
          </div>
        ))}
      </div>

      <p className="w-[350px] text-center text-sm leading-tight text-gray-60 lg:w-full lg:text-base">
        {textContent.footerText}
      </p>
    </div>
  </section>
);
