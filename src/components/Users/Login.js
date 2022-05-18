import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../fireConfig";
import { updateDoc, doc } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FcGoogle } from 'react-icons/fc'



const LoginPage = ({ handleClick, dispatch }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
        error: null,
        loading: false,
    })

    const [errors, setErrors] = useState({})

    const history = useHistory();

    const { email, password, error, loading } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null, loading: true })
        if (!email || !password) {
            setData({ ...data, error: "Al fields are required!" })
        }
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            setData({
                email: "",
                password: "",
                error: null,
                loading: false,
            });
            history.replace("/");
            dispatch("USER")


        } catch (err) {
            setData({ ...data, error: error.message, loading: false })
        }
    }

    return (
        <section>
            <form className="form">
                <h1>Sign in</h1>
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
                <div className="input-container">
                </div>

                <div className="input-container">
                    <TextField sx={{ m: 0.5 }} type="email" name="email" value={email} onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" size="small" fullWidth required />
                </div>
                <div className="input-container">
                    <TextField sx={{ m: 0.5 }} type="password" name="password" value={password} onChange={handleChange} id="outlined-basic" label="Password" variant="outlined" size="small" fullWidth required />
                </div>
                <div className="button-container">
                    <Button onClick={handleSubmit} sx={{ m: 0.5 }} variant="contained" fullWidth> {loading ? "Logging in ..." : "Login"} </Button>
                </div>
                <p style={{ margin: "1.5rem 0.5rem 0.5rem 0.5rem" }}> Not a member yet? Sign up instead</p>
                <div className="button-container" onClick={() => handleClick("SIGNUP")}><Button sx={{ m: 0.5 }} variant="outlined" fullWidth> Sign up </Button></div>
            </form>
        </section>
    )
}

export default LoginPage