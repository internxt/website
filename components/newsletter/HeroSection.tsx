import { useState } from 'react';
import Header from '../shared/Header';
import TextInput from '../components/TextInput';
import CheckboxItem from '../shared/CheckboxItem';

const HeroSection = ({ textContent }) => {
  const [email, setEmail] = useState('');
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
        <div className="flex w-full max-w-[568px] flex-col justify-center rounded-lg border border-primary/7 bg-primary/2 p-9 ring-5 ring-primary/7">
          <TextInput placeholder={textContent.form.emailLabel} onChange={(e) => setEmail(e.target.value)} />
          <div className="flex flex-col space-y-6 pt-9">
            <CheckboxItem checked={checkbox} setCheckbox={setCheckbox} label={textContent.form.checkboxText} />
            <button className="flex w-full justify-center rounded-lg bg-primary py-3 font-medium text-white">
              {textContent.form.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
