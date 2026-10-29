const LearningWithOSCommunity = ({ darkMode = false, textContent }) => {
  return (
    <section className={`overflow-hidden ${darkMode ? 'bg-[#1C1C1C]' : ''}`}>
      <div className="flex flex-col items-center justify-center space-y-6 py-20 px-5 text-center">
        <p className={`max-w-[744px] text-5xl font-semibold ${darkMode ? 'text-white-95' : 'text-gray-100'}`}>
          {textContent.title}
        </p>
        {textContent.description.map((paragraph) => (
          <p key={paragraph} className={`max-w-[774px] text-xl ${darkMode ? 'text-cool-gray-30' : 'text-gray-80'}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default LearningWithOSCommunity;
