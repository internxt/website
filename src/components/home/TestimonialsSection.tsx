import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { FiveStars } from '../shared/StarsRate';
import { ReactNode } from 'react';

interface TestimonialProps {
  testimonial: {
    review: string;
    testimonialName: string;
    company: string;
    testimonialImage: string;
  };
  textColor?: string;
}

interface TestimonialsSectionProps {
  textContent: any;
  bgColor?: string;
  textColor?: string;
  textComponent?: ReactNode;
}

const AvatarAndText = ({ testimonial, textColor }: TestimonialProps): JSX.Element => (
  <div className="flex h-[60px] flex-row items-center gap-3 ">
    <div className="flex h-10 w-10 items-center rounded-full">
      <Image src={testimonial.testimonialImage} width={40} height={40} alt="FixThePhoto Avatar" />
    </div>
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-3">
        <p className={`text-justify text-xl  font-semibold ${textColor}`}>{testimonial.testimonialName}</p>
        <FiveStars totalStars={5} />
      </div>
      <p className={`text-lg ${textColor}`}>{testimonial.company}</p>
    </div>
  </div>
);

const TestimonialsSection = ({
  textContent,
  bgColor,
  textComponent,
  textColor,
}: TestimonialsSectionProps): JSX.Element => {
  const testimonials = [
    {
      review: textContent.cards[0].review,
      testimonialName: textContent.cards[0].name,
      company: textContent.cards[0].enterprise,
      testimonialImage: getImage('/images/home/testimonials/avatar1.webp'),
    },
    {
      review: textContent.cards[1].review,
      testimonialName: textContent.cards[1].name,
      company: textContent.cards[1].enterprise,
      testimonialImage: getImage('/images/home/testimonials/avatar3.webp'),
    },
  ];

  return (
    <section className={`overflow-hidden ${bgColor ?? 'bg-white'} lg:py:20 px-5 py-10 lg:px-16`}>
      <div className="flex flex-col items-center gap-20">
        <div className="flex max-w-5xl">
          {textComponent}
          <p className="text-center text-3xl font-semibold !leading-tight sm:text-5xl">
            {textContent.title.normal} <span className="text-primary">{textContent.title.blue}</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row" key={testimonials[0].review}>
          <div className="flex max-w-[375px] flex-col gap-3 lg:h-[300px] ">
            <AvatarAndText testimonial={testimonials[0]} textColor={textColor} />
            <p className={`text-start text-xl ${textColor ? textColor : 'text-gray-80'}`}>{testimonials[0].review}</p>
          </div>

          <Image
            src={getImage('/logos/featured/valencia_cf.webp')}
            width={300}
            height={300}
            alt="Internxt x ValenciaCF"
          />

          <div className="flex max-w-[375px] flex-col  gap-3 lg:h-[300px] ">
            <AvatarAndText testimonial={testimonials[1]} textColor={textColor} />
            <p className={`text-start text-xl ${textColor ? textColor : 'text-gray-80'}`}>{testimonials[1].review}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
