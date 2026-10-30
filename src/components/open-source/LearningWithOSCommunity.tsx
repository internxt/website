const LearningWithOSCommunity = ({ textContent }) => {
  return (
    <section className="overflow-hidden dark:bg-gray-95">
      <div className="flex flex-col items-center justify-center space-y-6 py-20 px-5 text-center">
        <p className="max-w-[744px] text-5xl font-semibold text-gray-100 dark:text-white-95">{textContent.title}</p>
        {textContent.description.map((paragraph) => (
          <p key={paragraph} className="max-w-[774px] text-xl text-gray-80 dark:text-cool-gray-30">{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default LearningWithOSCommunity;
