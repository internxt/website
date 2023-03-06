import React from 'react';
import styles from '/components/partner-discount/Background.module.scss';

const SignupSection = () => (
  <section className="overflow-hidden">
    <div className="flex flex-col items-center justify-center space-y-8 px-4 py-14 text-white">
      <div className="flex max-w-[595px] flex-col space-y-4 text-center">
        <p className="text-4xl font-semibold">You can't always just send an email...</p>
        <p className="text-xl font-normal">
          Protect the really important stuff with Internxt's secure, private, and encrypted cloud storage.
        </p>
      </div>
      <div
        className="flex cursor-pointer rounded-full bg-white px-6 py-2"
        onClick={() => {
          window.open('https://drive.internxt.com/new', '_blank');
        }}
      >
        <p className="text-base font-semibold text-primary">Create account</p>
      </div>
    </div>
    <div
      className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.partnerHeroSection} pointer-events-none origin-center`}
    />
  </section>
);

export default SignupSection;
