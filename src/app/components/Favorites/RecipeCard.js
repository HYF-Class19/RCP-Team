'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import recipeImage from '../../../../public/assets/food2.jpg';
import { v4 as uuidv4 } from 'uuid';
import '../../components/FilterComponent/RecipeCard.css';
import { db } from '../../services/Firebase';
import { collection, getDocs } from 'firebase/firestore';

export const RecipeCard = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const favoritesCollectionRef = collection(db, 'favorites');

  useEffect(() => {
    const getFavoriteRecipes = async () => {
      const data = await getDocs(favoritesCollectionRef);
      console.log(data);
      setFavoriteRecipes(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      console.log(favoriteRecipes);
    };

    getFavoriteRecipes();
  }, []);

  return (
    <>
      {favoriteRecipes.map((item) => {
        return (
          <>
            <div className="single-recipe" key={uuidv4()}>
              <Image
                class="border-round-3xl"
                className="recipe-image"
                src={item.image}
                alt="Image"
                width={220}
                height={156}
              />
              <div className="time-difficulty">
                <h3>
                  {item.servings} <i className="pi pi-users"></i>
                </h3>
                <h3>
                  {item.time} <i className="pi pi-clock"></i>
                </h3>
              </div>
              <div className="recipe-title">
                <h3>{item.title}</h3>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
