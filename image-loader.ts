const PRODUCTION = process.env.NODE_ENV === 'production';

export default function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  if (!PRODUCTION) return src;

  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto'];

  const normalisedSrc = /^https?:\/\//.test(src) ? src : src.replace(/^\//, '');

  return `/cdn-cgi/image/${params.join(',')}/${normalisedSrc}`;
}
