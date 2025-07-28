const HeroSafeArea = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <div className="pt-20 lg:pt-16">
      <div className="py-2 lg:px-10 lg:py-9 xl:px-32">{children}</div>
    </div>
  );
};

export default HeroSafeArea;
