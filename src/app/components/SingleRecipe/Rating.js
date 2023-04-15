"use client";
import React, { useState, useEffect } from "react";
import "./SingleRecipe.css";
import { db } from "../../services/Firebase";
import { collection, getDocs } from "firebase/firestore";

export const Rating = (props) => {
  const [rating, setRating] = useState(0);
  const usersCollectionRef = collection(db, "rating");
  console.log(props.dishId);

  const getRating = async () => {
    const data = await getDocs(usersCollectionRef);
    const dataArr = data.docs.map((doc) => ({ ...doc.data() }));
    let totalRating = 0;
    let ratingCount = 0;
    if (dataArr.length > 0) {
      for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i].productId == props.dishId) {
          totalRating += dataArr[i].rating;
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
    getRating();
  }, []);

  return <h2>{rating}</h2>;
};

export default Rating;
