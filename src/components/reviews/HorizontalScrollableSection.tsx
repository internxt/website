import { ReviewsTextPage } from '@/assets/types/reviews';
import { CaretLeft, CaretRight, Quotes, Star } from '@phosphor-icons/react';
import { ReviewersSelector, SwitchButtonOptions } from './ReviewersSelector';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { getImage } from '@/lib/getImage';

interface HorizontalScrollableSectionProps {
  textContent: ReviewsTextPage['ReviewFromIndustrySection'];
}

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
}

interface ReviewCardProps {
  review: string;
  author: string;
}

interface TechReviewCardProps {
  title: string;
  description: string;
  author: string;
  companyLogo: string;
}

const TechReviewCard = ({ title, description, author, companyLogo }: TechReviewCardProps): JSX.Element => {
  const logoSizes: Record<string, { width: number; height: number }> = {
    'pcworld-logo.png': { width: 60, height: 32 },
    'techradar2@3x.png': { width: 45, height: 32 },
    'cloudwards.png': { width: 60, height: 32 },
  };

  const { width, height } = logoSizes[companyLogo] || { width: 30, height: 32 };

  return (
    <div className="flex h-[400px] w-[345px] flex-shrink-0 flex-col items-start justify-between gap-4 rounded-xl bg-white p-6 lg:h-[380px] lg:w-[400px] lg:gap-6 lg:rounded-16 lg:p-8">
      <div className="flex w-full flex-col gap-4 lg:gap-6">
        <div className="flex flex-row items-center justify-center gap-4">
          <Image
            src={getImage(`/images/reviews/${companyLogo}`)}
            alt={`${author.split(' - ')[1]} logo`}
            height={height}
            width={width}
            className="object-contain"
          />
          <h3 className="text-lg font-medium leading-tight text-gray-95 lg:text-xl">{title}</h3>
        </div>
        <div className="h-[1px] w-full bg-neutral-35" />
        <p className="text-sm font-normal leading-tight text-gray-55 lg:text-base">{description}</p>
      </div>
      <div className="flex w-full flex-col gap-4 lg:gap-6">
        <p className="text-sm font-semibold leading-tight text-gray-55 lg:text-base">{author}</p>
      </div>
    </div>
  );
};

const StarRating = ({ rating, maxStars = 5, size = 40 }: StarRatingProps): JSX.Element => {
  return (
    <div className="flex flex-row">
      {Array.from({ length: maxStars }, (_, index) => (
        <Star
          key={`star-${index}`}
          className={index < rating ? 'text-primary' : 'text-gray-25'}
          weight={index < rating ? 'fill' : 'regular'}
          height={size}
          width={size}
        />
      ))}
    </div>
  );
};

const ReviewCard = ({ review, author }: ReviewCardProps): JSX.Element => {
  return (
    <div className="flex h-[400px] w-[345px] flex-shrink-0 flex-col items-start justify-between gap-4 rounded-xl bg-white p-6 lg:h-[380px] lg:w-[400px] lg:gap-6 lg:rounded-16 lg:p-8">
      <div className="flex flex-col gap-4 lg:gap-6">
        <Quotes className="text-primary" height={24} width={24} weight="fill" />
        <p className="text-sm font-normal leading-tight text-gray-55 lg:text-base">{review}</p>
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <Image
          src={getImage('/images/reviews/stars.webp')}
          alt="5 star rating"
          height={24}
          width={128}
          quality={100}
          className="flex-shrink-0"
        />
        <p className="text-sm font-semibold leading-tight text-gray-55 lg:text-base">{author}</p>
      </div>
    </div>
  );
};

