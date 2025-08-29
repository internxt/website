const VerticalBusinessSection = ({
  customText,
  bgGradientContainerColor,
  bgGradientColor,
  containerDetails,
  bgColor,
}: {
  textContent: any;
  url?: string;
  target?: string;
  bgGradientContainerColor?: string;
  bgGradientColor?: string;
  customText?: React.ReactNode;
  containerDetails?: string;
  bgColor?: string;
}) => {
  return (
    <section
      className={`flex w-full items-start justify-center px-10 py-10 lg:hidden  xl:px-32 3xl:px-80 ${bgColor}`}
      style={{ background: bgGradientColor }}
    >
      <div
        className={`z-10 flex h-[526px] w-full flex-col items-center justify-center gap-4 rounded-20 px-4 py-6 ${containerDetails}`}
        style={{ background: bgGradientContainerColor }}
      >
        {customText}
      </div>
    </section>
  );
};

export default VerticalBusinessSection;
