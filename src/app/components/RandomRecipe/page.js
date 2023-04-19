'use client';

import { useState, useEffect } from 'react';
import { options } from '../../services/Spoonacular';
import { SingleRecipe } from '../SingleRecipe/SingleRecipe';

// import Link from "next/link";

export default function Home() {
  const [recipeID, setRecipeID] = useState();
  const fetchRecipeID = async () => {
    const response = await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?&number=1`,
      options
    );
    const data = await response.json();
    const recipe = data.recipes;
    const singleRecipe = recipe[0];
    setRecipeID(singleRecipe.id);
  };

  useEffect(() => {
    fetchRecipeID();
  }, []);
  return (
    <>
      <SingleRecipe dishId={recipeID} />
    </>
  );
}
