import { ReferAFriendText } from '@/assets/types/refer-a-friend';

interface RewardSectionProps {
  textContent: ReferAFriendText['RewardsSection'];
}

export default function RewardSection({
  textContent,
}: Readonly<RewardSectionProps>): JSX.Element {

  return (
    <section className="flex h-min w-full flex-col items-center gap-6 justify-center overflow-hidden py-10 px-6 lg:py-20 lg:px-20 dark:bg-gray-95">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-3xl font-bold text-gray-100 dark:text-white-95 lg:text-4xl">{textContent.title}</p>
        <p className="text-xl font-medium lg:text-2xl text-gray-55 dark:text-green-120">{textContent.subtitle}</p>
      </div> 
      <div className="flex w-full flex-col gap-6 lg:w-[736px]">
        <p className="text-center text-base font-normal lg:text-lg text-gray-55 dark:text-green-120">
          {textContent.features[0]}
        </p>
        <p className="text-center text-base font-normal lg:text-lg text-gray-55 dark:text-green-120">{textContent.features[1]}</p>
      </div>
    </section>
  );
}
