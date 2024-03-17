import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {Form} from "./Form";
import {setUser} from "../store/userSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/reduxHooks";

export const Login = () => {
    const dispatch = useAppDispatch()
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