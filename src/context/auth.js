
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../fireConfig";
import Loading from "../components/utilityComps/Loading";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [set, setSet] = useState(false)
    // const [admin, setAdmin] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("what is user", user)
            setUser(user);
            setLoading(false);
        });
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
