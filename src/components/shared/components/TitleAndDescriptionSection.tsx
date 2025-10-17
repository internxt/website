interface TitleAndDescriptionSectionProps {
  textContent: any;
  darkMode?: boolean;
}

export default function TitleAndDescriptionSection({
  textContent,
  darkMode,
}: Readonly<TitleAndDescriptionSectionProps>): JSX.Element {
  return (
    <section
      className={`flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden ${
        darkMode ? 'bg-[#1C1C1C]' : 'bg-white'
      }  p-10 lg:h-min lg:gap-16 lg:p-20`}
    >
      <div
        className={`absolute bottom-0 left-8 right-8 h-[1px] ${
          darkMode ? 'bg-gray-71' : 'bg-neutral-35'
        } lg:bottom-0 lg:left-32 lg:right-32`}
      ></div>
      <div className="flex h-min w-[345px] flex-col items-center justify-center gap-8 text-center lg:w-full lg:gap-16">
        <p
          className={`${darkMode ? 'text-gray-1' : 'text-gray-95'} text-30 font-bold
      leading-tight lg:text-5xl`}
        >
          {textContent.title}
        </p>
        <div className="flex flex-col items-center gap-6 text-center lg:w-[786px]">
          {textContent.description.map((description: string, index: number) => (
            <p
              key={`description-${index}`}
              className={`text-base font-normal leading-tight ${
                darkMode ? 'text-green-110' : 'text-gray-55'
              } lg:text-xl`}
            >
              {description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
