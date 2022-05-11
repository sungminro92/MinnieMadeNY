import { collection, addDoc } from "firebase/firestore";
import db from '../fireConfig'

const HomePage = () => {

    // async function addData() {
    //     const docRef = await addDoc(collection(db, "users"), {
    //         name: "Tokyo",
    //         age: 25,
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    // }

    return (
        <div>
            <h1>Home Page</h1>
            <button className="w-300 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> add data to firebase</button>
        </div>
    )
}

export default HomePage