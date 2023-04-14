"use client";
import "./NavBar.css";
import Link from "next/link";
import React, { useState } from "react";

export const NavBar = () =>
  // getDietsData,
  // setSearchNewRecipes,
  // callbackDiets,
  {
    // const [dietaryInfo, setDietaryInfo] = useState({ diets: [] });
    // const [selectedDietary, setSelectedDietary] = useState();

    // const dietaryChange = (e) => {
    //   const { value, checked } = e.target;

    //   const { diets } = dietaryInfo;

    //   if (checked) {
    //     setDietaryInfo({
    //       diets: [...diets, value],
    //     });
    //   } else {
    //     setDietaryInfo({
    //       diets: diets.filter((e) => e !== value),
    //     });
    //   }
    // };

    // // callbackDiets(dietaryInfo);

    // const getDietary = (selectedDiet) => {
    //   setSelectedDietary(selectedDiet);
    // };

    // const dietaryClick = () => {
    //   setSearchNewRecipes(selectedDietary);
    // };

    return (
      <div className="navbar">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle">
          {" "}
          Menu <i className="pi pi-bars"></i>
        </label>

        <ul className="parentList">
          <li>
            <Link
              href={{
                pathname: "../",
              }}
            >
              <i
                className="pi pi-home"
                style={{ color: "white", fontSize: "1.5rem" }}
              ></i>{" "}
              Home
            </Link>
          </li>
          <li>
            <a href="#">
              Menu Origin{" "}
              <i className="pi pi-angle-down" style={{ color: "white" }}></i>
            </a>
            <ul>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "",
                      menuOriginData: "indian",
                    },
                  }}
                >
                  Indian
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "",
                      menuOriginData: "african",
                    },
                  }}
                >
                  African
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "",
                      menuOriginData: "chinese",
                    },
                  }}
                >
                  Chinese
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "",
                      menuOriginData: "american",
                    },
                  }}
                >
                  American
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "",
                      menuOriginData: "european",
                    },
                  }}
                >
                  European
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "",
                      menuOriginData: "french",
                    },
                  }}
                >
                  French
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "",
                      menuOriginData: "italian",
                    },
                  }}
                >
                  Italian
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "",
                      menuOriginData: "mediterranean",
                    },
                  }}
                >
                  Mediterranean
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "",
                      menuOriginData: "mexican",
                    },
                  }}
                >
                  Mexican
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Dietary{" "}
              <i className="pi pi-angle-down" style={{ color: "white" }}></i>
            </a>
            <ul>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "vegetarian",
                      menuOriginData: "",
                    },
                  }}
                >
                  Vegetarian
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "vegan",
                      menuOriginData: "",
                    },
                  }}
                >
                  Vegan
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "pescetarian",
                      menuOriginData: "",
                    },
                  }}
                >
                  Pescetarian
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "primal",
                      menuOriginData: "",
                    },
                  }}
                >
                  Primal
                </Link>
              </li>
              <li>
                <Link
                  href={{
                    pathname: "/components/FilterComponent",
                    query: {
                      ingredientsData: "",
                      excludeIngredientsData: "",
                      dietsData: "paleo",
                      menuOriginData: "",
                    },
                  }}
                >
                  Paleo
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Top Recipes</a>
          </li>
          <li>
            <Link
              href={{
                pathname: "/components/RandomRecipe",
              }}
            >
              Random Recipe
            </Link>
          </li>
        </ul>
      </div>
    );
  };

// const handleClick = async (diet) => {
//   try {
//   const res = await fetch(
//   `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${diet}&diet=${diet}&number=10&limitLicense=false`,
//   {
//   method: 'GET',
//   headers: {
//   'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//   'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
//   }
//   );
//   const data = await res.json();
//   setSearchNewRecipes(data.results);
//   } catch (error) {
//   console.error(error);
//   }
//   }

// const [dietSearch, setDietSearch] = useState('')

// const handleClick = (diet) => {
// setDietSearch(diet)
// const options = {
// method: 'GET',
// headers: {
//   "X-RapidAPI-Key": "b1fda73e9emsh70026538b9aaba3p10ebbejsnfb187dbbd62b",
//   "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// }
// };
// const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?apiKey=<your_api_key>&diet=${diet}`

// fetch(url, options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// }
//
