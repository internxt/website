const RelatedResourcesSection = ({ textContent, children }) => {
  return (
    <section className="overflow-hidden bg-gray-1 py-20 px-5">
      <div className="flex flex-col items-center justify-center space-y-16">
        <div className="flex max-w-[774px] flex-col items-center space-y-6 text-center">
          <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
          <p className="text-lg text-gray-80">{textContent.subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default RelatedResourcesSection;
