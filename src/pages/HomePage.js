import { FirebaseError } from "firebase/app";
import { collection, addDoc, doc, onSnapShot } from "firebase/firestore";
import { db } from '../fireConfig'
import { products } from '../products'
const HomePage = () => {

    const addData = () => {
        products.map(async (product) => {
            try {
                await addDoc(collection(db, "flowers"), product);
                console.log("products uploaded")
            } catch (error) {
                console.log(error)
            }
        })
    }

    const getData = () => {

    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={addData} className="w-300 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> add data to firebase</button>
        </div>
    )
}

export default HomePage