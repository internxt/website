import { getImage } from '@/lib/getImage';
import Image from 'next/image';

interface EncryptedCloudSolutionProps {
  textContent: any;
}

export const EncryptedCloudSolution = ({ textContent }: EncryptedCloudSolutionProps): JSX.Element => {
  return (
    <section
      style={{
        background: 'radial-gradient(50% 50% at 50% 50%, #0058DB 0%, #161616 100%)',
      }}
      className="overflow-hidden px-5 py-20"
    >
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center text-white">
          <h2 className="text-3xl font-semibold lg:text-5xl">{textContent.title}</h2>
          <h3 className="max-w-[774px] text-xl">{textContent.description}</h3>
        </div>

        <div className="flex">
          <Image src={getImage('/images/business/internxt_b2b.webp')} alt="Internxt B2B" width={925} height={410} />
        </div>
      </div>
    </section>
  );
};
