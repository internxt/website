interface InternxtProtectsYourBusinessProps {
  textContent: any;
}

export const InternxtProtectsYourBusiness = ({ textContent }: InternxtProtectsYourBusinessProps): JSX.Element => {
  return (
    <section className="overflow-hidden bg-neutral-17 px-5 py-10 lg:py-20">
      <div className="flex w-full flex-col items-center justify-center gap-6 text-center lg:gap-12">
        <h2 className="w-[350px] text-30 font-semibold text-gray-100 lg:w-[774px] lg:text-5xl">{textContent.title}</h2>
        <div className="flex w-[350px] flex-col gap-4 lg:w-[832px]">
          {textContent.description.map((text) => (
            <p className="text-base text-gray-80 first:font-semibold lg:text-xl" key={text}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
