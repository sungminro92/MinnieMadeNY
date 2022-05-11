import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { useHistory } from 'react-router-dom'
// import db from "../fireConfig";
import { auth, db, provider } from "../fireConfig";
import { collection, addDoc } from "firebase/firestore";

const RegisterPage = (props) => {
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
            );
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
                    return
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
            <form className="form" onSubmit={handleSubmit}>
                <h1>Register Page - Create an account</h1>
                <div className="input-container">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                    />
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div className="button-container">
                    {error ? <p className="error">{error}</p> : null}
                    <button className="submit-button" disabled={loading} >
                        {loading ? "Creating..." : "Register"}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default RegisterPage;