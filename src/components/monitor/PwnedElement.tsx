'use client';

export const PwnedElement = () => {
  return (
    <div className=" flex max-w-[1019px] flex-row pb-5">
      <div className=" max-w-[1019px] space-y-5 bg-white px-10 pb-8 pt-8">
        <p className="text-2xl font-bold text-gray-100">"Canva"</p>
        <p className="font-regular text-lg text-gray-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus eget enim quis feugiat. Morbi
          condimentum luctus diam, sit amet tincidunt purus.
        </p>
        <div className="inline-flex space-x-2">
          <p className="text-lg font-bold text-gray-80">Compromised data:</p>
          <p className="font-regular text-lg text-gray-80">
            Email addresses, Geographic locations, Names, Passwords, Usernames
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gray-5 p-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
          <p className="text-blue-500 font-bold">Logo</p>
        </div>
      </div>
    </div>
  );
};
