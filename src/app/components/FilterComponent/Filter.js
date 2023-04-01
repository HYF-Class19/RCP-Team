'use client';
import React, { useState } from 'react';
import { Dietary } from './Dietary';
import { ExcludeIngredients } from './ExcludeIngredients';
import './Filter.css';
import { IncludeIngredients } from './IncludeIngredients';
import { MenuOrigin } from './MenuOrigin';
import { Button } from 'primereact/button';

export const Filter = () => {
  const [includeIngredients, setIncludeIngredients] = useState();
  const [excludedIngredients, setExcludeIngredients] = useState();
  const [selectedDiets, setSelectedDiets] = useState();
  const [selectedMenus, setSelectedMenus] = useState();

  const getIngredients = (ingredients) => {
    setIncludeIngredients(ingredients);
  };

  const getExcludedIngredients = (excludedIngredient) => {
    setExcludeIngredients(excludedIngredient);
  };

  const getDiets = (selectedDiet) => {
    setSelectedDiets(selectedDiet);
  };

  const getMenus = (selectedMenu) => {
    setSelectedMenus(selectedMenu);
  };

  const handleClick = () => {
    console.log('includeIngredients', includeIngredients);
    console.log('excludeIngredients', excludedIngredients);
    console.log('selectedDiets', selectedDiets);
    console.log('selectedMenus', selectedMenus);
  };

  return (
    <div className="filter">
      <div className="filter-titles">
        <h1>Filter my recipe...</h1>
        <h2>INGREDIENT</h2>
      </div>
      <div className="select-ingredients">
        <IncludeIngredients callbackIngredients={getIngredients} />
        <ExcludeIngredients callbackExcluded={getExcludedIngredients} />
        <MenuOrigin callbackMenu={getMenus} />
        <Dietary callbackDiets={getDiets} />
      </div>
      <Button
        onClick={() => handleClick()}
        label="Search"
        className="btn-filter"
      />
    </div>
  );
};
