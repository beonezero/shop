import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Form} from "./Form";
import {setUser} from "../store/userSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/reduxHooks";

export const SignUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleRegester = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    token: user.refreshToken,
                    id: user.uid
                }))
                navigate("/")
            })
            .catch((e) => {
                console.log(e)
            })
    }
    return (
        <Form title={"register"} handleClick={handleRegester}/>
    )
}