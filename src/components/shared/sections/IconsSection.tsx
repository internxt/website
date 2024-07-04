interface IconsSectionProps {
  iconsAndTitlesData: Record<string, any>[];
  bgColor?: string;
}

export const IconsSection = ({ iconsAndTitlesData, bgColor }: IconsSectionProps) => (
  <section className={`overflow-hidden py-20 px-5 ${bgColor}`}>
    <div className="flex flex-row flex-wrap justify-center gap-10 md:gap-20 lg:gap-32">
      {iconsAndTitlesData.map((iconAndTitle) => (
        <div className="flex max-w-[140px] flex-col items-center gap-3 text-center">
          <iconAndTitle.icon className="text-primary" size={40} />
          <p className="text-xl font-medium text-gray-100">{iconAndTitle.title}</p>
        </div>
      ))}
    </div>
  </section>
);
