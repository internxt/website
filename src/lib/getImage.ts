export function getImage(pathname): string {
  return `${process.env.NEXT_PUBLIC_CLOUDFLARE_STATIC_ASSETS_FULL_PATH}${pathname}`;
}
