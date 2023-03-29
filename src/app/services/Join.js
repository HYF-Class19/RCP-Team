import Router from "next/router";
import React, { useState, useEffect } from 'react';

import { FirebaseApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { initFirebase } from "./firebase";

import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

initFirebase();

const provider = new FirebaseApp.auth.GoogleAuthProvider();


export const UserJoin = () => {
    const [authorizing, setAuthorizing] = useState(false);

    return (
        <Button />
    )
};