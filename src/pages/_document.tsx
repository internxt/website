import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import { isDarkModePage } from '@/theme.config';

export default function Document({ __NEXT_DATA__ }: DocumentProps) {
  const darkMode = isDarkModePage(__NEXT_DATA__.page);
  return (
    <Html className={darkMode ? 'dark' : undefined}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
