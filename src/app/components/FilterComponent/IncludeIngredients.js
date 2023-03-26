'use client';

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './IncludeIngredients.css';

export const IncludeIngredients = () => {
  const [value, setValue] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleIngredients = () => {
    value ? (setIngredients([...ingredients, value]), setValue('')) : null;
  };

  const deleteIngredients = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
    console.log('setIngredients', newIngredients);
  };

  return (
    <div className="wrapper">
      <input
        value={value}
        type="text"
        placeholder="I want to include..."
        onChange={handleChange}
      />
      <i onClick={handleIngredients} className="pi pi-arrow-circle-right"></i>
      <div className="selected-ingredients">
        {ingredients.map((ingredient, index) => (
          <button
            className="ingredient-btn"
            key={uuidv4()}
            onClick={() => deleteIngredients(index)}
          >
            {ingredient}
            <i className="pi pi-minus-circle"></i>
          </button>
        ))}
      </div>
    </div>
  );
};
