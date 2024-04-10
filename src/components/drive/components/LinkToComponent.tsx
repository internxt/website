import { ArrowUpRight } from '@phosphor-icons/react';

export const LinkToComponent = ({ text }) => {
  return (
    <div className="flex flex-row items-center space-x-1 text-primary">
      <p className="text-lg font-semibold">{text}</p>
      <ArrowUpRight size={20} weight="bold" />
    </div>
  );
};
