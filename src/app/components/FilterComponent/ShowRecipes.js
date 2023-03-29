import React, { useState, useEffect } from 'react';
import './ShowRecipes.css';
import { RecipeCard } from './RecipeCard';
import { Paginate } from './Paginate';

// example for the complex filter for the future
const diet = {};

export const ShowRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [url, setUrl] = useState(
    `https://api.spoonacular.com/recipes/complexSearch?cuisine=french,american,chinese,italian,african&number=5&diet=${diet}&apiKey=YourApiKey`
  );
  const [loading, setLoading] = useState(true);

  // HANDLE PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  // FETCH INITIAL RECIPE RESULTS WILL BE RECIPES WITH A SPECIFIC ID
  const fetchRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const dataResults = data.results;
    console.log(dataResults);
    getRecipeInformation(dataResults);
    setLoading(false);
  };

  // GET RECIPE INFORMATION BASED ON THE ID
  const getRecipeInformation = async (response) => {
    response.map(async (item) => {
      const recipe = await fetch(
        `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=yourApiKey`
      );

      const recipeData = await recipe.json();
      setRecipes((state) => {
        state = [...state, recipeData];
        console.log('STATE', state);
        return state;
      });
    });
  };

  useEffect(() => {
    fetchRecipes();
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
