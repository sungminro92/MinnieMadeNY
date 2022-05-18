import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { FcGoogle } from 'react-icons/fc'

const LoginPage = ({ handleClick }) => {
    const [userData, setUserData] = useState({

        lastName: "",
        email: "",
        password: "",
        error: null,
        loading: false,
    })

    const [errors, setErrors] = useState({})

    const { firstName, lastName, email, password, error, loading } = userData;

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };
    const handleSubmit = () => {

    }

    return (
        <section>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div className="button-container social-button-container">
                    <Button sx={{ m: 0.5 }} variant="outlined" size="small" fullWidth><span className="social-icon"><FcGoogle size={20} /></span><p>Continue with Google</p></Button>
                    {/* <hr style="width: 100% color:gray" /> */}
                    {/* <hr style="height:2px;border-width:0;color:gray;background-color:gray"></hr> */}
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
                    {/* <TextField sx={{ m: 0.5 }} type="text" name="firstName" value={firstName} onChange={handleChange} id="outlined-basic" label="First Name" variant="outlined" size="small" fullWidth required /> */}
                    {/* <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                    /> */}
                    {/* <label>Last Name:</label> */}
                    {/* <TextField sx={{ m: 0.5 }} type="text" name="lastName" value={lastName} onChange={handleChange} id="outlined-basic" label="Last Name" variant="outlined" size="small" fullWidth required /> */}
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
                    {/* {error ? <p className="error">{error}</p> : null} */}

                    <Button sx={{ m: 0.5 }} variant="contained" fullWidth> Sign in </Button>
                    {/* <button className="submit-button" disabled={loading} >
                        {loading ? "Creating..." : "Register"}
                    </button> */}
                </div>
                <p style={{ margin: "1.5rem 0.5rem 0.5rem 0.5rem" }}> Not a member yet? Sign up instead</p>
                <div className="button-container" onClick={() => handleClick("SIGNUP")}><Button sx={{ m: 0.5 }} variant="outlined" fullWidth> Sign up </Button></div>
            </form>
        </section>
    )
}

export default LoginPage