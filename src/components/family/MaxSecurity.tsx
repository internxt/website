import { FamilyText } from '@/assets/types/family';
import Button from '../shared/Button';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface MaxSecurityProps {
  textContent: FamilyText['MaximumSecuritySection'];
}

export const MaxSecurity = ({ textContent }: MaxSecurityProps): JSX.Element => {
  return (
    <section className="overflow-hidden px-5 py-20">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex max-w-[772px] flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-semibold text-gray-100">{textContent.title}</h2>
            <h3 className="text-xl text-gray-80">{textContent.description}</h3>
          </div>
          <Button text={textContent.cta} onClick={() => (window.location.href = '#priceTable')} />
        </div>
        <Image
          src={getImage('/images/family/Internxt_family_plans.webp')}
          alt="Internxt Family Plans"
          width={925}
          height={410}
        />
      </div>
    </section>
  );
};
