import { auth, db } from "../../fireConfig";
import { signOut } from "firebase/auth";
import { useHistory } from 'react-router-dom'
const Profile = () => {

    const history = useHistory();

    const handleSignout = async () => {
        await signOut(auth);
        history.replace("/");
    };

    return (
        <div>
            <h3>this is profile</h3>
            <button onClick={handleSignout}> SIGN OUT</button>
        </div>
    )
}

export default Profile