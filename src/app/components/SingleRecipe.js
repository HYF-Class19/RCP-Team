"use client";
import React, { useState, useEffect } from "react";
import "./SingleRecipe.css";
import { Button } from "primereact/button";

export const SingleRecipe = (props) => {
  const fetchRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${props.dishId}/information?includeNutrition=true&apiKey=yourkey`
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return <h1>SingleRecipe</h1>;
};

export default SingleRecipe;
