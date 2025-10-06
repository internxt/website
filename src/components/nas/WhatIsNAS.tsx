import { NASPageText } from '@/assets/types/nas';

interface WhatIsNASSectionProps {
  textContent: NASPageText['WhatIsNASSection'];
}

export default function WhatIsNASSection({ textContent }: Readonly<WhatIsNASSectionProps>): JSX.Element {
  return (
    <section className="flex h-min w-full flex-col items-center justify-center gap-8 overflow-hidden bg-white py-10 pb-10 lg:h-min lg:gap-16 lg:p-20">
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:bottom-0 lg:left-32 lg:right-32" />

      <div className="flex h-min w-[345px] flex-col items-center justify-center gap-8 text-center lg:w-full lg:gap-16">
        <p className="text-30 font-bold leading-tight text-gray-95 lg:text-5xl">{textContent.title}</p>
        <div className="flex flex-col items-center gap-6 text-center lg:w-[736px] lg:text-start">
          {textContent.description.map((description: string) => (
            <p className="text-base font-normal leading-tight text-gray-55 lg:text-xl">{description}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
