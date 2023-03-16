export default function FileParallaxSection() {
  return (
    <section className="relative flex h-[440px] items-center justify-center overflow-hidden bg-gray-5">
      <div className="mask-radial-blur absolute inset-0 z-10" />
      <div className="drop-shadow-float-soft">
        <div
          className="pointer-events-none flex items-center justify-center space-x-20"
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
              className={`flex flex-col space-y-20 ${
                i % 2 === 0 ? 'animate-scroll-y pt-32' : 'animate-scroll-y-reverse pb-32'
              }`}
            >
              {col.concat(col, col, col).map((item, i) => (
                // <div key={`item-${i}`} className="aspect-3/4 w-52 shrink-0 rounded-xl bg-white ring-1 ring-black/5" />
                <img src={`/images/home/files-parallax/${item}`} className="w-52 rounded-lg" draggable={false} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
