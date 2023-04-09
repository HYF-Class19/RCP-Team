import React, { useState, useRef  } from 'react';


import { auth, db } from "../services/Firebase";

import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import styles from "./Account.module.css";
import { classNames } from "primereact/utils";



export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const toast = useRef(null);
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await auth.setPersistence(
            rememberMe
              ? firebase.auth.Auth.Persistence.LOCAL
              : firebase.auth.Auth.Persistence.SESSION
          );
          await auth.signInWithEmailAndPassword(email, password);
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Logged in successfully",
            life: 3000,
          });
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
        <div className={classNames("m-5 w-auto p-5 border-round-lg w-3", styles.formCard)}>
                  <Toast ref={toast} />
        <h2 className='font-bold py-2'>Log-in</h2>
            <form className="flex flex-column gap-2" onSubmit={handleLogin}>
          <div className="py-3">
          <label htmlFor="email" className="p3">Email</label>
          <InputText
            id="email"
            className='p-2  border-2 border-solid border-round-md w-full flex  hover:border-200'
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
                    className='ml-5'

            inputId="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.checked)}
          />
          <label htmlFor="rememberMe" className="p3">Remember Me</label>
        </div>
        <Button type="submit" label="Login" className={classNames("w-full p-2 border-1 border-solid border-round-md flex  hover:border-200", styles.registerBtn)} />
        <Button type="submit" label="Forgot your password?" className={classNames("w-full p-2 border-1 border-solid border-round-md flex  hover:border-200 mt-6", styles.forgetBtn)}/>
      </form>
    </div>
         );
};