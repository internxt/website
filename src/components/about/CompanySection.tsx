import { UilAngleRightB } from '@iconscout/react-unicons';
import { getImage } from '@/lib/getImage';

const CompanySection = ({ textContent }) => (
  <section className="overflow-hidden">
    <div className="content flex flex-col items-center">
      {/* Images */}
      <div className="relative w-full max-w-6xl px-4 md:px-6">
        <div className="relative z-10 grid grid-flow-row grid-cols-6 gap-2">
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-4 lg:h-80">
            <img
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/Internxt-headquarters.webp')}
              draggable="false"
              alt="Internxt headquarters"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-2 lg:h-80">
            <img
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/Internxt-office.webp')}
              draggable="false"
              alt="Internxt office"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-3 lg:h-80">
            <img
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/Internxt-team.webp')}
              draggable="false"
              alt="Internxt team"
            />
          </div>
          <div className="col-span-6 h-60 select-none overflow-hidden rounded-3xl bg-red-old-10 sm:h-72 md:col-span-3 lg:h-80">
            <img
              loading="eager"
              className="h-full w-full object-cover object-center"
              src={getImage('/images/about/photos/team-at-Internxt.webp')}
              draggable="false"
              alt="Team at Internxt"
            />
          </div>
        </div>

        <img
          loading="lazy"
          className="pointer-events-none absolute top-2/3 right-0 translate-y-1/2 scale-400 select-none blur-xl saturate-150 filter"
          src={getImage('/images/about/assets/stain-small-1.webp')}
          draggable="false"
          alt="stain image"
        />
      </div>

      {/* Our values */}
      <div className="relative z-10 flex flex-col justify-center space-y-10 px-6 pt-20 pb-10 text-left sm:items-center sm:space-y-20">
        <h4 className="text-4xl font-medium">{textContent.values.title}</h4>

        <div className="flex flex-col space-y-10 lg:space-y-20">
          <div className="flex w-full flex-col flex-wrap space-y-10 lg:flex-row lg:space-y-0 lg:space-x-16">
            <div className="flex w-full flex-col space-y-3 sm:px-20 md:max-w-xl md:px-0 lg:max-w-sm">
              <p className="text-2xl font-medium">{textContent.values.items.achieve.title}</p>
              <p className="text-lg">{textContent.values.items.achieve.description}</p>
            </div>

            <div className="flex w-full flex-col space-y-3 sm:px-20 md:max-w-xl md:px-0 lg:max-w-sm">
              <p className="text-2xl font-medium">{textContent.values.items.privacy.title}</p>
              <p className="text-lg">{textContent.values.items.privacy.description}</p>
            </div>
          </div>

          <div className="flex w-full flex-col flex-wrap space-y-10 lg:flex-row lg:space-y-0 lg:space-x-16">
            <div className="flex w-full flex-col space-y-3 sm:px-20 md:max-w-xl md:px-0 lg:max-w-sm">
              <p className="text-2xl font-medium">{textContent.values.items.family.title}</p>
              <p className="text-lg">{textContent.values.items.family.description}</p>
            </div>

            <div className="flex w-full flex-col space-y-3 sm:px-20 md:max-w-xl md:px-0 lg:max-w-sm">
              <p className="text-2xl font-medium">{textContent.values.items.growth.title}</p>
              <p className="text-lg">{textContent.values.items.growth.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Careers at Internxt */}
      <div className="relative flex flex-col items-center justify-center space-y-4 px-6 py-20 text-center">
        <h4 className="z-10 text-4xl font-medium">{textContent.careers.title}</h4>
        <a
          className="z-10 flex flex-row items-center space-x-1 text-lg font-medium text-primary hover:underline sm:text-base"
          href="https://www.linkedin.com/company/internxt/jobs/"
          target="_blank"
          rel="noreferrer"
        >
          <span>{textContent.careers.link}</span>
          <UilAngleRightB className="h-4 w-4" />
        </a>
        <img
          loading="lazy"
          className="pointer-events-none absolute top-1/2 left-0 translate-y-1/2 scale-400 select-none blur-3xl saturate-150 filter"
          src={getImage('/images/about/assets/stain-small-2.webp')}
          draggable="false"
          alt="stain image"
        />
      </div>
    </div>
  </section>
);

export default CompanySection;
