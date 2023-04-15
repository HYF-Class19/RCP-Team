"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

// css import
import "./page.css";

// components import

import { Filter } from "./Filter";
import { ShowRecipes } from "./ShowRecipes";

export default function Home() {
  const getId = useSearchParams();

  const [ingredientsData, setIngredientsData] = useState([
    getId.get("ingredientsData"),
  ]);
  const [excludeIngredientsData, setExcludeIngredientsData] = useState([
    getId.get("excludeIngredientsData"),
  ]);
  const [dietsData, setDietsData] = useState({
    diets: [getId.get("dietsData")],
  });
  const [menuOriginData, setMenuOrigin] = useState({
    menus: [getId.get("menuOriginData")],
  });

  // console.log("Page Parent", ingredientsData);
  // console.log("Page Parent", excludeIngredientsData);
  // console.log("Page Parent", dietsData);
  // console.log("Page Parent", menuOriginData);

  const setSearchNewRecipes = (
    includeIngredients,
    excludedIngredients,
    selectedDiets,
    selectedMenus
  ) => {
    console.log("button pressed");
    setIngredientsData(includeIngredients);
    setExcludeIngredientsData(excludedIngredients);
    setDietsData(selectedDiets);
    setMenuOrigin(selectedMenus);
  };

  return (
    <>
      <div>
        <h2>
          <Link href="#">HOME</Link> {">"} Recipes
        </h2>
      </div>
      <div className="filter-showcase">
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
