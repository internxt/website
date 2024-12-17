import { SustainabilityText } from '@/assets/types/sustainability';
import Header from '../shared/Header';
import { Database, GlobeHemisphereWest, Heart, Leaf, Sun } from '@phosphor-icons/react';

export interface HeroSectionsProps {
  textContent: SustainabilityText['HeroSection'];
}

const FeatureSection = ({ textContent }: HeroSectionsProps) => {
  const goals = [
    { title: textContent.goals.element1, icon: Sun },
    { title: textContent.goals.element2, icon: Leaf },
    { title: textContent.goals.element3, icon: Database },
    { title: textContent.goals.element4, icon: GlobeHemisphereWest },
    { title: textContent.goals.element5, icon: Heart },
  ];

  return (
    <section className="relative flex w-full flex-col overflow-hidden pt-14">
      <div className="flex flex-col items-center py-16 pb-20 lg:py-20">
        {/* Main title */}
        <div className="flex flex-col items-center justify-center space-y-10 px-6 text-center">
          <Header>
            <span className="text-green">{textContent.title.greenText}</span>
            {textContent.title.normalText}
          </Header>
          <h2 className="mb-8 w-full max-w-[850px] text-xl font-normal text-gray-80 sm:mb-10">
            {textContent.description}
          </h2>
        </div>

        {/* Display goals */}
        <div className="relative grid grid-cols-2 justify-items-center pt-6">
          {goals.map((goal, index) => {
            const bgColor = index === 1 ? 'bg-green-25' : index === 4 ? 'bg-green-55' : 'bg-green-40';

            return (
              <div
                key={index}
                className={`flex h-[300px] w-[300px] transform flex-col items-center justify-center rounded-full ${bgColor} text-center `}
              >
                <goal.icon size={60} className="mb-2 text-gray-100" />
                <p className="max-w-[200px] text-2xl font-medium text-gray-100">{goal.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
