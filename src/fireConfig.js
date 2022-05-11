// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// // const signInGoogle = new signInWithPopup
// // const provider = new GoogleAuthProvider();

// // Initialize Firebase
// // const analytics = getAnalytics(app);


export { auth, db, storage };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCcDTDAEzVny0VvbXJzRt1gUUNhGt_FLRo",
//     authDomain: "minniemadeny.firebaseapp.com",
//     projectId: "minniemadeny",
//     storageBucket: "minniemadeny.appspot.com",
//     messagingSenderId: "397216447786",
//     appId: "1:397216447786:web:d1bf1d191b6ee975e77253",
//     measurementId: "G-813ZXF13TD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const analytics = getAnalytics(app);

// export default db