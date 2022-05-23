import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db, signInWithGoogle } from "../../fireConfig";
import { updateDoc, doc } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FullButton from '../Shared/FullButton'
import ErrorMessage from '../Shared/ErrorMessage'
import { FcGoogle } from 'react-icons/fc'
import { FirebaseError } from "firebase/app";

const LoginPage = ({ handleClick, dispatch }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
        error: null,
        loading: false,
    })

    // const [errors, setErrors] = useState({})

    const history = useHistory();

    const { email, password, error, loading } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let formIsValid = true;
        setData({ ...data, error: null, loading: true })
        if (typeof email !== "undefined") {
            let lastAtPos = email.lastIndexOf("@");
            let lastDotPos = email.lastIndexOf(".");
            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    email.indexOf("@@") == -1 &&
                    lastDotPos > 2 &&
                    email.length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                setData({ ...data, error: "Email is not valid" })
            }
        }

        if (!email || !password) {
            setData({ ...data, error: "Al fields are required!" })
        } else {
            if (formIsValid) {
                try {
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            console.log("successful signin", user)

                            history.replace("/");
                            dispatch({ type: "USER" })
                        })
                        .catch((error) => {
                            // const errorCode = error.code;
                            // const errorMessage = error.message;
                            setData({ ...data, error: error.message })
                        })

                } catch (error) {
                    // const errorMessage = err.message;
                    setData({ ...data, error: error.message, loading: false })
                }
            }
        }
    }

    const signInWithGoogleFunc = () => {

    }

    return (
        <section>
            <form className="form">
                <h1>Sign in</h1>
                <div className="button-container social-button-container">
                    <Button onClick={signInWithGoogle} sx={{ m: 0.5 }} variant="outlined" size="small" fullWidth><span className="social-icon"><FcGoogle size={20} /></span><p>Continue with Google</p></Button>
                </div>
                <hr
                    style={{
                        width: "90%",
                        height: "0px",
                        backgroundColor: "#eeeeee0"
                    }}
                />
                <div className="input-container">
                </div>

                <div className="input-container">
                    <TextField sx={{ m: 0.5 }} type="email" name="email" value={email} onChange={handleChange} label="Email" variant="outlined" size="small" fullWidth required />
                </div>
                <div className="input-container">
                    <TextField sx={{ m: 0.5 }} type="password" name="password" value={password} onChange={handleChange} label="Password" variant="outlined" size="small" fullWidth required />
                </div>
                {error ? <ErrorMessage err={error} /> : null}
                {/* {error ? error : null} */}
                <div className="button-container">
                    <FullButton value={loading ? "Logging in ..." : "Login"} onClick={handleSubmit} />
                </div>
                <p style={{ margin: "1.5rem 0.5rem 0.5rem 0.5rem" }}> Not a member yet? Sign up instead</p>

                <div className="button-container" onClick={() => handleClick("SIGNUP")}>
                    <FullButton value={"Signup"}> </FullButton>
                    {/* <Button sx={{ m: 0.5 }} variant="outlined" fullWidth> Sign up </Button> */}
                </div>
            </form>
        </section >
    )
}

export default LoginPage