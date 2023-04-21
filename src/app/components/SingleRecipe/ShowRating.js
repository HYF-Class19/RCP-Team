"use client";
import React, { useState, useEffect } from "react";
import { Rating } from "primereact/rating";
import "./SingleRecipe.css";
import { db } from "../../services/Firebase";
import { collection, getDocs } from "firebase/firestore";

export const ShowRating = (props) => {
  const [rating, setRating] = useState(0);
  const ratingCollection = props.ratingCollection;

  const getRating = (ratingCollection) => {
    let totalRating = 0;
    let ratingCount = 0;
    console.log(ratingCollection);
    console.log(typeof ratingCollection);
    if (ratingCollection.length > 0) {
      for (let i = 0; i < ratingCollection.length; i++) {
        if (ratingCollection[i].productId == ratingCollection.dishId) {
          totalRating += ratingCollection[i].rating;
          ratingCount++;
        }
      }
      setRating(totalRating / ratingCount);
    }
    if (ratingCount == 0) {
      setRating(0);
    }
  };
  useEffect(() => {
    getRating(ratingCollection);
  }, [ratingCollection]);

  return (
    <div>
      <Rating value={rating} stars={5} cancel={false} />
    </div>
  );
};

export default ShowRating;
