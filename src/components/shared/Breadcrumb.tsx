import Link from 'next/link';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  return (
    <nav className={className} aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-2 bg">
        {items.map((item, index) => (
          <li key={item.url}>
            {index > 0 && <span className='pr-2'>/</span>}
            {index === items.length - 1 ? (
              <span>
                {item.name}
              </span>
            ) : (
              <Link href={item.url}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};