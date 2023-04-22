'use client';
import React, { useState, useRef, useEffect } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../services/Firebase";
import { v4 as uuidv4 } from 'uuid';
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import styles from "./Account.module.css";

export const Join = () => {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [userId, setUserId] = useState("")
  const toast = useRef(null);

  const handleRegister = async (e) => {

    e.preventDefault();
    if (!name || !username || !email || !password || !confirmPassword) {
      toast.current.show({ severity: "warn", summary: "Warning", detail: "Please fill in all fields." });
      return;
    }

    if (password !== confirmPassword) {
      toast.current.show({ severity: "warn", summary: "Warning", detail: "Passwords do not match." });
      return;
    }

    if (!agree) {
      toast.current.show({ severity: "warn", summary: "Warning", detail: "Please agree to store your data." });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const uid = user.uid;
      console.log("User registered:", user.email);
      // Add additional user data to Firestore
      const userRef = doc(db, "users", userCredential.user.uid);
      setDoc(userRef, {
        name: name,
        username: username,
        email: email,
      })
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("email", email);
      localStorage.setItem("uid", uid);
      window.location.pathname = "../components/Favorites";
    } catch (error) {
      console.error("Error registering user:", error);
      toast.current.show({ severity: "error", summary: "Error", detail: error.message });
    }
     toast.current.show({
       severity: "success",
       summary: "Success",
       detail: "Registered successfully",
       life: 3000,
     });
     
  };

  
    return (
      <div className={classNames("w-4 w-auto p-5 border-round-lg w-3 border-round-lg", styles.formCard)}>
      <Toast ref={toast} />
        <form onSubmit={handleRegister}>
          <h2 className='font-bold py-2'>Register</h2>
          <div className="py-3">
          <label htmlFor="name" className="p3">Name *</label>
            <InputText
              id="name"
              className='p-2  border-2 border-solid border-round-md w-full flex  hover:border-200'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="py-2">
          <label htmlFor="username">Username</label>
            <InputText
              id="username"
              className='text-base p-2  border-2 border-solid border-round-md w-full flex  hover:border-200'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

        </div>
          <div className="py-2">
            <label htmlFor="email">Email *</label>
            <InputText 
              id="email" 
              className='text-base p-2  border-2 border-solid border-round-md w-full flex  hover:border-200'
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              key={uuidv4()}
            />
          </div>
          <div className="py-2">
            <label htmlFor="password">Password *</label>
            <InputText
            type='password'
             id="password" 
             className='text-base p-2  border-2 border-solid border-round-md w-full flex  hover:border-200'
             value={password} 
             onChange={(e) => setPassword(e.target.value)} 
             required/>
          </div>
          <div className="py-2">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <InputText
            type='password'
            className='text-base p-2  border-2 border-solid border-round-md w-full flex  hover:border-200'
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required />
          </div>
          <div className="p-field-checkbox py-2">
          <Checkbox
          className='ml-1'
            inputId="agree"
            checked={agree}
            onChange={(e) => setAgree(e.checked)}
          />
          <label htmlFor="agree"> Yes, I agree to store my data in this website</label>
        </div>
        <Button type="submit" label="Register" className={classNames("w-full p-2 border-1 border-solid border-round-md flex  hover:border-200", styles.registerBtn)}/>
      </form>
      </div>
  );
};
