/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState, useEffect, useRef } from "react";
import "./SingleRecipe.css";
import Image from "next/image";
import alarm from "../../../../public/assets/alarm.jpeg";
import people from "../../../../public/assets/people.jpeg";
import Link from "next/link";
import { ShowRating } from "./ShowRating";
import { UpdateRating } from "./UpdateRating";
import "primeicons/primeicons.css";
import { db } from "../../services/Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Toast } from "primereact/toast";
import {options} from "../api/SpoonacularAPI"

export const SingleRecipe = (props) => {
  const [checkFavorites, setCheckFavorites] = useState([]);
  const [recipe, setRecipes] = useState([]);
  const [recipeId, setRecipeID] = useState();
  const [recipeTitle, setRecipeTitle] = useState();
  const [recipeTime, setRecipeTime] = useState();
  const [recipeServings, setRecipeServings] = useState();
  const [recipeImage, setRecipeImage] = useState();
  const toast = useRef(null);
  const [version, setVersion] = useState(1);

  const favoritesCollectionRef = collection(db, "favorites");

  useEffect(() => {
    const getFavoriteRecipes = async () => {
      const data = await getDocs(favoritesCollectionRef);
      setCheckFavorites(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getFavoriteRecipes();
    console.log(checkFavorites);
  }, [version]);

  const createFavorites = async () => {
    const checkDuplicate = {
      image: recipeImage,
      servings: recipeServings,
      time: recipeTime,
      title: recipeTitle,
      recipeID: recipeId,
    };

    const duplicateObject = checkFavorites.some(
      (obj) => obj.recipeID === checkDuplicate.recipeID
    );

    if (!duplicateObject) {
      await addDoc(favoritesCollectionRef, {
        image: recipeImage,
        servings: recipeServings,
        time: recipeTime,
        title: recipeTitle,
        recipeID: recipeId,
      });
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Recipe added to Favorites",
        life: 3000,
      });
      setVersion(version + 1);
      console.log("item added");
    } else {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Recipe already exists! Please select another recipe",
        life: 4500,
      });
    }
  };

  useEffect(() => {

    const fetchRecipe = async (props) => {
      const response = await fetch(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${props.dishId}/information?includeNutrition=true`,
        options
      );
      const recipeInfo = await response.json();
      setRecipes(recipeInfo);
      setRecipeID(recipe.id);
      setRecipeTitle(recipe.title),
        setRecipeServings(Number(recipe.servings)),
        setRecipeTime(recipe.readyInMinutes),
        setRecipeImage(recipe.image);
    };

    fetchRecipe(props);
  }, [recipe, props]);

  const getIngredients = (recipe) => {
    const ingredients = recipe.extendedIngredients;
    let ingredient = [];
    for (let i = 0; i < ingredients.length; i++) {
      ingredient.push(<li>{ingredients[i].original} </li>);
    }

    return <ul className="ingStyle">{ingredient}</ul>;
  };

  const getInstructions = (recipe) => {
    const instructions = recipe.analyzedInstructions[0].steps;
    let instruction = [];
    for (let i = 0; i < instructions.length; i++) {
      instruction.push(<li> {instructions[i].step}</li>);
    }
    return <ol className="insStyle">{instruction}</ol>;
  };

  const displayRecipe = (recipe) => {
    return (
      <>
        <div>
          <Toast ref={toast} />
          <h2>
            <Link href="#">HOME</Link> {">"} Dish Recipe
          </h2>
        </div>
        <div className="singleRecipe">
          <p className="dishName fontStyle">{recipe.title}</p>
          <div className="dishInfo">
            {/* <Image src={rating} alt="rating" width={80} height={50} /> */}
            <ShowRating dishId={recipe.id} />
            <div className="flex gap-3 align-items-center">
              <Image src={alarm} alt="time" width={40} height={40} />
              <p>{recipe.readyInMinutes} min</p>
            </div>
            <div className="flex gap-3 align-items-center">
              <Image src={people} alt="people" width={40} height={40} />
              <p>{recipe.servings} persons</p>
            </div>
          </div>
          <Image
            className="dishImage"
            src={recipe.image}
            alt="Dish pic"
            width={500}
            height={300}
          />
          <p className="fontStyle">Ingredients</p>
          <div>{getIngredients(recipe)} </div>
          <p className="fontStyle">Instructions</p>
          {recipe.analyzedInstructions ? (
            <div>{getInstructions(recipe)} </div>
          ) : (
            <p>No Instructions available...</p>
          )}
          <div className="rateSection">
            <div className="rating">
              <p>Rate</p>
              <UpdateRating dishId={recipe.id} />
            </div>
            <div className="rating" onClick={() => createFavorites()}>
              <p>Add to favorite</p>
              <div className="heart">
                <i className="pi pi-heart-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {recipe.title ? <div>{displayRecipe(recipe)} </div> : <p>Loading...</p>}
    </div>
  );
};

export default SingleRecipe;
