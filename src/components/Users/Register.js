import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useHistory } from 'react-router-dom'
// import db from "../fireConfig";
import { auth, db, provider, signInWithGoogle } from "../../fireConfig";
import { collection, addDoc } from "firebase/firestore";

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FullButton from '../Shared/FullButton'
import { FcGoogle } from 'react-icons/fc'

const Register = ({ handleClick, dispatch }) => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        roles: "",
        error: null,
        loading: false,
    })

    const { firstName, lastName, email, password, roles, error, loading } = data;

    const history = useHistory();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true });
        if (!firstName || !lastName || !email || !password) {
            setData({ ...data, error: "All fields are required", loading: false });
        }

        try {
            const result = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            console.log(result.user);

            await setDoc(doc(db, "users", result.user.uid), {
                uid: result.user.uid,
                firstName,
                lastName,
                email,
                roles: "user",
                createdAt: Timestamp.fromDate(new Date()),
            });

            setData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                error: null,
                loading: false,
            });

            history.replace("/");
            dispatch({ type: "USER" })

        } catch (err) {
            setData({ ...data, error: err.message, loading: false })
        }
    };

    return (
        <section>
            <form className="form">
                <h1>Sign up</h1>
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
                {/* <Button sx={{ m: 0.5 }} variant="outlined" fullWidth> Sign in with  </Button> */}
                <div className="input-container">

                    <TextField sx={{ m: 0.5 }} type="text" name="firstName" value={firstName} onChange={handleChange} label="First Name" variant="outlined" size="small" fullWidth required />

                    <TextField sx={{ m: 0.5 }} type="text" name="lastName" value={lastName} onChange={handleChange} label="Last Name" variant="outlined" size="small" fullWidth required />

                </div>

                <div className="input-container">

                    <TextField sx={{ m: 0.5 }} type="email" name="email" value={email} onChange={handleChange} label="Email" variant="outlined" size="small" fullWidth required />

                </div>
                <div className="input-container">
                    <TextField sx={{ m: 0.5 }} type="password" name="password" value={password} onChange={handleChange} label="Password" variant="outlined" size="small" fullWidth required />

                </div>
                {error ? <p className="error">{error}</p> : null}
                <div className="button-container">

                    <FullButton onClick={handleSubmit} value={"Register"}></FullButton>
                    {/* <Button sx={{ m: 0.5 }} variant="contained" fullWidth onClick={handleSubmit}> Register </Button> */}
                    {/* <button className="submit-button" disabled={loading} >
                        {loading ? "Creating..." : "Register"}
                    </button> */}
                </div>
                <p style={{ margin: "1.5rem 0.5rem 0.5rem 0.5rem" }}> Already a member? Sign in instead.</p>
                <div className="button-container" onClick={() => handleClick("LOGIN")}>
                    <FullButton value={"Signin"} />
                    {/* <Button sx={{ m: 0.5 }} variant="outlined" fullWidth> Sign in </Button> */}
                </div>
            </form>
        </section>
    )
}

export default Register


    // const handleValidation = () => {
    //     let fields = userData;
    //     let errors = {};
    //     let formIsValid = true;

    //     // NAME
    //     if (!fields["firstName"]) {
    //         formIsValid = false;
    //         errors["firstName"] = "cannot be empty"
    //     }
    //     if (typeof fields["firstName"] !== "undefined") {
    //         if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
    //             formIsValid = false;
    //             errors["firstName"] = "Only letters";
    //         }
    //     }
    //     if (!fields["lastName"]) {
    //         formIsValid = false;
    //         errors["lastName"] = "cannot be empty"
    //     }
    //     if (typeof fields["lastName"] !== "undefined") {
    //         if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
    //             formIsValid = false;
    //             errors["lastName"] = "Only letters";
    //         }
    //     }
    //     // Email
    //     if (typeof fields["email"] !== "undefined") {
    //         let lastAtPos = fields["email"].lastIndexOf("@");
    //         let lastDotPos = fields["email"].lastIndexOf(".");
    //         if (
    //             !(
    //                 lastAtPos < lastDotPos &&
    //                 lastAtPos > 0 &&
    //                 fields["email"].indexOf("@@") == -1 &&
    //                 lastDotPos > 2 &&
    //                 fields["email"].length - lastDotPos > 2
    //             )
    //         ) {
    //             formIsValid = false;
    //             errors["email"] = "Email is not valid";
    //         }
    //     }

    //     setErrors({
    //         errors: errors
    //     })

    //     return formIsValid;
    // }