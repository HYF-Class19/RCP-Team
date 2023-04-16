"use client";
import React, { useState, useEffect } from "react";
import { Rating } from "primereact/rating";
import "./SingleRecipe.css";
import { db } from "../../services/Firebase";
import { collection, getDocs } from "firebase/firestore";

export const ShowRating = (props) => {
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

  return (
    <div>
      <Rating value={rating} stars={5} cancel={false} />
    </div>
  );
};

export default ShowRating;
