import React from 'react';
import styles from './Employee.module.css'

const Employee = ({ info }) => {

  return (
    <div className="relative w-full sm:w-56 bg-neutral-20 rounded-2xl shadow-lg overflow-hidden select-none">
      <div className="overlay absolute h-full w-full bg-black bg-opacity-5"></div>
      <div className={`gradient ${styles.gradient} absolute h-full w-full`}></div>
      <div className="absolute h-full w-full flex flex-col justify-end p-8 sm:p-6">
        <a href={`https://es.linkedin.com/in/${info.linkedin}`} target="_blank" className="w-10 h-10 sm:w-6 sm:h-6 mb-4 sm:mb-2"><img className="w-10 h-10 sm:w-6 sm:h-6" src={`../../icons/social/white/linkedin.svg`} draggable="false"/></a>
        <p className="text-2xl sm:text-lg text-white font-semibold select-text">{info.name}</p>
        <p className="text-xl sm:text-xs text-neutral-40 select-text"><span className="mr-2">—</span>{info.position}</p>
      </div>
      <img src={`../../images/about/team/${info.photoId}.webp`} draggable="false"/>
    </div>
  );
};

export default Employee;
