'use client';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ExcludeIngredients.css';

export const ExcludeIngredients = ({ callbackExcluded }) => {
  const [excludeValue, setExcludeValue] = useState('');
  const [excludeIngredients, setExcludeIngredients] = useState([]);

  const handleChange = (e) => {
    setExcludeValue(e.target.value);
  };

  const handleIngredients = () => {
    excludeValue
      ? (setExcludeIngredients([...excludeIngredients, excludeValue]),
        setExcludeValue(''))
      : null;
  };

  const deleteIngredients = (index) => {
    const newIngredients = excludeIngredients.filter((_, i) => i !== index);
    setExcludeIngredients(newIngredients);
  };

  callbackExcluded(excludeIngredients);

  return (
    <div className="wrapper">
      <input
        value={excludeValue}
        type="text"
        placeholder="I want to exclude ..."
        onChange={handleChange}
      />
      <i onClick={handleIngredients} className="pi pi-arrow-circle-right"></i>
      <div className="selected-ingredients">
        {excludeIngredients.map((excludeIngredient, index) => (
          <button
            className="ingredient-btn"
            key={uuidv4()}
            onClick={() => deleteIngredients(index)}
          >
            {excludeIngredient}
            <i className="pi pi-minus-circle"></i>
          </button>
        ))}
      </div>
    </div>
  );
};
