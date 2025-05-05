import { HaveIbeenPwnedText } from '@/assets/types/have-i-been-pawned';

export interface InfoSectionProps {
  textContent: HaveIbeenPwnedText['InfoSection'];
}

export const InfoSection: React.FC<InfoSectionProps> = ({ textContent }) => {
  const infoItems = [
    { value: textContent.pwnedWebsitesData, label: textContent.pwnedWebsites },
    { value: textContent.pwnedAccountsData, label: textContent.pwnedAccounts },
    { value: textContent.pastesData, label: textContent.pastes },
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-10 border-t border-gray-10  pt-10 md:flex-row md:space-x-20 md:space-y-0">
      {infoItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center px-5 py-2">
          <p className="text-5xl font-semibold text-primary">{item.value}</p>
          <p className="text-xl font-medium text-gray-80">{item.label}</p>
        </div>
      ))}
    </div>
  );
};