const HorizontalScrollableSection = ({ textContent }: Readonly<HorizontalScrollableSectionProps>): JSX.Element => {
  const rating = 4;
  const [activeSwitchPlan, setActiveSwitchPlan] = useState<SwitchButtonOptions>('Users');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handlePlanTypeChange = (plan: SwitchButtonOptions) => {
    setActiveSwitchPlan(plan);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const userReviews = textContent.reviewers.TruspilotReviews;
  const techReviews = textContent.TechReviews;

  const companies = ['PCWorld', 'TechRadar', 'Cloudwards'];
  const companyLogos = ['pcworld-logo.png', 'techradar2@3x.png', 'cloudwards.png'];

  const processAuthor = (author: string, index: number) => {
    return author.replace('{{company}}', companies[index] || '');
  };

  const currentTotalReviews =
    activeSwitchPlan === 'Users' ? userReviews.reviews.length : techReviews?.titles.length || 0;
  const maxIndex = Math.max(0, currentTotalReviews - 1);

  const showScrollControls =
    (activeSwitchPlan === 'Users' && currentTotalReviews > 1) ||
    (activeSwitchPlan === 'Tech' && !isDesktop && currentTotalReviews > 1);

  useEffect(() => {
    const updateScreenSize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const getContainerPadding = () => {
    if (!isDesktop && activeSwitchPlan === 'Tech') {
      return window.innerWidth / 2 - 172.5;
    }
    if (!isDesktop) return 80;
    if (window.innerWidth >= 1536) return 320;
    if (window.innerWidth >= 1280) return 128;
    return 40;
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      const cards = scrollContainerRef.current.querySelectorAll('.review-card');
      const card = cards[newIndex] as HTMLElement;

      if (card) {
        const container = scrollContainerRef.current;
        const cardLeft = card.offsetLeft;
        const containerPadding = getContainerPadding();

        container.scrollTo({
          left: cardLeft - containerPadding,
          behavior: 'smooth',
        });
        setCurrentIndex(newIndex);
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      const cards = scrollContainerRef.current.querySelectorAll('.review-card');
      const card = cards[newIndex] as HTMLElement;

      if (card) {
        const container = scrollContainerRef.current;
        const cardLeft = card.offsetLeft;
        const containerPadding = getContainerPadding();

        container.scrollTo({
          left: cardLeft - containerPadding,
          behavior: 'smooth',
        });
        setCurrentIndex(newIndex);
      }
    }
  };

  return (
    <section
      className="flex h-min w-full flex-col items-center justify-center gap-8 py-10 lg:gap-16 lg:py-20"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F4F8FF 100%)' }}
    >
      <div className="absolute left-8 right-8 top-0 h-[1px] bg-neutral-35 lg:left-32 lg:right-32" />

      <div className="flex w-full flex-col items-center gap-8 px-6 lg:gap-16 lg:px-20">
        <h2 className="text-30 font-bold leading-tight text-gray-95 lg:text-3xl">{textContent.title}</h2>
        <div className="flex w-full flex-col items-center gap-3 lg:gap-6">
          <p className="text-base font-medium leading-tight text-gray-95 lg:text-xl">{textContent.description}</p>
          <div className="flex w-full flex-col items-center gap-1">
            <StarRating rating={rating} />
            <p className="text-sm font-normal text-gray-55">{textContent.underStars}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <ReviewersSelector
            textContent={textContent.reviewers.reviewers}
            activeSwitchPlan={activeSwitchPlan}
            onPlanTypeChange={handlePlanTypeChange}
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-4 lg:gap-8">
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div
            className={`flex gap-8 ${
              activeSwitchPlan === 'Tech' && isDesktop
                ? 'justify-center px-6 lg:px-20'
                : activeSwitchPlan === 'Users'
                ? 'px-6 lg:px-10 xl:px-32 3xl:px-80'
                : 'justify-center'
            }`}
            style={{
              width: activeSwitchPlan === 'Tech' && isDesktop ? 'auto' : 'max-content',
              paddingLeft: activeSwitchPlan === 'Tech' && !isDesktop ? `${getContainerPadding()}px` : undefined,
            }}
          >
            {activeSwitchPlan === 'Users'
              ? userReviews.reviews.map((review, index) => (
                  <div key={`user-review-${index}`} className="review-card">
                    <ReviewCard review={review} author={userReviews.authors[index]} />
                  </div>
                ))
              : techReviews?.titles.map((title, index) => (
                  <div key={`tech-review-${index}`} className="review-card">
                    <TechReviewCard
                      title={title}
                      description={techReviews.description[index]}
                      author={processAuthor(techReviews.authors[index], index)}
                      companyLogo={companyLogos[index]}
                    />
                  </div>
                ))}
          </div>
        </div>

        {showScrollControls && (
          <div className="flex h-[48px] w-full justify-end px-6 lg:px-10 xl:px-32 3xl:px-80">
            <div className="flex w-[120px] justify-between">
              <button
                onClick={scrollLeft}
                disabled={currentIndex === 0}
                className={`flex h-[48px] w-[48px] items-center justify-center rounded-full border border-primary bg-white transition-opacity ${
                  currentIndex === 0 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-neutral-10'
                }`}
              >
                <CaretLeft className="h-[24px] w-[24px] text-primary" />
              </button>
              <button
                onClick={scrollRight}
                disabled={currentIndex >= maxIndex}
                className={`flex h-[48px] w-[48px] items-center justify-center rounded-full border border-primary bg-white transition-opacity ${
                  currentIndex >= maxIndex ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-neutral-10'
                }`}
              >
                <CaretRight className="h-[24px] w-[24px] text-primary" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HorizontalScrollableSection;
