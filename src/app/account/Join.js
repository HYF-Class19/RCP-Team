import React, { useState, useRef } from 'react';


import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import "primeflex/primeflex.css";
import styles from "./Account.module.css";



import { auth, db } from "../services/Firebase";


export const Join = () => {

    const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
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
      console.log("User registered:", user.email);
      // TODO: Redirect user to the login page or home page
    } catch (error) {
      console.error("Error registering user:", error);
      toast.current.show({ severity: "error", summary: "Error", detail: error.message });
    }
     // Submit the form data
     console.log({ name, email, password });
     toast.current.show({
       severity: "success",
       summary: "Success",
       detail: "Registered successfully",
       life: 3000,
     });
  };

  
    return (
      <div className={classNames("m-5 w-auto p-5 border-round-lg w-3", styles.formCard)}>
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
          className='ml-5'
            inputId="agree"
            checked={agree}
            onChange={(e) => setAgree(e.checked)}
          />
          <label htmlFor="agree">Yes, I agree to store my data in this website</label>
        </div>
        <Button type="submit" label="Register" className={classNames("w-full p-2 border-1 border-solid border-round-md flex  hover:border-200", styles.registerBtn)}/>
      </form>
      </div>
  );
};
