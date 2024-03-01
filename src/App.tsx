import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./Components/HomePage";
import {Login} from "./Components/Login";
import {Page404} from "./Components/Page404";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/404"} element={<Page404/>}/>
                <Route path={"*"} element={<Navigate to={"/404"}/>}/>
            </Routes>
        </div>
    );
}

export default App;
