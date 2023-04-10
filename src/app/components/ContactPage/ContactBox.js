'use client';

import Image from "next/image";
import pastries from "/public/assets/pastries.jpg";
import "./ContactBox.css";
import Link from "next/link";


export const ContactBox = () => {
    return (
       <div className="box">
       <ol className="breadcrumb">
                 <li className="breadcrumb-item"> <Link href="#">HOME</Link> {">"} Contact </li>
         </ol>
         <Image
          className="imgcontact"
          src={pastries}
          alt="pastries"
          />
        </div>

   );
};