import { useState } from 'react';
import CheckboxItem from '@/components/shared/CheckboxItem';
import axios from 'axios';
import { notificationService } from '../Snackbar';

const HeroSection = ({ textContent }) => {
  const [email, setEmail] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`/api/subscribe`, {
        email,
        groups: [process.env.NEXT_PUBLIC_FREE_GROUP_ID],
      })
      .then(() => {
        notificationService.openSuccessToast('Successfully submitted');
      })
      .catch((err) => {
        notificationService.openErrorToast('Something went wrong!');
      });
  };

  return (
    <section className="overflow-hidden px-5 pt-14">
      <div className="flex flex-col items-center justify-center space-y-12 py-20">
        <div className="flex w-full flex-col items-center space-y-5 text-center">
          <h1 className="text-3xl font-semibold text-gray-100 lg:text-5xl">
            {textContent.title.text} <span className="text-primary">{textContent.title.blueText}</span>
          </h1>
          <p className="max-w-[700px] text-xl text-gray-80">{textContent.description}</p>
        </div>
        <form
          data-code="Frjj25"
          method="post"
          target="_blank"
          rel="noopener"
          onSubmit={handleSubmit}
          className="flex w-full max-w-[568px] flex-col justify-center rounded-lg border border-primary/7 bg-primary/2 p-9 ring-5 ring-primary/7"
        >
          <input type="hidden" name="ml-submit" value="1" />
          <input
            name="fields[email]"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
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
