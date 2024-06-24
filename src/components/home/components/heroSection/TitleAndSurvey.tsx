import Button from '@/components/shared/Button';
import Header from '@/components/shared/Header';
import { FiveStars } from '@/components/shared/StarsRate';

export const TitleAndSurvey = ({ textContent }) => {
  return (
    <div className="z-10 flex flex-col gap-16">
      <div className="flex max-w-[544px] flex-col gap-6">
        <div className="flex flex-col gap-5">
          <Header className="text-gray-100">
            {textContent.title.line1} <span className="text-primary">{textContent.title.blueText}</span>
          </Header>

          <div className="flex flex-row items-center gap-3">
            <FiveStars totalStars={5} />
            <p className="font-semibold text-gray-70">{textContent.trustedBy}</p>
          </div>
        </div>
        <h2 className="text-xl font-normal text-gray-80">
          {textContent.description.normal1} <span className="font-semibold">{textContent.description.bold}</span>
          {textContent.description.normal2}
        </h2>
      </div>
      <div className="flex w-max flex-col gap-5 rounded-xl border border-gray-10 bg-gray-1 py-4 px-6">
        <p className="text-xl font-semibold text-gray-80">{textContent.howMuchYouNeed}</p>
        <div className="flex flex-row items-center gap-5">
          <p className="whitespace-nowrap font-semibold text-gray-80">{textContent.upTo}</p>
          <div className="flex h-full border border-gray-10" />

          {/* // TODO: Manage the buttons logic */}
          <div className="flex w-full flex-row gap-4">
            {textContent.buttonLabel.map((label) => (
              <Button text={label} onClick={() => {}} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
