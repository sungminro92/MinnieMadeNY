import { useEffect, useStae } from 'react'
import './style.css'
import { user } from '../../context/auth'
import { Firestore } from 'firebase/firestore'

const AdminPage = () => {
    useEffect(async () => {
        // const unsub = onSnapshot(collection(db, "flowers"), (flowers) => {

        // })
        // return unsub;
    }, [])

    // console.log("admin status", admin)
    return (
        <div>
            <h1>THIS IS ADMIN PAGE</h1>
            {/* <h2>{admin ? "THIS IS ADMIN" : "YOU'RE NOT ADMIN"}</h2> */}
            <div className="admin-panel">

            </div>
            <div>

            </div>
        </div>
    )
}

export default AdminPage;