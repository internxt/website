interface WhatIsSectionProps {
  textContent: any;
}

export const WhatIsSection = ({ textContent }: WhatIsSectionProps) => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 px-6 py-10 lg:p-20">
      <div className={`absolute bottom-0 left-8 right-8 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32`} />
      <p className="whitespace-pre-line text-center text-30 font-bold leading-tight text-gray-100 lg:whitespace-nowrap lg:text-5xl">
        {textContent.title}
      </p>
      {textContent.description.map((feat) => (
        <p className="flex text-center text-base font-normal leading-tight text-gray-55 lg:w-2/3 lg:text-lg">{feat}</p>
      ))}
    </section>
  );
};
