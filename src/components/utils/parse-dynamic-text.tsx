import { Fragment, ReactNode } from 'react';

export type Replacements = Record<string, string | number | undefined>;

const isPending = (value: string | number | undefined) =>
  value === undefined || value === null || value === '' || String(value) === '0';

export const ValueSkeleton = ({ className = 'h-4 w-12' }: { className?: string }) => (
  <span className={`inline-block animate-pulse rounded bg-gray-10 align-middle ${className}`} />
);

/**
 * Replaces {{key}} placeholders at render time. Coupon and price values come from a
 * client-only Stripe fetch, so they are not available while the page is rendered on the
 * server. Instead of leaking the raw placeholder or a 0% discount, a skeleton is rendered
 * in place of the number until the real value arrives.
 */
export const parseDynamicText = (
  text: unknown,
  replacements: Replacements,
  skeletonClassName?: string,
): ReactNode => {
  if (typeof text !== 'string') return text as ReactNode;

  const parts = text.split(/(\{\{\w+\}\})/g);
  if (parts.length === 1) return text;

  return (
    <>
      {parts.map((part, index) => {
        const match = /^\{\{(\w+)\}\}$/.exec(part);
        if (!match) return <Fragment key={index}>{part}</Fragment>;

        const value = replacements[match[1]];
        return isPending(value) ? (
          <ValueSkeleton key={index} className={skeletonClassName} />
        ) : (
          <Fragment key={index}>{String(value)}</Fragment>
        );
      })}
    </>
  );
};
