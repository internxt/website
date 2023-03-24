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
          ['doc/1.png', 'ico/figma.svg', 'img/2.png', 'doc/3.png'],
          ['img/8.png', 'vid/1.png', 'doc/4.png', 'img/6.png'],
          ['doc/2.png', 'ico/word.svg', 'img/1.png', 'ico/audio.svg'],
          ['ico/folder.svg', 'img/3.png', 'ico/pdf.svg', 'img/4.png'],
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
                src={`/images/home/files-parallax/${item}`}
                className="isolate w-36 rounded-lg md:w-52"
                draggable={false}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
