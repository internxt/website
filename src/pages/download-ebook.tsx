import { useRouter } from 'next/router';
import { useEffect } from 'react';

const pdfUrl = {
  'online-privacy-ebook': '/inxt-library/Guide_to_Online_Privacy.pdf',
  'child-safety-ebook': '/inxt-library/Keeping_Kids_Safe_Online.pdf',
};

const pdfName = {
  'online-privacy-ebook': 'Guide_to_Online_Privacy.pdf',
  'child-safety-ebook': 'Keeping_Kids_Safe_Online.pdf',
};

const DownloadEbook = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.split('#')[1];

    if (hash) {
      const link = document.createElement('a');
      link.href = pdfUrl[hash];
      link.download = `${pdfName[hash]}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      router.push('/internxt-library');
    }
  }, []);

  return <></>;
};

export default DownloadEbook;
