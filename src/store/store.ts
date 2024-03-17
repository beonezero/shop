import {configureStore} from "@reduxjs/toolkit";
import {userReducers} from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userReducers
    }
})

export type AppDispatch = typeof store.dispatch
export type AppRootStateType = ReturnType<typeof store.getState>