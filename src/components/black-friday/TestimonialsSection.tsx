import { getImage } from '@/lib/getImage';
import Image from 'next/image';
import { FiveStars } from '../shared/StarsRate';

interface TestimonialProps {
  testimonial: {
    review: string;
    testimonialName: string;
    company: string;
    testimonialImage: string;
  };
}

interface TestimonialsSectionProps {
  textContent: any;
  bgColor?: string;
}

const AvatarAndText = ({ testimonial }: TestimonialProps): JSX.Element => (
  <div className="flex flex-row items-center gap-3">
    <div className="flex h-10 w-10 rounded-full">
      <Image src={testimonial.testimonialImage} width={40} height={40} alt="FixThePhoto Avatar" />
    </div>
    <div className="flex flex-col">
      <p className="text-xl font-semibold text-white">{testimonial.testimonialName}</p>
      <p className="text-lg text-white">{testimonial.company}</p>
    </div>
  </div>
);

const TestimonialsSection = ({ textContent, bgColor }: TestimonialsSectionProps): JSX.Element => {
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
      testimonialImage: getImage('/images/home/testimonials/avatar2.webp'),
    },
    {
      review: textContent.cards[2].review,
      testimonialName: textContent.cards[2].name,
      company: textContent.cards[2].enterprise,
      testimonialImage: getImage('/images/home/testimonials/avatar3.webp'),
    },
  ];

  return (
    <section className={`overflow-hidden ${bgColor ?? 'bg-white'} py-20 px-5 lg:px-16`}>
      <div className="flex flex-col items-center gap-20">
        <div className="flex max-w-5xl">
          <p className="text-center text-4xl font-semibold !leading-tight sm:text-5xl text-white">
            {textContent.title}
          </p>
        </div>
        <div className="flex w-full flex-row  flex-wrap justify-center gap-12">
          {testimonials.map((testimonial) => (
            <div className="flex max-w-[375px] flex-col justify-between gap-3" key={testimonial.review}>
              <div className="flex flex-col gap-3">
                <FiveStars totalStars={5} />
                <p className="text-xl text-white">{testimonial.review}</p>
              </div>
              <AvatarAndText testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
