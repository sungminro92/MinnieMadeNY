
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, handleUserProfile } from "../fireConfig";
import Loading from "../components/utilityComps/Loading";
import { getDoc, doc, onSnapshot, Timestamp, setDoc } from 'firebase/firestore'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [set, setSet] = useState(false)
    // const [admin, setAdmin] = useState(false);
    // const handleUserProfile = async (userAuth, additionalData) => {
    //     if (!userAuth) return;
    //     const { uid } = userAuth;
    //     // const userRef = firebase.doc(`users/${uid}`);
    //     const docRef = doc(db, "users", uid);
    //     const snapshot = await getDoc(docRef);

    //     if (!snapshot.exists) {
    //         const { displayName, lastName, email } = userAuth;
    //         const timestamp = Timestamp.fromDate(new Date())
    //         try {
    //             await docRef.set({
    //                 displayName,
    //                 lastName,
    //                 email,
    //                 createdAtD: timestamp,
    //                 ...additionalData
    //             })
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     console.log("from fireConfig", snapshot)
    //     // use this to update local state
    //     return docRef;
    // }
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setUser(user)
                setLoading(false)
                return;
            };

            const docRef = doc(db, "users", user.uid)
            const snapshot = await getDoc(docRef);

            if (!snapshot.exists()) {
                console.log("google account does not exists");
                const { displayName, email } = user;
                try {
                    const nameArr = displayName.split(" ");
                    await setDoc((docRef), {
                        firstName: nameArr[0],
                        lastName: nameArr[nameArr.length - 1],
                        email,
                        createdAtD: Timestamp.fromDate(new Date()),
                    })
                } catch (err) {
                    console.log(err)
                }
            }
            setUser(user);
            setLoading(false);
            console.log("current user is", user);
        });
        // const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
        //     if (userAuth) {
        //         const userRef = await handleUserProfile(userAuth)
        //         userRef.onSnapshot((snapshot) => {
        //             setUser(snapshot.data())
        //             setLoading(false);
        //         })
        //     }
        //     // console.log("what is user", user)
        //     // // setUser(user);
        //     setLoading(false);
        // });
        // return unsubscribe;
    }, []);

    // console.log("user is", user)
    // CREATE LISTENER TO CURRENT USER

    if (loading) {
        return <Loading />;
    }
    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
