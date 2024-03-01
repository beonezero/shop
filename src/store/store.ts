import {configureStore} from "@reduxjs/toolkit";
import {userReducers} from "./userSlice";
import {TypedUseSelectorHook, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        user: userReducers
    }
})

export type AppRootStateType = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector