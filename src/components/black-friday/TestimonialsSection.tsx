import React from 'react';
import TestimonialSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/black-friday/CtaSection';

const TestimonialsSection = ({ textContent, lang }) => {
  return (
    <section className="overflow-hidden">
       <TestimonialSection textContent={textContent.TestimonialSection}/>
       <CtaSection textContent={textContent.CtaSection} lang={undefined} />
    </section>
  );
};
export default TestimonialsSection;
