interface InternxtProtectsYourBusinessProps {
  textContent: any;
}

export const InternxtProtectsYourBusiness = ({ textContent }: InternxtProtectsYourBusinessProps): JSX.Element => {
  return (
    <section className="py- flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-neutral-17 text-center lg:pt-20">
      <h2 className="w-[350px] text-30 font-semibold leading-tight text-gray-100 lg:w-[774px] lg:text-3xl">
        {textContent.title}
      </h2>
      <div className="flex w-[350px] flex-col items-center gap-8 lg:w-[1100px]">
        {textContent.description.map((text) => (
          <p className="text-base leading-tight text-gray-55 first:font-semibold lg:w-[832px] lg:text-xl" key={text}>
            {text}
          </p>
        ))}
      </div>
      <div className="mt-5 h-[1px] w-4/5 bg-neutral-25" />
    </section>
  );
};
