import { getImage } from '@/lib/getImage';
import Image from 'next/image';

export const CertificationsSection = () => {
    const certifications = [
        { src: '/images/datacenters-and-certifications/ISO.webp', width: 48, alt: 'ISO Certification' },
        { src: '/images/datacenters-and-certifications/HipaaCompilance.webp', width: 102, alt: 'HIPAA Compliance' },
        { src: '/images/datacenters-and-certifications/AICPA.webp', width: 120, alt: 'AICPA Certification' },
        { src: '/images/datacenters-and-certifications/GDPR.webp', width: 146, alt: 'GDPR Compliance' },
        { src: '/images/datacenters-and-certifications/ENS.webp', width: 110, alt: 'ENS Certification' },
        { src: '/images/datacenters-and-certifications/CSA.webp', width: 48, alt: 'CSA Certification' },
    ];

  return (
    <section className="flex h-min w-full flex-col items-center justify-between gap-8 px-5 lg:pt-0 lg:flex-row lg:gap-16 lg:px-10 lg:py-10 xl:px-32 3xl:px-80">

      <div className="relative w-full overflow-hidden lg:hidden">
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            align-items: center;
            gap: 2.5rem;
            width: max-content;
            animation: marquee 18s linear infinite;
          }
        `}</style>
        <div className="marquee-track">
          {[...certifications, ...certifications].map((cert, index) => (
            <Image
              key={`${cert.src}-${index}`}
              src={getImage(cert.src)}
              alt={cert.alt}
              width={cert.width}
              height={40}
              quality={100}
            />
          ))}
        </div>
      </div>

      {/* Desktop: static row */}
      <div className="hidden lg:flex flex-row items-center gap-16 w-full justify-between">
        {certifications.map((cert) => (
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
