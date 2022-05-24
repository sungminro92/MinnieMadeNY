import { useEffect, useStae, useContext } from 'react'
import './style.css'

import AddProducts from './AddProducts'
import Orders from './Orders'
import ViewProducts from './ViewProducts'

import { AuthContext } from '../../context/auth'
import { Firestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'



const AdminPage = () => {
    const { user, admin } = useContext(AuthContext);

    console.log(user)
    useEffect(async () => {
        // const unsub = onSnapshot(collection(db, "flowers"), (flowers) => {

        // })
        // return unsub;
    }, [])

    // console.log("admin status", admin)

    if (admin) {
        return (
            <div className="max-width admin-page-container">
                <h1>THIS IS ADMIN PAGE</h1>
                <h2>{admin && `Welcome, ${user.firstName} + ${user.lastName}`}</h2>
                <div className="admin-panel-container">
                    <AddProducts />
                </div>
                {/* <div>
    
                </div> */}
            </div>
        )
    } else {
        return (
            <div className="max-width admin-page-container">
                <h2>{!admin && "The Admin page is private"}</h2>
                <Link to="/">Go back to HomePage</Link>
                {/* <div className="admin-panel-container max-width">
                    <AddProducts />
                </div> */}
                {/* <div>
    
                </div> */}
            </div>
        )
    }

}

export default AdminPage;