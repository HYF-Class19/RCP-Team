'use client';

import "primereact/resources/themes/saga-green/theme.css";     
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './page.css';

import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { SlideShow } from './components/SlideShow';
import { Footer } from './components/Footer';
import { Filter } from './components/FilterComponent/Filter';
import { ShowRecipes } from './components/FilterComponent/ShowRecipes';
import { useState } from 'react';

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
      <Header />
      <NavBar />
      <SlideShow />
      <div className="filter-showcase">
        <Filter setSearchNewRecipes={setSearchNewRecipes} />
        <ShowRecipes
          ingredientsData={ingredientsData}
          excludeIngredientsData={excludeIngredientsData}
          dietsData={dietsData}
          menuOriginData={menuOriginData}
        />
      </div>
      <Footer />
    </>
  );
}
