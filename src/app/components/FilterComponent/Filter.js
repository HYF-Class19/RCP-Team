'use client';
import React from 'react';
import { Dietary } from './Dietary';
import { ExcludeIngredients } from './ExcludeIngredients';
import './Filter.css';
import { IncludeIngredients } from './IncludeIngredients';
import { MenuOrigin } from './MenuOrigin';
import { Button } from 'primereact/button';

export const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-titles">
        <h1>Filter my recipe...</h1>
        <h2>INGREDIENT</h2>
      </div>
      <div className="select-ingredients">
        <IncludeIngredients />
        <ExcludeIngredients />
        <MenuOrigin />
        <Dietary />
      </div>
      <Button label="Search" className="btn-filter" />
    </div>
  );
};
