import { useState } from 'react';
import Header from '@/components/shared/Header';
import CheckboxItem from '@/components/shared/CheckboxItem';

const HeroSection = ({ textContent }) => {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <section className="overflow-hidden px-5 pt-14">
      <div className="flex flex-col items-center justify-center space-y-12 py-20">
        <div className="flex w-full flex-col items-center space-y-5 text-center">
          <Header>
            {textContent.title.text} <span className="text-primary">{textContent.title.blueText}</span>
          </Header>
          <p className="max-w-[700px] text-xl text-gray-80">{textContent.description}</p>
        </div>
        {/* Card */}
        <form
          data-code="r3s4c1"
          method="post"
          target="_blank"
          rel="noopener"
          action="https://app.mailerlite.com/webforms/submit/r3s4c1"
          className="flex w-full max-w-[568px] flex-col justify-center rounded-lg border border-primary/7 bg-primary/2 p-9 ring-5 ring-primary/7"
        >
          <input type="hidden" name="ml-submit" value="1" />
          <input
            name="fields[email]"
            type="email"
            placeholder={`${textContent.form.emailLabel}`}
            className={`flex h-auto w-full appearance-none flex-row rounded-lg border border-cool-gray-20 bg-white px-4 py-3 text-left text-lg outline-none
            transition-all duration-150 focus:border-blue-50 focus:ring focus:ring-primary focus:ring-opacity-20 sm:py-2 sm:text-base`}
            required
          />
          <div className="flex flex-col space-y-6 pt-9">
            <CheckboxItem checked={checkbox} setCheckbox={setCheckbox} label={textContent.form.checkboxText} />
            <input
              name="signup"
              type="submit"
              disabled={!checkbox}
              value={`${textContent.form.cta}`}
              className={`${
                !checkbox ? 'cursor-default bg-gray-20 text-gray-40' : 'bg-primary hover:bg-primary-dark'
              } flex w-full cursor-pointer items-center justify-center rounded-lg border border-transparent px-4 py-3 text-lg font-medium text-white transition-all duration-75 focus:outline-none sm:mb-2 sm:py-2 sm:text-base`}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
