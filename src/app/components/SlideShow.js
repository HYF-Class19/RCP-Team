import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./SlideShow.module.css";
import {options} from "../api/SpoonacularAPI"
export const SlideShow = () => {

  const [recipes, setRecipes] = useState([]);
  const [recipeID, setRecipeID] = useState([]);

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=3`,
      options
    );
    const data = await response.json();
    setRecipes(data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const itemTemplate = (recipe) => {
    setRecipeID(`id=${recipe.id}`);
    return (
      <div className={styles.randomRecipe}>
        <div className={styles.recipeDetail}>
          <h2 className={styles.recipeName}>{recipe.title}</h2>
          <Button type="submit" className={styles.recipeButton}>
            <Link
              href={{
                pathname: "/components/SingleRecipe",
                query: recipeID,
              }}
            >
              Check Recipe
            </Link>
          </Button>
        </div>

        <Image
          className="styles.recipeImage"
          src={recipe.image}
          alt={recipe.title}
          width={500}
          height={300}
        />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={classNames("align-content-center", styles.slide)}>
        {recipes?.length > 0 ? (
          <Carousel
            value={recipes}
            itemTemplate={itemTemplate}
            numVisible={1}
            numScroll={1}
            className="carouselStyle"
            circular
            autoplayInterval={5000}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
