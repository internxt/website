/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { User } from 'phosphor-react';

const Testimonial = ({ url, photo, name, title, quote }) => (
  <a
    href={url ?? undefined}
    rel="noopener noreferrer"
    target="_blank"
    className="flex flex-col items-start space-y-5 rounded-xl bg-gray-1 p-6 text-left text-sm"
  >
    {/* Person card */}
    <div className="flex flex-row items-center space-x-4">
      {/* Image */}
      {photo ? (
        <img
          className="flex h-14 w-14 flex-shrink-0 rounded-full bg-gray-5"
          src={`./images/home/testimonials/${photo}`}
          alt="user avatar"
          draggable={false}
        />
      ) : (
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-gray-20 text-gray-20">
          <User size={28} />
        </div>
      )}
      {/* Description */}
      <div className="flex flex-col">
        <p className="text-base font-medium">{name}</p>
        <p className="text-gray-50">{title}</p>
      </div>
    </div>

    {/* Quote */}
    <p className="text-gray-80">{quote}</p>
  </a>
);

export default Testimonial;
