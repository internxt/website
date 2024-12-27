import Script from 'next/script';

const AhrefsAnalytics = ({ lang }: { lang: string }) => {
  if (lang !== 'en') return null; // Solo carga para inglés
  return <Script src="https://analytics.ahrefs.com/analytics.js" data-key="AJfAg8JhxYbS3NkIKdlang" defer />;
};

export default AhrefsAnalytics;
