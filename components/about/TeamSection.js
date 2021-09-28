import React from 'react';
import Employee from './Employee'

const TeamSection = ({ textContent }) => {

  return (
    <section>
      <div className="content">

        <div className="max-w-xl text-left sm:text-center mx-auto my-24 md:my-40 px-8">
          <p className="mb-4 text-lg text-neutral-700">
            “{textContent.quote}”
          </p>
          <p className="text-neutral-100">
            <span className="mr-3">—</span>
            <span>Fran Villalba Segarra, CEO</span>
          </p>
        </div>

        <div className="grid gap-8 w-auto grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center my-16 md:my-32 px-8">
          {textContent.employees.map((employee, index) => (
            <Employee key={index} info={employee}/>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
