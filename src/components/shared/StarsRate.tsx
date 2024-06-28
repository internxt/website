import { Star } from '@phosphor-icons/react';

interface FiveStarsProps {
  totalStars: number;
}

export const FiveStars = ({ totalStars }: FiveStarsProps): JSX.Element => (
  <div className="flex flex-row gap-1.5">
    {new Array(totalStars).fill(0).map((_, index) => (
      <Star className="text-yellow" weight="fill" size={18} key={index} />
    ))}
  </div>
);
