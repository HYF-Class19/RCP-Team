import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./SlideShow.module.css";

export const SlideShow = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b1fda73e9emsh70026538b9aaba3p10ebbejsnfb187dbbd62b",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

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
