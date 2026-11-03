const LearningWithOSCommunity = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center space-y-6 py-20 px-5 text-center">
        <p className="max-w-[744px] text-5xl font-semibold">{textContent.title}</p>
        {textContent.description.map((paragraph, index) => (
          <p key={index} className="max-w-[774px] text-xl text-gray-80">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default LearningWithOSCommunity;
