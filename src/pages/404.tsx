import Footer from '@/components/layout/footers/Footer';
import Navbar from '@/components/layout/navbars/Navbar';
import navbarLang from '@/assets/lang/en/navbar.json';
import footerLang from '@/assets/lang/en/footer.json';
import { House, Lifebuoy, Question } from '@phosphor-icons/react';
export default function Custom404() {
  const cards = [
    {
      icon: House,
      title: 'Return Home',
      description: 'Go back to the Internxt homepage.',
      urlRedirect: 'https://internxt.com',
    },
    {
      icon: Question,
      title: 'Visit Help Center',
      description: 'Troubleshoot common issues and browse our FAQ.',
      urlRedirect: 'https://help.internxt.com/',
    },
    {
      icon: Lifebuoy,
      title: 'Contact Support',
      description: 'Reach out to our Support Team at hello@internxt.com.',
      urlRedirect: 'mailto:hello@internxt.com',
    },
  ];

  return (
    <>
      <Navbar textContent={navbarLang} lang={'en'} cta={['default']} fixed />
      <section className="overflow-hidden px-5 py-32">
        <div className="content flex flex-col items-center justify-center space-y-4 lg:pt-10">
          <div className="flex flex-col rounded-lg bg-gray-5 px-4 py-2">
            <p className="text-xl font-medium text-gray-80">Error 404</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-24">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-6xl font-bold text-gray-100">Nothing to see here...</h1>
              <p className="text-xl text-gray-80">The page you are looking for could not be found.</p>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-10">
              {cards.map((card, index) => (
                <div
                  role="button"
                  className="flex h-full cursor-pointer select-none flex-col items-center justify-center space-y-4 rounded-lg bg-gray-1 px-4 py-8 text-center"
                  key={index}
                  onClick={() => {
                    window.open(card.urlRedirect, '_self');
                  }}
                >
                  <card.icon size={32} className="text-primary" />
                  <p className="text-lg font-medium text-gray-100">{card.title}</p>
                  <p className="w-full max-w-[200px] text-base text-gray-80">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer textContent={footerLang} lang={'en'} />
    </>
  );
}
