'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import '../../components/FilterComponent/RecipeCard.css';
import { db } from '../../services/Firebase';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { Toast } from 'primereact/toast';
import Link from 'next/link';
import { Paginate } from '../FilterComponent/Paginate';
import './RecipeCard.css';

import 'primeicons/primeicons.css';

export const RecipeCard = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [version, setVersion] = useState(1);
  const toast = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState("")

  // HANDLE PAGINATION
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = favoriteRecipes.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(favoriteRecipes.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const deleteFavoriteRecipe = async (id) => {
    const favoriteDoc = doc(db, 'favorites', id);
    await deleteDoc(favoriteDoc);

    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Recipe deleted. Please refresh!',
      life: 3000,
    });

    setVersion(version + 1);
  };


  useEffect(() => {
    const isItAuth = localStorage.getItem("isAuth");
    setIsAuth(isItAuth);
  }, []);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    setUserId(uid);
  }, []);

  useEffect(() => {
    const favoritesCollectionRef = collection(db, 'favorites');

    const getFavoriteRecipes = async () => {
      const data = await getDocs(favoritesCollectionRef);
      setFavoriteRecipes(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getFavoriteRecipes();
  }, [version]);

  if(isAuth == "false"){
    window.location.pathname = "/account";
  }
  return (
      <div className="favorite-card">
      <div className="recipe-display">
        {currentPosts.map((item) => {
          return (
            <>
              <div className="single-recipe" key={uuidv4()}>
                <Toast ref={toast} />
                <div className="delete-recipe">
                  <i
                    className="pi pi-times-circle"
                    style={{
                      fontSize: '1.2rem',
                      color: 'white',
                      backgroundColor: 'black',
                      borderRadius: '50%',
                      border: 'none',
                      outline: 'none',
                      position: 'flex-end',
                    }}
                    onClick={() => deleteFavoriteRecipe(item.id)}
                  ></i>
                </div>
                <Link
                  href={{
                    pathname: '/components/SingleRecipe',
                    query: `id=${item.recipeID}`,
                  }}
                >
                  <Image
                    class="border-round-3xl"
                    className="recipe-image"
                    src={item.image}
                    alt="Image"
                    width={220}
                    height={156}
                  />
                </Link>

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
      </div>
      <div className="pages">
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={favoriteRecipes.length}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
    </div>
  );
};
