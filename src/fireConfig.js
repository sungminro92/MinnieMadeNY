// // Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import 'firebase/auth'
// // import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// // import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcDTDAEzVny0VvbXJzRt1gUUNhGt_FLRo",
    authDomain: "minniemadeny.firebaseapp.com",
    projectId: "minniemadeny",
    storageBucket: "minniemadeny.appspot.com",
    messagingSenderId: "397216447786",
    appId: "1:397216447786:web:d1bf1d191b6ee975e77253",
    measurementId: "G-813ZXF13TD"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
        }).catch((error) => {
            const errorCode = error.code; // handle errors here
            const errorMessage = error.message; // error message
            const email = error.customData.email // The email of the user's account used.
            const credential = GoogleAuthProvider.credentialFromError(error);  // The AuthCredential type that was used.
        })
}

const googleSignout = () => {
    signOut(auth).then(() => {
        //sign out successfully
        console.log("user signed out")
    }).catch((error) => {
        console.log(error)
    })
}
// // const signInGoogle = new signInWithPopup
// // const provider = new GoogleAuthProvider();

// // Initialize Firebase
// // const analytics = getAnalytics(app);


// export { auth, db, storage, provider, signInWithPopup, googleSignout };
