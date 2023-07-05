import React, { useState } from 'react';

const CustomInput = () => {
  const [value, setValue] = useState(50); // Valor inicial del rango

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="relative">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="bg-gray-200 h-2 w-64 cursor-pointer appearance-none rounded-full outline-none"
      />
      <div
        className="absolute top-0 left-0 h-2 bg-gray-10"
        style={{ width: `${value}%`, transition: 'width 0.3s' }}
      ></div>
      <div
        className="bg-blue-500 absolute top-1/2 h-4 w-4 -translate-y-1/2 transform rounded-full"
        style={{ left: `${value}%` }}
      ></div>
    </div>
  );
};

export default CustomInput;
