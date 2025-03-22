import { CaretRight } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

export const Label = ({ label, path }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(path);
      }}
      className="z-10 hidden items-center gap-1.5 rounded-[20px] bg-gray-100 py-2 pl-3 pr-2 ring-4 ring-primary lg:flex"
    >
      <p className="text-5xl font-bold text-white">{label}</p>
      <CaretRight size={36} className="text-primary" />
    </button>
  );
};
