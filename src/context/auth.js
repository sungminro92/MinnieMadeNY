
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, handleUserProfile } from "../fireConfig";
import Loading from "../components/utilityComps/Loading";
import { getDoc, doc, onSnapshot, Timestamp, setDoc } from 'firebase/firestore'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setUser(null)
                setLoading(false)
                setAdmin(false);
                return;
            };

            const docRef = doc(db, "users", user.uid)
            const snapshot = await getDoc(docRef);
            const userInfo = snapshot.data();

            // FOR GOOGLE SIGN IN --> ADD USER TO FIREBASE USERS COLLECTION
            if (!snapshot.exists()) {
                console.log("google account does not exists");
                const { displayName, email } = user;
                try {
                    const nameArr = displayName.split(" ");
                    await setDoc((docRef), {
                        firstName: nameArr[0],
                        lastName: nameArr[nameArr.length - 1],
                        email,
                        roles: "user",
                        createdAtD: Timestamp.fromDate(new Date()),
                    })
                } catch (err) {
                    console.log(err)
                }
            }

            const userSnap = await getDoc(docRef);
            setUser(userSnap.data());
            if (userInfo.roles === "admin") {
                setAdmin(true)
            }
            setLoading(false);
            // console.log("current user is", user);
        });
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <AuthContext.Provider value={{ user, admin }}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
