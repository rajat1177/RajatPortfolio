import React from 'react';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { TypewriterEffectSmooth } from './ui/TypeWriter';

const TechStack = () => {
  const techStack = [
    { name: 'Next.js', icon: '/next.svg' },
    { name: 'React', icon: '/react.svg' },
    { name: 'Express', icon: '/express.svg' },
    { name: 'MongoDB', icon: '/mongo.svg' },
    { name: 'Tailwind CSS', icon: '/tail.svg' },
    { name: 'C++', icon: '/c++.svg' },
    { name: 'JavaScript', icon: '/js.svg' },
    { name: 'Python', icon: '/python.svg' },
  ];

  const words = [
    { text: "Overview", className: "text-2xl lg:text-4xl" },
    { text: "of", className: "text-2xl lg:text-4xl" },
    { text: "my", className: "text-2xl lg:text-4xl" },
    { text: "Tech Stack.", className: "text-purple dark:text-purple text-2xl lg:text-4xl" },
  ];

  return (
    <BackgroundBeamsWithCollision className="flex flex-col justify-evenly items-center">
      <div className="flex flex-col items-center justify-center  gap-[5vh] w-full p-4 sm:mt-16">
        {/* Title Section */}
        
        <TypewriterEffectSmooth cursorClassName="text-2xl h-[2rem]" words={words} />
        
        

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center m-4 lg:m-6">
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 sm:w-16 sm:h-16" />
              <p className="text-white mt-2 text-sm sm:text-xs font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default TechStack;
