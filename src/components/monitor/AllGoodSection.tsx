import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';
import { CheckCircle, Smiley } from '@phosphor-icons/react/dist/ssr';

export interface AllGoodSectionProps {
  textContent: HaveIbeenPwnedText['HeroSection']['AllGoodSection'];
}
export const AllGoodSection = ({ textContent }: AllGoodSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 pb-10">
      <Smiley className="text-green-1" height={64} width={64} />
      <p className="text-3xl font-semibold text-gray-100">{textContent.title}</p>
      <div className="bg-green8 my-4 flex items-center justify-center rounded-md px-5 py-2">
        <CheckCircle height={24} width={24} weight="fill" className="text-green-1" />
        <p className="font-regular ml-2 text-base text-gray-100">{textContent.description}</p>
      </div>
      <p className="font-regular px-5 text-center text-base text-gray-100 ">{textContent.StaySecure}</p>
    </div>
  );
};
