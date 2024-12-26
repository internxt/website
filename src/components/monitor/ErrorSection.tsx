import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';
import { WarningCircle } from '@phosphor-icons/react';

export interface ErrorSectionProps {
  errorMessage: string;
}
export const ErrorSection = ({ errorMessage }: ErrorSectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 pb-10">
      <div className="my-4 flex items-center justify-center rounded-md bg-red8 px-10 py-2 text-center">
        <WarningCircle className="h-12 w-12 text-red md:h-6 md:w-6" weight="fill" />
        <p className="font-regular ml-2 text-base text-gray-100">{errorMessage}</p>
      </div>
    </div>
  );
};
