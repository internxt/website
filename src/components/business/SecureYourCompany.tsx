interface SecureYourCompanyProps {
  textContent: any;
}

export const SecureYourCompany = ({ textContent }: SecureYourCompanyProps): JSX.Element => (
  <section className="overflow-hidden px-5 py-20">
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="flex max-w-[800px] flex-col gap-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-100 lg:text-5xl ">{textContent.title}</h2>
        <h3 className="text-xl text-gray-80">{textContent.description}</h3>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 lg:gap-32">
        {textContent.cards.map((card) => (
          <div className="flex max-w-[230px]  flex-col gap-2 text-center" key={card.title}>
            <p className="text-5xl font-semibold text-primary">{card.title}</p>
            <p className="text-xl font-medium text-gray-80">{card.description}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-60">{textContent.footerText}</p>
    </div>
  </section>
);
