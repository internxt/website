import { ReferAFriendText } from '@/assets/types/refer-a-friend';

interface RewardSectionProps {
  textContent: ReferAFriendText['RewardsSection'];
}

export default function RewardSection({
  textContent,
}: Readonly<RewardSectionProps>): JSX.Element {

  return (
    <section
      className={`flex h-min w-full flex-col items-center gap-6 justify-center overflow-hidden py-10 px-6 lg:py-20 lg:px-20`}
    >
     <div className="flex flex-col gap-2 items-center text-center">
        <p className="text-3xl lg:text-4xl font-bold">{textContent.title}</p>
        <p className="text-xl lg:text-2xl font-medium text-gray-55">{textContent.subtitle}</p>
      </div> 
      <div className="flex flex-col w-full lg:w-[736px] gap-6">
        <p className="text-base lg:text-lg font-normal text-center
         text-gray-55">{textContent.features[0]}</p>
        <p className="text-base lg:text-lg font-normal text-center text-gray-55">{textContent.features[1]}</p>
      </div>
    </section>
  );
}
