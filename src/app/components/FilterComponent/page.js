'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import './page.css';
import { Filter } from './Filter';
import { ShowRecipes } from './ShowRecipes';

export default function Home() {
  const getId = useSearchParams();

  const [ingredientsData, setIngredientsData] = useState();
  const [excludeIngredientsData, setExcludeIngredientsData] = useState();
  const [dietsData, setDietsData] = useState();
  const [menuOriginData, setMenuOrigin] = useState();

  useEffect(() => {
    setIngredientsData([getId.get('ingredientsData')]);
    setExcludeIngredientsData([getId.get('excludeIngredientsData')]);
    setDietsData({
      diets: [getId.get('dietsData')],
    });
    setMenuOrigin({
      menus: [getId.get('menuOriginData')],
    });
  }, [getId]);

  const setSearchNewRecipes = (
    includeIngredients,
    excludedIngredients,
    selectedDiets,
    selectedMenus
  ) => {
    setIngredientsData(includeIngredients);
    setExcludeIngredientsData(excludedIngredients);
    setDietsData(selectedDiets);
    setMenuOrigin(selectedMenus);
  };

  return (
    <>
      <div>
        <h2>
          <Link href="#">Home</Link> {'>'} Recipes
        </h2>
      </div>
      <div className="flex flex-wrap justify-content-center">
        <Filter setSearchNewRecipes={setSearchNewRecipes} />
        <ShowRecipes
          ingredientsData={ingredientsData}
          excludeIngredientsData={excludeIngredientsData}
          dietsData={dietsData}
          menuOriginData={menuOriginData}
        />
      </div>
    </>
  );
}
