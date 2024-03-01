import {SignUp} from "../Components/SignUp";
import {NavLink} from "react-router-dom";

export const RegisterPage = () => {
    return <div>
        <h1>Register</h1>
        <SignUp/>
        <p>Have an account? <NavLink to={"/login"}>Login</NavLink></p>
    </div>
}