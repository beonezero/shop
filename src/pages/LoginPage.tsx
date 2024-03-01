import {Login} from "../Components/Login";
import {NavLink} from "react-router-dom";

export const LoginPage = () => {
    return <div>
        <h1>Login</h1>
        <Login/>
        <p>No account? <NavLink to={"/register"}>Register</NavLink></p>
    </div>
}