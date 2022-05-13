import { Link } from 'react-router-dom'
import { GrClose } from 'react-icons/gr'
import './style.css'

const Users = ({ handleShowMenu, show }) => {
    return (
        <div id={show ? "main-menu" : ""} onClick={() => handleShowMenu()}>
            <div id="user-container" className={show ? "show" : ""}>
                <div className="cursor-pointer user" onClick={() => handleShowMenu()}>
                    <GrClose size={30} />
                </div>
                {/* USER SIGN IN FORM OR SIGNUP FORM */}
            </div >
        </div>
    )
}

export default Users