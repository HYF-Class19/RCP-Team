"use client";
import Image from 'next/image';
import Link from 'next/link';

import './Header.css';
import logo from '../../../public/assets/logo.png';
import {auth} from "../services/Firebase"
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { Button } from "primereact/button";


export const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const isItAuth = localStorage.getItem("isAuth");
    setIsAuth(isItAuth);

  }, []);
  

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.setItem("isAuth", "false");
      setIsAuth("false");
      window.location.pathname = "/account";
    });
  };

const redirectAccount = () =>{
  window.location.pathname = "/account";
}

  return (
    <div className="header">
      <Link
        href={{
          pathname: '../',
        }}
      >
        <Image src={logo} alt="logo" width={202} />
      </Link>

      <h1 className="slogan">I want to choose a recipe by...</h1>
      <div className="btn-group">
        {isAuth == "true" ? (
          <>
          <Link
          href="/components/Favorites"
          className="justify-content-center p-3"
          >
          <i
            className="pi pi-heart-fill"
            style={{ color: 'black', fontSize: '35px' }}
          ></i>
          </Link>
        <Button onClick={signUserOut} className="justify-content-center p-3 bg-white border-none">
        <li
          className="pi pi-sign-out"
          style={{ color: 'black', fontSize: '35px' }}
          ></li>
        </Button>
        </>

      ) : (
        <Button onClick={redirectAccount} className="justify-content-center p-3 bg-white border-none">
          <i className="pi pi-user" 
          style={{ color: 'black', fontSize: '35px' }}
          ></i>
        </Button>
      )}

      </div>
    </div>
  );
};
