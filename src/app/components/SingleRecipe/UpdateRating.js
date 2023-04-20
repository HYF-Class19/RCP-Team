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

  const usersCollectionRef = collection(db, "rating");
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.ipify.org/?format=json");
      setUserIP(res.data.ip);
    };

    const userRating = async () => {
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

    getData();
    userRating();
  }, [userIp, props.dishId, usersCollectionRef]);

  const getRating = async () => {
    const data = await getDocs(usersCollectionRef);
    const dataArr = data.docs.map((doc) => ({ ...doc.data() }));
    let userFlag = true;

    if (dataArr.length > 0) {
      for (let i = 0; i < dataArr.length; i++) {
        if (
          dataArr[i].userId == userIp &&
          dataArr[i].productId == props.dishId
        ) {
          userFlag = false;
          setRating(rating);
        }
      }
    }
    return userFlag;
  };
  const updateRating = async (rating) => {
    let updateFlag = await getRating();
    if (updateFlag) {
      await addDoc(usersCollectionRef, {
        productId: props.dishId,
        rating: rating,
        userId: userIp,
      });

      setRating(rating);
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
