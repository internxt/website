
import Button from '@/components/shared/Button';
import { formatText } from '@/components/utils/format-text';

const HeroSection = ({ 
  textContent,
  percent
 }) => {
  return (
    <section className="overflow-hidden flex flex-col lg:flex-row bg-gray-1 items-center justify-center">
      <div className="flex flex-col items-start justify-center p-6">
      
        <span className="text-6xl font-bold text-gray-100">{textContent.title.previousBlueText} </span>
        <span className="text-primary text-6xl font-bold">
          {formatText(textContent.title.blueText, {
                      percent: percent ?? '80',
                    })} 
        </span>
        <span className="text-xl font-bold text-gray-100 ">{textContent.description} </span>
        <Button text={textContent.cta}/>
      </div>
      <div className="flex flex-col items-end justify-center p-6">
        <img 
          src='/images/special-offer/Group 1194.png' 
          alt="img-1194" 
          className="rounded-lg" 
          style={{ width: '562px', height: '529px' }} 
        />
      </div>
    </section>
  );
};

export default HeroSection;