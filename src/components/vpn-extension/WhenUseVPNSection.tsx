import { CheckSquare } from '@phosphor-icons/react';
import Button from '../shared/Button';

export const WhenUseVPNSection = ({ textContent }) => {
  return (
    <section className="overflow-hidden py-20 px-5">
      <div className="flex flex-col items-center space-y-12 text-center">
        <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
        <div className="flex max-w-[800px] flex-col space-y-6 text-center">
          <p className="text-2xl font-medium text-gray-80">{textContent.subtitle}</p>
          <p className="text-lg font-medium text-gray-80">{textContent.description}</p>
        </div>
        <Button
          text={textContent.cta}
          onClick={() => {
            // NO OP RN
          }}
        />
        <div className="grid w-full max-w-5xl grid-cols-1 flex-row justify-between gap-5 lg:grid-cols-2">
          {textContent.cards.map((card) => (
            <div className="flex even:justify-end">
              <div className="flex w-full max-w-[300px] flex-col space-y-2 rounded-[10px] border border-gray-10 p-10 text-start">
                <CheckSquare size={32} className="text-green" />
                <p className="max-w-[260px] text-2xl font-medium text-gray-80">{card}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
