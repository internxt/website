import React from 'react';

const FooterSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center py-5">
        <p className="text-md font-medium">{textContent.FooterSection.copyright}</p>

        <div className="flex flex-row space-x-5 text-gray-50">
          <a href="https://www.internxt.com/privacy" className="text-sm">
            {lang !== 'es' ? <p>Privacy</p> : <p>Privacidad</p>}
          </a>
          <a href="https://help.internxt.com/en/" className="text-sm">
            {lang !== 'es' ? <p>Contact us</p> : <p>Contacta con nosotros</p>}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
