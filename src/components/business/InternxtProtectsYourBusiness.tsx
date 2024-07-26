interface InternxtProtectsYourBusinessProps {
  textContent: any;
}

export const InternxtProtectsYourBusiness = ({ textContent }: InternxtProtectsYourBusinessProps): JSX.Element => {
  return (
    <section className="overflow-hidden bg-gray-1 px-5 py-20">
      <div className="flex w-full flex-col items-center justify-center gap-12 text-center">
        <h2 className="max-w-[774px] text-5xl font-semibold text-gray-100">{textContent.title}</h2>
        <div className="flex w-full max-w-[947px] flex-col gap-4">
          {textContent.description.map((text) => (
            <p className="text-xl text-gray-80 first:font-semibold" key={text}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
