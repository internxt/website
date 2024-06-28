import styles from '../../components/techradar-discount/Background.module.scss';
import Link from 'next/link';
import { SIGNUP_DRIVE_WEB } from '@/constants';

interface SignupSectionProps {
  textContent: Record<string, any>;
}

export const SignupSection = ({ textContent }: SignupSectionProps) => (
  <section className="overflow-hidden">
    <div className="flex flex-col items-center justify-center space-y-8 px-4 py-14 text-white">
      <div className="flex max-w-[595px] flex-col space-y-4 text-center">
        <p className="text-4xl font-semibold">{textContent.title}</p>
        <p className="text-xl font-normal">{textContent.description}</p>
      </div>
      <Link
        href={SIGNUP_DRIVE_WEB}
        target="_blank"
        rel="noopener noreferrer"
        className="flex cursor-pointer rounded-lg bg-white px-6 py-2 hover:bg-blue-10"
      >
        <p className="text-base font-semibold text-primary">{textContent.createAccount}</p>
      </Link>
    </div>
    <div
      className={`absolute top-0 left-0 -z-10 flex h-full w-full ${styles.partnerHeroSection} pointer-events-none origin-center`}
    />
  </section>
);
