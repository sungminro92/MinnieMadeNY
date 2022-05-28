import { useEffect, useState, useContext } from 'react'
import './style.css'

import AddProducts from './AddProducts'
import Orders from './Orders'
import ViewProducts from './ViewProducts'

import { AuthContext } from '../../context/auth'
import { Firestore } from 'firebase/firestore'
import { Link } from 'react-router-dom'



const AdminPage = () => {
    const { user, admin } = useContext(AuthContext);
    const [pageType, setPageType] = useState("ADD");
    const [pageSelect, setPageSelect] = useState("")

    useEffect(async () => {
        // const unsub = onSnapshot(collection(db, "flowers"), (flowers) => {

        // })
        // return unsub;
    }, [])

    // const displayAdminPage = (value) => {
    //     switch (value) {
    //         case "PRODUCTS":
    //             return <ViewProducts />
    //         case "ORDERS":
    //             return <Orders />
    //         case "ADD":
    //             return <AddProducts />
    //         default:
    //             return < />
    //     }
    // }

    const handleClick = (value) => {
        setPageSelect(value);
        setPageType(value)
    }

    if (admin) {
        return (
            <div className="max-width admin-page-container">
                <h1>THIS IS ADMIN PAGE</h1>
                <h2>{admin && `Welcome, ${user.firstName} ${user.lastName}`}</h2>
                <div className="page-types">
                    <p className={pageSelect === "ADD" ? "selected" : ""} onClick={() => handleClick("ADD")}>Add Products</p>
                    <p className={pageSelect === "PRODUCTS" ? "selected" : ""} onClick={() => handleClick("PRODUCTS")}>View Products</p>
                    <p className={pageSelect === "ORDERS" ? "selected" : ""} onClick={() => handleClick("ORDERS")}>View Orders</p>

                </div>
                <div className="max-width admin-panel-container">
                    {(function () {
                        switch (pageType) {
                            case "PRODUCTS":
                                return <ViewProducts />
                            case "ORDERS":
                                return <Orders />
                            case "ADD":
                                return <AddProducts />
                            default:
                                return <AddProducts />
                        }
                    })()}
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