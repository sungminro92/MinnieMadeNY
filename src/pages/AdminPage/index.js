import { useEffect, useStae, useContext } from 'react'
import './style.css'

import AddProducts from './AddProducts'
import Orders from './Orders'
import ViewProducts from './ViewProducts'

import { AuthContext } from '../../context/auth'
import { Firestore } from 'firebase/firestore'



const AdminPage = () => {
    const { user, admin } = useContext(AuthContext);


    useEffect(async () => {
        // const unsub = onSnapshot(collection(db, "flowers"), (flowers) => {

        // })
        // return unsub;
    }, [])

    // console.log("admin status", admin)

    if (admin) {
        return (
            <div>
                <h1>THIS IS ADMIN PAGE</h1>
                <h2>{admin ? "THIS IS ADMIN" : "YOU'RE NOT ADMIN"}</h2>
                <div className="admin-panel-container max-width">
                    <AddProducts />
                </div>
                {/* <div>
    
                </div> */}
            </div>
        )
    } else {
        return (
            <div>
                <h1>THIS IS ADMIN PAGE</h1>
                <h2>{admin ? "THIS IS ADMIN" : "YOU'RE NOT ADMIN"}</h2>
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