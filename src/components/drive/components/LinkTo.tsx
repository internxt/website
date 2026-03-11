import { ArrowUpRight } from '@phosphor-icons/react';
import Link from 'next/link';

interface LinkTo {
  text: string;
  linkToRedirect: string;
}

export const LinkTo = ({ text, linkToRedirect }: LinkTo) => {
  return (
    <Link href={linkToRedirect} className="flex flex-row items-start justify-start gap-2 text-primary">
      <p className="text-base font-medium  w-max">{text}</p>
      <ArrowUpRight size={20} weight="bold" className="flex flex-nowrap pt-1" />
    </Link>
  );
};
