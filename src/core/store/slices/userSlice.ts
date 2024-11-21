import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface AppUser {
    username : string
    Is_Auth : boolean
}

const initialState : AppUser =  {
    username : "",
    Is_Auth : false
}

export const userSlice = createSlice({
    name : "userSlice",
    initialState,
    reducers: {
        refreshUser : (state) => {
            state.Is_Auth = false,
            state.username = ""
        },
        saveUser : (state, action : PayloadAction<AppUser>) => {
            state.Is_Auth = action.payload.Is_Auth
            state.username = action.payload.username
        }
    }
})

export const {
    saveUser,
    refreshUser
} = userSlice.actions