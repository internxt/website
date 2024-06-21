import { getImage } from '@/lib/getImage';
import Image from 'next/legacy/image';

export default function FileParallaxSection() {
  return (
    <section className="pointer-events-none relative flex h-96 select-none items-center justify-center overflow-hidden bg-gray-5 md:h-[440px]">
      <div
        className="flex shrink-0 transform-gpu items-center justify-center space-x-12 will-change-transform md:space-x-20"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          transform: 'rotateX(55deg) rotateY(6deg) rotateZ(-45deg)',
        }}
      >
        {[
          [
            { url: 'doc/redesign-proposal.webp', alt: 'Redesign proposal' },
            { url: 'ico/photos-cloud-service.svg', alt: 'Private cloud storage' },
            { url: 'img/send-files.webp', alt: 'Send files securely' },
            { url: 'doc/internxt-growth-strategy.webp', alt: 'Internxt Growth strategy' },
          ],
          [
            { url: 'img/secure-photo-service.webp', alt: 'Secure photo Storage' },
            { url: 'vid/file-upload.webp', alt: 'File upload' },
            { url: 'doc/internxt-open-source-code.webp', alt: 'Internxt open source' },
            { url: 'img/secure-photo-storage.webp', alt: 'Secure photo storage' },
          ],
          [
            { url: 'doc/internxt-year-review.webp', alt: 'Internxt year review' },
            { url: 'ico/private-cloud-service.svg', alt: 'Private cloud storage' },
            { url: 'img/upload-file.webp', alt: 'File upload' },
            { url: 'ico/safe-cloud-service.svg', alt: 'Private cloud storage' },
          ],
          [
            { url: 'ico/internxt-safe-storage.svg', alt: 'Private cloud storage' },
            { url: 'img/secure-file-upload.webp', alt: 'Secure file upload' },
            { url: 'ico/safe-cloud-storage.svg', alt: 'Private cloud storage' },
            { url: 'img/share-files.webp', alt: 'Share files securely' },
          ],
        ].map((col, i) => (
          <div
            key={`col-${i}`}
            className={`flex flex-col space-y-10 drop-shadow-float ${
              i % 2 === 0 ? ' animate-scroll-y pt-32' : 'animate-scroll-y-reverse pb-32'
            } ${['z-[4]', 'z-[3]', 'z-[2]', 'z-1'][i]}`}
          >
            {col.concat(col, col, col).map((item, i) => (
              <div key={i} className="relative h-72 w-36 overflow-hidden rounded-lg md:w-52">
                <Image
                  src={getImage(`/images/home/files-parallax/${item.url}`)}
                  alt={item.alt}
                  layout="fill"
                  loading="lazy"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
