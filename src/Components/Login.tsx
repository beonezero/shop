import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {Form} from "./Form";
import {setUser} from "../store/userSlice";
import {Navigate, useNavigate} from "react-router-dom";

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
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
        <Form title={"login"} handleClick={handleLogin}/>
    )
}