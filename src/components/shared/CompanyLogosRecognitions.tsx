import Image from 'next/image';

import { getImage } from '@/lib/getImage';

export const CompanyLogosRecognitions = () => (
  <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-20 lg:space-y-0">
    <div className="flex flex-auto flex-shrink-0 pb-12 sm:p-0 sm:px-12">
      <div className="flex flex-shrink-0 flex-col items-center space-y-3">
        <Image
          src={getImage(`/images/about/logos/forbes.webp`)}
          width={125}
          height={32}
          loading={'lazy'}
          alt="Forbes Logo"
          draggable={false}
        />
      </div>
    </div>
    <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
      <div className="flex flex-shrink-0 flex-col items-center space-y-3">
        <Image
          src={getImage('/images/about/logos/southsummit.webp')}
          width={70}
          height={32}
          loading={'lazy'}
          alt="South Summit Logo"
          draggable={false}
        />
      </div>
    </div>
    <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
      <div className="flex flex-shrink-0 flex-col items-center space-y-3">
        <Image
          src={getImage('/images/about/logos/tnw.webp')}
          alt="TNW Logo"
          draggable={false}
          width={112}
          height={32}
          loading={'lazy'}
        />
      </div>
    </div>
    <div className="flex flex-auto flex-shrink-0 flex-col pb-12 sm:p-0 sm:px-12">
      <div className="flex flex-shrink-0 flex-col items-center space-y-3">
        <Image
          src={getImage('/images/about/logos/startupvalencia.webp')}
          alt="Startup Valencia Logo"
          width={90}
          height={32}
          loading={'lazy'}
          draggable={false}
        />
      </div>
    </div>
  </div>
);
