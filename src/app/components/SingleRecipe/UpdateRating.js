"use client";
import React, { useState, useEffect } from "react";
import { Rating } from "primereact/rating";
import { db } from "../../services/Firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./SingleRecipe.css";
import axios from "axios";

export const UpdateRating = (props) => {
  const [rating, setRating] = useState(0);
  const [userIp, setUserIP] = useState("");
  const ratingCollection = props.ratingCollection;

  const usersCollectionRef = collection(db, "rating");
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.ipify.org/?format=json");
      setUserIP(res.data.ip);
    };

    const userRating = (ratingCollection) => {
      let totalRating = 0;
      let ratingCount = 0;
      if (ratingCollection.length > 0) {
        for (let i = 0; i < ratingCollection.length; i++) {
          if (ratingCollection[i].productId == props.dishId) {
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

    getData();
    userRating(ratingCollection);
  }, [userIp, props.dishId, usersCollectionRef, ratingCollection]);

  const getRating = (ratingCollection) => {
    let userFlag = true;
    console.log("inside get rating");
    if (ratingCollection.length > 0) {
      for (let i = 0; i < ratingCollection.length; i++) {
        if (
          ratingCollection[i].userId == userIp &&
          ratingCollection[i].productId == props.dishId
        ) {
          userFlag = false;
          setRating(rating);
        }
      }
    }
    return userFlag;
  };
  const updateRating = async (rating) => {
    console.log("inside update rating");
    let updateFlag = getRating(ratingCollection);
    console.log(updateFlag);
    if (updateFlag) {
      await addDoc(usersCollectionRef, {
        productId: props.dishId,
        rating: rating,
        userId: userIp,
      });

      window.location.reload(true);
    }
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
