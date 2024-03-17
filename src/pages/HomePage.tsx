import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";
import {removeUser} from "../store/userSlice";
import {useAppDispatch} from "../hooks/reduxHooks";
import {useEffect, useState} from "react";
import {db} from "../firebase";
import { collection, getDocs } from "firebase/firestore"

export const HomePage = () => {
    type User = {
        name: string,
        age: number,
        isMarried: boolean,
        id: string
    }
    const {isAuth, email} = useAuth()
    const dispatch = useAppDispatch()
    const [users, setUsers] = useState<User[]>([])
    const usersCollectionRef = collection(db, "users")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef)
            // setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getUsers()
    }, []);

    if (!isAuth){
        return <Navigate to={"/login"}/>
    }

    return <div>
        <h1>HomePage</h1>
        <h2>Welcome</h2>
        <button onClick={() => dispatch(removeUser())}>log out ({email})</button>
    </div>
}