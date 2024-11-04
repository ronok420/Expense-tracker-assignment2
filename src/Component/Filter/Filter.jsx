import React, { useState } from 'react';
import I5 from '../Svg/I5';
import I4 from '../Svg/I4';
import I3 from '../Svg/I3';
import I2 from '../Svg/I2';
import I1 from '../Svg/I1';



const Filter = ({ categories, selectedCategories, setSelectedCategories }) => {
  // Handle checkbox toggle for category filtering
  const toggleCategory = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((cat) => cat !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  return (
    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="py-1" role="none">
        {categories.map((category, index) => (
          <label
            key={index}
            className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 rounded-md text-gray-600"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
