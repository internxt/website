import React from 'react';
import styles from './Employee.module.css';

const Employee = ({ info }) => (
  <div className="relative w-full sm:w-56 bg-neutral-20 rounded-2xl shadow-lg overflow-hidden select-none">
    <div className="overlay absolute h-full w-full bg-black bg-opacity-5" />
    <div className={`gradient ${styles.gradient} absolute h-full w-full`} />
    <div className="absolute h-full w-full flex flex-col justify-end p-8 sm:p-6">
      <a href={`https://es.linkedin.com/in/${info.linkedin}`} target="_blank" className="w-10 h-10 sm:w-6 sm:h-6 mb-4 sm:mb-2" rel="noreferrer">
        <img loading="lazy" className="w-10 h-10 sm:w-6 sm:h-6" src="../../icons/social/white/linkedin.svg" draggable="false" alt="linkedin icon" />
      </a>
      <p className="text-2xl sm:text-lg text-white font-semibold select-text">{info.name}</p>
      <p className="text-xl sm:text-xs text-neutral-40 select-text">
        <span className="mr-2">—</span>
        {info.position}
      </p>
    </div>
    <img loading="lazy" src={`../../images/about/team/${info.photoId}.webp`} draggable="false" alt="Internxt Team Member" />
  </div>
);

export default Employee;
