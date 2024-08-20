import { CaretRight } from '@phosphor-icons/react';
import Link from 'next/link';

const BLOG_POST_URL = 'https://blog.internxt.com/internxt-security-audit/';

const SecuritumSection = ({ textContent }): JSX.Element => {
  return (
    <section className="overflow-hidden">
      <div className="bg- flex flex-col bg-gray-1 py-20">
        <div className="flex flex-col items-center justify-center space-y-16 px-6">
          {/* Text content */}
          <div className="flex max-w-[597px] flex-col space-y-10 text-center">
            <p className="text-5xl font-semibold text-gray-100">{textContent.title}</p>
            <Link
              href={BLOG_POST_URL}
              target="_blank"
              className="flex flex-row items-center justify-center gap-2 text-xl text-primary hover:underline"
            >
              {textContent.subtitle}
              <CaretRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritumSection;
