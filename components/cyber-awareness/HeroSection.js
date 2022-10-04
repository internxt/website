import React from 'react';

const HeroSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden">
      <div className="pt-16">
        <div className=" flex h-60 items-center justify-center border-b border-white bg-primary">
          <h1 className="text-4xl font-semibold text-white sm:text-6xl">Cyber Awareness</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-5 md:p-20">
          <div className="pt-10 xl:px-80">
            <p className="text-2xl font-medium">{textContent.paragraph1.title}</p>
            <p className="text-lg font-normal">{textContent.paragraph1.body}</p>
            <p className="mt-8 text-lg font-normal">{textContent.paragraph1.body2}</p>
          </div>
          <div className="mt-16 flex xl:px-64">
            <img src="/images/cyber-awareness/phising-emails.png" alt="phising-emails" className="rounded-3xl" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-5 pt-11 md:p-20">
          <div className="xl:px-80">
            <p className="text-2xl font-medium">{textContent.paragraph2.title}</p>
            <p className="text-lg font-normal">{textContent.paragraph2.body}</p>
            <p className="mt-8 text-lg font-normal">{textContent.paragraph2.body2}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-5 pt-11 md:p-20">
          <div className="xl:px-80">
            <p className="text-2xl font-medium">{textContent.paragraph3.title}</p>
            <p className="text-lg font-normal">{textContent.paragraph3.body}</p>
          </div>
          <div className="mt-16 flex xl:px-64">
            <img src="/images/cyber-awareness/all-eyes-of-you.png" alt="all eyes of you" className="rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
