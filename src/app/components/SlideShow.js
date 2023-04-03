import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import Image from "next/image";
import Link from "next/link";
import styles from "./SlideShow.module.css";

export const SlideShow = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeID, setRecipeID] = useState([]);

  const fetchRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=3&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
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
      <div className="flex align-content-center">
        <div className="flex-1 align-items-stretch">
          <h2 className="mb-1">{recipe.title}</h2>
          <Button
            type="submit"
            label="Check Recipe"
            severity="secondary"
            icon="pi pi-search"
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
        <div className="flex-1 align-items-stretch">
          <Image
            className="w-8 shadow-2"
            src={recipe.image}
            alt={recipe.title}
            width={525}
            height={350}
          />
        </div>
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
            autoplayInterval={3000}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
