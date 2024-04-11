import { ArrowUpRight } from '@phosphor-icons/react';
import Link from 'next/link';

interface LinkTo {
  text: string;
  linkToRedirect: string;
}

export const LinkTo = ({ text, linkToRedirect }: LinkTo) => {
  return (
    <Link href={linkToRedirect} target="_blank" className="flex flex-row items-center space-x-1 text-primary">
      <p className="text-lg font-semibold">{text}</p>
      <ArrowUpRight size={20} weight="bold" />
    </Link>
  );
};
