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
            { url: 'doc/redesign-proposal.png', alt: 'Redesign proposal' },
            { url: 'ico/photos-cloud-service.svg', alt: 'Private cloud storage' },
            { url: 'img/send-files.png', alt: 'Send files securely' },
            { url: 'doc/internxt-growth-strategy.png', alt: 'Internxt Growth strategy' },
          ],
          [
            { url: 'img/secure-photo-service.png', alt: 'Secure photo Storage' },
            { url: 'vid/file-upload.png', alt: 'File upload' },
            { url: 'doc/internxt-open-source-code.png', alt: 'Internxt open source' },
            { url: 'img/secure-photo-storage.png', alt: 'Secure photo storage' },
          ],
          [
            { url: 'doc/internxt-year-review.png', alt: 'Internxt year review' },
            { url: 'ico/private-cloud-service.svg', alt: 'Private cloud storage' },
            { url: 'img/upload-file.png', alt: 'File upload' },
            { url: 'ico/safe-cloud-service.svg', alt: 'Private cloud storage' },
          ],
          [
            { url: 'ico/internxt-safe-storage.svg', alt: 'Private cloud storage' },
            { url: 'img/secure-file-upload.png', alt: 'Secure file upload' },
            { url: 'ico/safe-cloud-storage.svg', alt: 'Private cloud storage' },
            { url: 'img/share-files.png', alt: 'Share files securely' },
          ],
        ].map((col, i) => (
          <div
            key={`col-${i}`}
            className={`flex flex-col space-y-12 drop-shadow-float md:space-y-20 ${
              i % 2 === 0 ? ' animate-scroll-y pt-32' : 'animate-scroll-y-reverse pb-32'
            } ${['z-[4]', 'z-[3]', 'z-[2]', 'z-1'][i]}`}
          >
            {col.concat(col, col, col).map((item, i) => (
              <img
                key={i}
                src={`/images/home/files-parallax/${item.url}`}
                className="isolate w-36 rounded-lg md:w-52"
                draggable={false}
                alt={item.alt}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
