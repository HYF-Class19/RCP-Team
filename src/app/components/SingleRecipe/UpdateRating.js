"use client";
import React, { useState, useEffect } from "react";
import { Rating } from "primereact/rating";
import "./SingleRecipe.css";
import { db } from "../../services/Firebase";
import { collection, addDoc } from "firebase/firestore";

export const UpdateRating = (props) => {
  const [rating, setRating] = useState(0);
  const usersCollectionRef = collection(db, "rating");
  const updateRating = async (rating) => {
    await addDoc(usersCollectionRef, {
      productId: props.dishId,
      rating: rating,
      userId: "",
    });

    setRating(rating);
  };

  return (
    <div>
      <Rating
        value={rating}
        onChange={(e) => updateRating(e.value)}
        stars={5}
        cancel={false}
      />
    </div>
  );
};

export default UpdateRating;
