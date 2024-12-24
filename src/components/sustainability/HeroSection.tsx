import { SustainabilityText } from '@/assets/types/sustainability';
import Header from '../shared/Header';
import { Database, GlobeHemisphereWest, Heart, Leaf, Sun } from '@phosphor-icons/react';

export interface HeroSectionsProps {
  textContent: SustainabilityText['HeroSection'];
}

const FeatureSection = ({ textContent }: HeroSectionsProps) => {
  const goals = [
    {
      title: textContent.goals.element1,
      icon: Sun,
      bgColor: 'bg-green-40',
      size: 60,
      position: 'mt-8',
      zIndex: 'z-0',
      lgDisplay: true,
    },
    {
      title: textContent.goals.element2,
      icon: Leaf,
      bgColor: 'bg-green-25',
      size: 60,
      position: '',
      zIndex: 'z-20',
      lgDisplay: true,
    },
    {
      title: textContent.goals.element3,
      icon: Database,
      bgColor: 'bg-green-40',
      size: 60,
      position: 'mt-8',
      zIndex: 'z-0',
      lgDisplay: true,
    },
    {
      title: textContent.goals.element4,
      icon: GlobeHemisphereWest,
      bgColor: 'bg-green-55',
      size: 60,
      position: ' mr-[-50px]',
      zIndex: 'z-10',
      lgDisplay: false,
    },
    {
      title: textContent.goals.element5,
      icon: Heart,
      bgColor: 'bg-green-40',
      size: 60,
      position: '',
      zIndex: 'z-5',
      lgDisplay: false,
    },
  ];

  return (
    <section className="relative flex w-full flex-col overflow-hidden pt-14">
      <div className="flex flex-col items-center py-16 pb-20 lg:py-20">
        {/* Main title */}
        <div className="flex flex-col items-center justify-center space-y-10 px-6 text-center">
          <Header>
            <span className="text-green-1">{textContent.title.greenText}</span>
            {textContent.title.normalText}
          </Header>
          <h2 className="mb-8 w-full max-w-[850px] text-xl font-normal text-gray-80 sm:mb-10">
            {textContent.description}
          </h2>
        </div>

        {/* Display goals */}
        <div className="grid hidden grid-cols-3 pt-6 lg:grid">
          {goals.map(
            (goal, index) =>
              goal.lgDisplay && (
                <div
                  key={index}
                  className={`flex h-[300px] w-[300px] transform flex-col items-center justify-center rounded-full ${goal.bgColor} border-4 border-white text-center ${goal.position} ${goal.zIndex}`}
                >
                  <goal.icon size={goal.size} className="mb-2 text-gray-100" />
                  <p className="max-w-[200px] text-2xl font-medium text-gray-100">{goal.title}</p>
                </div>
              ),
          )}

          <div className="col-span-3 -mt-[105px] flex justify-center">
            {goals.map(
              (goal, index) =>
                !goal.lgDisplay && (
                  <div
                    key={index}
                    className={`flex h-[300px] w-[300px] transform flex-col items-center justify-center rounded-full ${goal.bgColor} border-4 border-white text-center ${goal.position} ${goal.zIndex}`}
                  >
                    <goal.icon size={goal.size} className="mb-2 text-gray-100" />
                    <p className="max-w-[200px] text-2xl font-medium text-gray-100">{goal.title}</p>
                  </div>
                ),
            )}
          </div>
        </div>

        <div className="block grid grid-cols-3 items-center justify-center pt-4 lg:hidden">
          <div className="col-span-3 flex justify-center">
            {goals.map(
              (goal, index) =>
                goal.lgDisplay &&
                index % 2 !== 0 && (
                  <div
                    key={index}
                    className={`flex h-[200px] w-[200px] transform flex-col items-center justify-center rounded-full ${goal.bgColor} z-40 border-4 border-white text-center`}
                  >
                    <goal.icon size={50} className="mb-2 text-gray-100" />
                    <p className="max-w-[150px] text-xl font-medium text-gray-100">{goal.title}</p>
                  </div>
                ),
            )}
          </div>

          <div className="col-span-3 -mt-[100px] flex justify-center">
            {goals.map(
              (goal, index) =>
                !goal.lgDisplay && (
                  <div
                    key={index}
                    className={`flex h-[200px] w-[200px] transform flex-col items-center justify-center rounded-full ${goal.bgColor} ml-[-20px] mr-[-20px]  mt-10 border-4 border-white text-center ${goal.zIndex}`}
                  >
                    <goal.icon size={50} className="mb-2 text-gray-100" />
                    <p className="max-w-[150px] text-xl font-medium text-gray-100">{goal.title}</p>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
