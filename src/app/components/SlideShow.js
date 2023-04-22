import React, { useState, useEffect } from "react";
import { options } from "../services/Spoonacular";

import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./SlideShow.module.css";

export const SlideShow = () => {
  const [recipes, setRecipes] = useState([]);

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
    let recipeID = `id=${recipe.id}`;
    return (
      <div className={classNames(styles.recipeContainer)}>
        <div className={classNames(styles.recipeDetail)}>
          <h2
            className={classNames("w-full text-center p-3", styles.recipeName)}
          >
            {recipe.title}
          </h2>
          <div className="flex justify-content-center align-items-center">
            <Button
              type="submit"
              className={classNames(
                "m-4 p-3 border-round-lg",
                styles.recipeButton
              )}
            >
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
        </div>
        <div>
          <Image
            className={classNames(
              "flex flex-shrink-1 border-round-lg",
              styles.recipeImage
            )}
            src={recipe.image}
            alt={recipe.title}
            width={500}
            height={300}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={classNames("border-round-lg", styles.slide)}>
        {recipes?.length > 0 ? (
          <Carousel
            value={recipes}
            itemTemplate={itemTemplate}
            numVisible={1}
            numScroll={1}
            circular
            autoplayInterval={5000}
            // autoplay={true}
          />
        ) : (
          <p className="flex align-content-center justify-content-center text-white">
            Loading...
          </p>
        )}
      </div>
    </div>
  );
};
