import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Page404} from "./Components/Page404";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {CountriesPage} from "./pages/CountriesPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/countries"} element={<CountriesPage/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/register"} element={<RegisterPage/>}/>
                <Route path={"/404"} element={<Page404/>}/>
                <Route path={"*"} element={<Navigate to={"/404"}/>}/>
            </Routes>
        </div>
    );
}

export default App;
