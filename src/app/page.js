'use client';
import { useState } from 'react';

// css import 
import './page.css';

// components import
import { SlideShow } from './components/SlideShow';
import { Filter } from './components/FilterComponent/Filter';
import { ShowRecipes } from './components/FilterComponent/ShowRecipes';


export default function Home() {
  const [ingredientsData, setIngredientsData] = useState();
  const [excludeIngredientsData, setExcludeIngredientsData] = useState();
  const [dietsData, setDietsData] = useState();
  const [menuOriginData, setMenuOrigin] = useState();

  // console.log('Page Parent', ingredientsData);
  // console.log('Page Parent', excludeIngredientsData);
  // console.log('Page Parent', dietsData);
  // console.log('Page Parent', menuOriginData);

  const setSearchNewRecipes = (
    includeIngredients,
    excludedIngredients,
    selectedDiets,
    selectedMenus
  ) => {
    console.log('button pressed');
    setIngredientsData(includeIngredients);
    setExcludeIngredientsData(excludedIngredients);
    setDietsData(selectedDiets);
    setMenuOrigin(selectedMenus);
  };

  return (
    <>

      <SlideShow />
      <div className="flex flex-wrap justify-content-center ">
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
