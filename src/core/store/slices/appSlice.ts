import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AppData{
    Cargo_name : string
    price_filter : string
}

const initialState : AppData =  {
    Cargo_name: "",
    price_filter : '0'

}

export const AppSlice = createSlice({
    name : "appSlice",
    initialState,
    reducers: {
        refreshApp: (state) =>{
            state.Cargo_name = ""
            state.price_filter = '0'
        },
        setCargoName: (state, actioin : PayloadAction<string>)=> {
            state.Cargo_name = actioin.payload
        },
        setPriceFilter: (state, action: PayloadAction<string>) =>{
            state.price_filter = (action.payload)
        }
    }
});

export const {
    refreshApp,
    setCargoName,
    setPriceFilter,
} = AppSlice.actions;