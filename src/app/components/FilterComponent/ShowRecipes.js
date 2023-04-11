import React, { useState, useEffect } from 'react';
import './ShowRecipes.css';
import { RecipeCard } from './RecipeCard';
import { Paginate } from './Paginate';

// example for the complex filter for the future
const diet = {};

export const ShowRecipes = ({
  ingredientsData,
  excludeIngredientsData,
  dietsData,
  menuOriginData,
}) => {
  const [recipes, setRecipes] = useState([]);
  let url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?addRecipeInformation=True&cuisine=chinese&number=45&diet=${diet}`;

  if (menuOriginData) {
    console.log('we have a menu now');
    console.log(menuOriginData.menus);
    url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?addRecipeInformation=True&&diet=${dietsData.diets.join()}&cuisine=${menuOriginData.menus.join()}&includeIngredients=${ingredientsData.join()}&excludeIngredients=${excludeIngredientsData.join()}&number=45`;
  }

  const [loading, setLoading] = useState(true);

  // HANDLE PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    console.log(url);
    // API HEADER OPTIONS
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b1fda73e9emsh70026538b9aaba3p10ebbejsnfb187dbbd62b',
        'X-RapidAPI-Host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    };

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

        //console.log(dataResults);
        //detailedRecipes = await getRecipeInformation(dataResults);
        //console.log(detailedRecipes);

        //console.log('fetched recipes');

        window.localStorage.setItem(
          url,
          JSON.stringify({
            recipes: detailedRecipes,
            time: Date.now(),
          })
        );
      }

      //console.log('set recpices');
      //console.log(detailedRecipes);

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
