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

  // Absolute URLs are passed through as-is; for local paths the leading slash
  // must be dropped, otherwise the resulting URL contains a double slash and
  // Cloudflare does not resolve the origin image.
  const normalisedSrc = /^https?:\/\//.test(src) ? src : src.replace(/^\//, '');

  return `/cdn-cgi/image/${params.join(',')}/${normalisedSrc}`;
}
