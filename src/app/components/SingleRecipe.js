"use client";
import React, { useState, useEffect } from "react";
import "./SingleRecipe.css";
import { Button } from "primereact/button";

export const SingleRecipe = (props) => {
  const [recipe, setRecipes] = useState([]);
  const fetchRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${props.dishId}/information?includeNutrition=true&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await response.json();
    setRecipes(data);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const displayRecipe = (recipe) => {
    return <h1>{recipe.title}</h1>;
  };

  return (
    <div>
      {recipe.title ? <div>{displayRecipe(recipe)} </div> : <p>Loading...</p>}
    </div>
  );
};

export default SingleRecipe;
