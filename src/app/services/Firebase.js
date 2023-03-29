// Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: NEXT_PUBLIC_FIREBASE_DB_URL,
    projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

// Initialize Firebase
export const initFirebase = () => {
    if (!firebaseConfig.app.length) {
        firebase.initializeApp(firebaseConfig);
    }
};


// const analytics = getAnalytics(app);