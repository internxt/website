'use client';

import { useRouter } from 'next/navigation';

const FileConverter = () => {
  const router = useRouter();
  const cards = [
    {
      title: 'Convert EXCEL to PDF',
      description: 'Convert Excel to PDF online, easily and free.',
      route: '/file-converter/excel-to-pdf',
    },
    {
      title: 'Convert DOCX to PDF',
      description: 'Convert Word to PDF online, easily and free.',
      route: '/file-converter/docx-to-pdf',
    },
    {
      title: 'Convert images to PDF',
      description: 'Convert images to PDF online, easily and free.',
      route: '/file-converter/images-to-pdf',
    },
  ];

  return (
    <section className="flex min-h-screen items-center justify-center overflow-hidden bg-gray-5">
      <div className="flex flex-row space-x-10">
        {cards.map((card, index) => (
          <button
            onClick={() => {
              router.push(card.route);
            }}
            key={card.title}
            className="flex max-w-[350px] cursor-pointer flex-col space-y-2 rounded-xl p-10 shadow-subtle-hard"
          >
            <p className="text-2xl font-semibold">{card.title}</p>
            <p className="text-lg font-medium text-gray-80">{card.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default FileConverter;
