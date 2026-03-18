import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const CertificationsSection = () => {
    const certifications = [   
        { src: '/images/datacenters-and-certifications/ISO.webp', width: 48, alt: 'ISO Certification' },
        { src: '/images/datacenters-and-certifications/HipaaCompilance.webp', width: 102, alt: 'HIPAA Compliance' },
        { src: '/images/datacenters-and-certifications/AICPA.webp', width: 120, alt: 'AICPA Certification' },
        { src: '/images/datacenters-and-certifications/GDPR.webp', width: 146, alt: 'GDPR Compliance' },
        { src: '/images/datacenters-and-certifications/ENS.webp', width: 55, alt: 'ENS Certification' },
        { src: '/images/datacenters-and-certifications/CSA.webp', width: 48, alt: 'CSA Certification' },
    ];
  return (
    <section
      className="flex h-min w-full  flex-col items-center justify-between gap-8 px-5 pt-28 lg:pt-0 lg:flex-row lg:gap-16 lg:px-10 lg:py-10 xl:px-32 3xl:px-80"
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
