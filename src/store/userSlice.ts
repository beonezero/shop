import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type initialStateType = {
    email: string | null,
    token: string | null,
    id: string | null
}

const initialState: initialStateType = {
    email: null,
    token: null,
    id: null
}

const userSlice = createSlice({
        name: "user",
        initialState,
        reducers: {
            setUser(state, action: PayloadAction<{ email: string | null, token: string | null, id: string | null }>) {
                state.email = action.payload.email
                state.token = action.payload.token
                state.id = action.payload.id
            },
            removeUser(state) {
                state.email = null
                state.token = null
                state.id = null
            }
        }
    }
)

export const {setUser, removeUser} = userSlice.actions
export const userReducers = userSlice.reducer