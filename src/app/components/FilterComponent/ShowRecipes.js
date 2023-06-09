import React, { useState, useEffect } from 'react';
import './ShowRecipes.css';
import { RecipeCard } from './RecipeCard';
import { Paginate } from './Paginate';
import { options } from '../../services/Spoonacular';

// example for the complex filter for the future
const diet = {};

export const ShowRecipes = ({
  ingredientsData,
  excludeIngredientsData,
  dietsData,
  menuOriginData,
}) => {
  const [recipes, setRecipes] = useState([]);
  let url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?addRecipeInformation=True&cuisine=european,french,american&number=45&diet=${diet}`;

  if (menuOriginData) {
    //console.log(menuOriginData.menus);
    url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?addRecipeInformation=True&&diet=${dietsData.diets.join()}&cuisine=${menuOriginData.menus.join()}&includeIngredients=${ingredientsData.join()}&excludeIngredients=${excludeIngredientsData.join()}&number=45`;
  }

  const [loading, setLoading] = useState(true);

  // HANDLE PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    // FETCH INITIAL RECIPE RESULTS WILL BE RECIPES WITH A SPECIFIC ID
    const fetchRecipes = async (url) => {
      let detailedRecipes = [];
      let localData = window.localStorage.getItem(url);

      if (localData) {
        localData = JSON.parse(localData);
      }

      if (
        localData &&
        localData.recipes &&
        Date.now() - localData.time < 60000
      ) {
        detailedRecipes = localData.recipes;
      }

      if (detailedRecipes.length === 0) {
        const response = await fetch(url, options);
        const data = await response.json();
        detailedRecipes = data.results;

        window.localStorage.setItem(
          url,
          JSON.stringify({
            recipes: detailedRecipes,
            time: Date.now(),
          })
        );
      }

      setRecipes(detailedRecipes);
      setLoading(false);
    };

    fetchRecipes(url);
  }, [url]);

  // HANDLE PAGINATION
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recipes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(recipes.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="recipes-panel">
      <div className="show-recipes">
        <RecipeCard recipes={currentPosts} loading={loading} />
      </div>
      <div className="show-pages">
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={recipes.length}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
    </div>
  );
};
