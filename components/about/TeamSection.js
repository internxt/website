import React from 'react';
import Employee from './Employee'

const TeamSection = ({ textContent }) => {

  return (
    <section>
      <div className="content">
        <p className={`flex flex-col mx-auto text-center px-6 text-4xl my-24`}>
          <p>{textContent.title}</p>
        </p>

        <div className="grid gap-8 w-auto grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center mb-20 px-8">
          {textContent.employees.map((employee, index) => (
            <Employee key={index} info={employee}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
