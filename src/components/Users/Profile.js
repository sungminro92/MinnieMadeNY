import { auth, db } from "../../fireConfig";
import { signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom'
import FullButton from '../Shared/FullButton'

const Profile = ({ dispatch }) => {

    const history = useHistory();

    const handleSignout = async () => {
        await signOut(auth);
        history.replace("/");
        dispatch({ type: "USER" })
    };

    return (
        <div>
            <h3>this is user profile</h3>
            <FullButton value={"SIGN OUT"} onClick={handleSignout}></FullButton>
        </div>
    )
}

export default Profile