import React from 'react';

const FooterSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center py-20 pt-16">
        <p className="text-sm font-medium md:text-xl">{textContent.FooterSection.copyright}</p>

        <div className="flex flex-row space-x-5 text-gray-50">
          <a href="https://www.internxt.com/privacy">{lang !== 'es' ? <p>Privacy</p> : <p>Privacidad</p>}</a>
          <a href="https://help.internxt.com/en/">{lang !== 'es' ? <p>Contact us</p> : <p>Contacta con nosotros</p>}</a>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
