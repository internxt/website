// Objeto para almacenar en caché las URLs de las imágenes
const imageCache: Record<string, string> = {};

export function getImage(pathname: string, shouldCache: boolean = false): string {
  const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDFLARE_STATIC_ASSETS_FULL_PATH}${pathname}`;

  if (shouldCache && imageCache[pathname]) {
    return imageCache[pathname];
  }

  if (shouldCache) {
    imageCache[pathname] = imageUrl;
  }

  return imageUrl;
}
