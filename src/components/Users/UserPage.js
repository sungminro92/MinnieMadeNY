import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import { BiCart } from 'react-icons/bi'
import Login from './Login'
import Register from './Register'
import CartPage from '../Cart/CartPage'
import Profile from './Profile'
import './style.css'
import { AuthContext } from '../../context/auth'


const Users = ({ func, show }) => {
    const [login, setLogin] = useState(true);

    function handleClick() {
        console.log()
        setLogin(!login)
    }

    const { user } = useContext(AuthContext)

    const showHeader = () => {

    }
    const showContent = () => {
        if (user) {
            return <Profile func={func} />
        } else {
            if (login) {
                return <Login func={func} handleClick={handleClick} />
            } else {
                return <Register func={func} handleClick={handleClick} />
            }
        }
    }

    return (
        <>
            <div id={show ? "main-user" : ""} onClick={() => func({ type: "USER" })}></div>
            <div className={show ? "user-container show" : "user-container"}>
                <div className="header">
                    <div className="cursor-pointer close-button" onClick={() => func({ type: "USER" })}>
                        <GrClose size={28} />
                    </div>
                    {user ? (<div><h3>Your Account</h3></div>) : (<div> {login ? <h3> Signin</h3> : <h3> Signup </h3>}</div>)}
                    < div onClick={() => func({ type: "SWITCH" })}><BiCart size={30} /></div>
                </div>
                <div>
                    {showContent()}
                </div>
            </div >

        </>
    )
}

export default Users