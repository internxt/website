import Link from 'next/link';

interface RedirectButtonProps {
  children: React.ReactNode;
  url: string;
  className?: string;
  target?: string;
  rel?: string;
}

export const RedirectButton = ({
  url,
  className,
  target = '_blank',
  rel,
  children,
}: RedirectButtonProps): JSX.Element => (
  <Link id={`redirect-button-id`} href={url} target={target} rel={rel} className={className}>
    {children}
  </Link>
);
