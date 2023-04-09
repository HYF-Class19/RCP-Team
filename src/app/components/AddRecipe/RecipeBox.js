'use client';
import Image from "next/image";
import veggie from "/public/assets/veggie.jpg";
import "./RecipeBox.css";


export const RecipeBox = () => {
    return (
       <div className="box">
       <ol className="breadcrumb">
                 <li className="breadcrumb-item"> <a href="../page.js"> 🏠Home </a></li>
                 <li className="breadcrumb-item"> <a href="#"> Add Recipe </a></li>
         </ol>
         <Image
          className="imgcontact"
          src={veggie}
          alt="vegetables"
          />
        </div>

   );
};