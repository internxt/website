import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const CertificationsSection = () => {
    const certifications = [   
        { src: '/images/datacenters-and-certifications/ISO.webp', width: 40, alt: 'ISO Certification' },
        { src: '/images/datacenters-and-certifications/HipaaCompilance.webp', width: 85, alt: 'HIPAA Compliance' },
        { src: '/images/datacenters-and-certifications/AICPA.webp', width: 100, alt: 'AICPA Certification' },
        { src: '/images/datacenters-and-certifications/GDPR.webp', width: 122, alt: 'GDPR Compliance' },
        { src: '/images/datacenters-and-certifications/ENS.webp', width: 115, alt: 'ENS Certification' },
        { src: '/images/datacenters-and-certifications/CSA.webp', width: 40, alt: 'CSA Certification' },
    ];
  return (
    <section
      className="flex h-min w-full flex-col items-center justify-between gap-8 px-5 pt-28 lg:flex-row lg:gap-16 lg:px-10 lg:py-10 lg:pt-10 xl:px-32 3xl:px-80"
    >
     <div className="flex flex-row items-center gap-16 w-full justify-between">
        {certifications.map((cert, index) => (
            <Image
                key={cert.src} 
                src={getImage(cert.src)}
                alt={cert.alt}
                width={cert.width}
                height={40}
                quality={100}
            />
        ))}
     </div>
     
    </section>
  );
};
