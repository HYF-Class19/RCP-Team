'use client';
import React, { useState, useRef, useEffect } from 'react';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/Firebase";

import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import styles from "./Account.module.css";
import { classNames } from "primereact/utils";

export const Login = ( ) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [userId, setUserId] = useState("")

    const toast = useRef(null);

    useEffect(() => {
      const isAuth = localStorage.getItem("isAuth");
      if (isAuth === "true") {
        window.location.pathname = "../components/Favorites";
      }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const { user } = await signInWithEmailAndPassword(auth, email, password);
          const uid = user.uid;

          if (rememberMe) {
            localStorage.setItem("rememberMe", "true");
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("email", email);
            localStorage.setItem("uid", uid);
          } else {
            localStorage.removeItem("rememberMe");
          }
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Logged in successfully",
            life: 3000,
          });
          setIsAuth("true");
          setUserId(uid);
        } catch (error) {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: error.message,
            life: 3000,
          });
        }
      };

    return (
        <div className={classNames("w-4 w-auto p-5 border-round-lg  border-round-lg  ", styles.formCard)}>
                  <Toast ref={toast} />
        <h2 className='font-bold py-2'>Log-in</h2>
            <form className="flex flex-column gap-2" onSubmit={handleLogin}>
          <div className="py-3">
          <label htmlFor="email" className="py-2">Email</label>
          <InputText
            id="email"
            className='mb-4 border-2 border-solid border-round-md w-full flex  hover:border-200'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="py-3">
          <label htmlFor="password" className="p3">Password</label>
          <InputText
            type='password'
          className='p-2  border-2 border-solid border-round-md w-full flex  hover:border-200'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="p-field-checkbox py-2">
          <Checkbox
            className='ml-1'
            inputId="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.checked)}
          />
          <label htmlFor="rememberMe" className="p3"> Remember Me</label>
        </div>
        <Button type="submit" label="Login" className={classNames("w-full p-2 border-1 border-solid border-round-md flex  hover:border-200", styles.registerBtn)} />
      </form>
    </div>
         );
};