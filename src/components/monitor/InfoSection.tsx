'use client';

export const InfoSection = ({ textContent }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 border-t border-gray-10 pb-10 pt-10 md:flex-row md:space-x-20 md:space-y-0">
      {/* Pawned Websites */}
      <div className="flex flex-col items-center justify-center px-5 py-2">
        <p className="text-5xl font-semibold text-primary">817</p>
        <p className="text-xl font-medium text-gray-80">{textContent.pwnedWebsites}</p>
      </div>
      {/* Pawned Accounts */}
      <div className="flex flex-col items-center justify-center px-5 py-2">
        <p className="text-5xl font-semibold text-primary">14,169,230,255</p>
        <p className="text-xl font-medium text-gray-80">{textContent.pwnedAccounts}</p>
      </div>
      {/* Pastes */}
      <div className="flex flex-col items-center justify-center px-5 py-2">
        <p className="text-5xl font-semibold text-primary">115,796</p>
        <p className="text-xl font-medium text-gray-80">{textContent.pastes}</p>
      </div>
    </div>
  );
};
