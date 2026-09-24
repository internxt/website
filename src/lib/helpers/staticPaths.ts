import fs from 'fs';
import path from 'path';

export const buildLocalizedPaths = (locales: string[] = [], slugs: string[]) =>
  locales.flatMap((locale) => slugs.map((filename) => ({ params: { filename }, locale })));

export const getLangFolderSlugs = (folder: string, excluded: string[]) =>
  fs
    .readdirSync(path.join(process.cwd(), 'src/assets/lang/en', folder))
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace(/\.json$/, ''))
    .filter((slug) => !excluded.includes(slug));
