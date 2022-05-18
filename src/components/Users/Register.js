import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useHistory } from 'react-router-dom'
// import db from "../fireConfig";
import { auth, db, provider } from "../../fireConfig";
import { collection, addDoc } from "firebase/firestore";

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FcGoogle } from 'react-icons/fc'

const Register = ({ handleClick }) => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        error: null,
        loading: false,
    })

    const [errors, setErrors] = useState({})

    const { firstName, lastName, email, password, error, loading } = userData;

    const history = useHistory();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUserData({ ...userData, error: null, loading: true });
        if (!firstName || !lastName || !email || !password) {
            setUserData({ ...userData, error: "All fields are required" });
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
                createdAt: Timestamp.fromDate(new Date()),
            });

            setUserData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                error: null,
                loading: false,
            });

            setErrors = {}
            // redirect to "/" => Home
            history.replace("/");
        } catch (err) {

            switch (err.code) {
                case 'auth/email-already-in-use':
                    // alert("email is already in use")
                    setUserData({ ...userData, error: "email is already in use", loading: false });
                    break;
                default:
                    setUserData({ ...userData, error: error.message, loading: false })
            }

            setErrors()
            // if (err.code.contains("auth/email-already-in-use")) {
            //     setUserData({ ...userData, error: "Email already exists, please sign in", loading: false });
            // }
            // console.log(err.message);
            // setUserData({ ...userData, error: err.message, loading: false });
        }
    };

    // function getRefinedFirebaseAuthErrorMessage(error) {
    //     console.log(error.replace('Firebase: ', '')
    //         .replace(/\(auth.*\)\.?/, '');)
    // }

    // async function handleSubmit() {
    //     await addDoc(collection(db, "users"), {
    //         firstName: firstName,
    //         lastName: lastName,
    //         email: email,
    //         password: password,
    //     });
    //     console.log("Document written with ID: ");
    // }

    return (
        <section>
            <form className="form">
                <h1>Sign up</h1>
                <div className="button-container social-button-container">
                    <Button sx={{ m: 0.5 }} variant="outlined" size="small" fullWidth><span className="social-icon"><FcGoogle size={20} /></span><p>Continue with Google</p></Button>
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
                    {/* <label>First Name:</label> */}
                    <TextField sx={{ m: 0.5 }} type="text" name="firstName" value={firstName} onChange={handleChange} id="outlined-basic" label="First Name" variant="outlined" size="small" fullWidth required />
                    {/* <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                    /> */}
                    {/* <label>Last Name:</label> */}
                    <TextField sx={{ m: 0.5 }} type="text" name="lastName" value={lastName} onChange={handleChange} id="outlined-basic" label="Last Name" variant="outlined" size="small" fullWidth required />
                    {/* <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                    /> */}
                </div>

                <div className="input-container">
                    {/* <label>Email:</label> */}
                    <TextField sx={{ m: 0.5 }} type="email" name="email" value={email} onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" size="small" fullWidth required />
                    {/* <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    /> */}
                </div>
                <div className="input-container">
                    <TextField sx={{ m: 0.5 }} type="password" name="password" value={password} onChange={handleChange} id="outlined-basic" label="Password" variant="outlined" size="small" fullWidth required />
                    {/* <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    /> */}
                </div>
                <div className="button-container">
                    {error ? <p className="error">{error}</p> : null}

                    <Button sx={{ m: 0.5 }} variant="contained" fullWidth onClick={handleSubmit}> Register </Button>
                    {/* <button className="submit-button" disabled={loading} >
                        {loading ? "Creating..." : "Register"}
                    </button> */}

                </div>
                <p style={{ margin: "1.5rem 0.5rem 0.5rem 0.5rem" }}> Already a member? Sign in instead.</p>
                <div className="button-container" onClick={() => handleClick("LOGIN")}><Button sx={{ m: 0.5 }} variant="outlined" fullWidth> Sign in </Button></div>
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