import { DARK_MODE_ENABLED } from '@/theme.config';
export const SignupSection = ({ darkMode = DARK_MODE_ENABLED, textContent }) => (
  <section className="overflow-hidden">
    <div className="flex flex-col items-center justify-center space-y-8 px-4 py-14 text-white">
      <div className="flex max-w-[595px] flex-col space-y-4 text-center">
        <p className="text-4xl font-semibold">{textContent.title}</p>
        <p className="text-xl font-normal">{textContent.description}</p>
      </div>
      <button
        className={`flex cursor-pointer rounded-lg ${darkMode ? 'bg-[#1C1C1C]' : 'bg-white'} px-6 py-2 ${
          darkMode ? 'hover:bg-purple-100' : 'hover:bg-blue-10'
        }`}
        onClick={() => {
          window.open('https://internxt.com/drive', '_blank', 'noopener noreferrer');
        }}
      >
        <p className="text-base font-semibold text-primary">{textContent.createAccount}</p>
      </button>
    </div>
    <div className="pointer-events-none absolute left-0 top-0 -z-10 flex h-full w-full origin-center bg-primary" />
  </section>
);
