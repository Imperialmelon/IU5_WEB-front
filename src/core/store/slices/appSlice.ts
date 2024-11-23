import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";
export interface AppData{
    Cargo_name : string
    price_filter : string
    filterStatus? : string
    filterStartDate? : string
    filterEndDate? : string
    Shipping_id : number
}

const initialState : AppData =  {
    Cargo_name: "",
    price_filter : '0',
    filterStatus: undefined,
    filterStartDate: undefined,
    filterEndDate: undefined,
    Shipping_id : 0


}

export const AppSlice = createSlice({
    name : "appSlice",
    initialState,
    reducers: {
        refreshApp: (state) =>{
            state.Cargo_name = ""
            state.price_filter = '0'
            state.filterStatus = undefined,
            state.filterStartDate =  undefined,
            state.filterEndDate = undefined
            state.Shipping_id = 0
        },
        setCargoName: (state, action : PayloadAction<string>)=> {
            state.Cargo_name = action.payload
        },
        setPriceFilter: (state, action: PayloadAction<string>) =>{
            state.price_filter = (action.payload)
        },
        setFilterStatus: (state, action :PayloadAction<string> ) =>{
            state.filterStatus = action.payload
        },
        setFilterStartDate: (state, action :PayloadAction<string> ) =>{
            state.filterStartDate = action.payload
        },
        setFilterEndDate: (state, action :PayloadAction<string> ) =>{
            state.filterEndDate = action.payload
        },
        setShippingData : (state, action : PayloadAction<number>) =>{
            state.Shipping_id = action.payload
            console.log( state.Shipping_id)
        }
    }
});

export const {
    refreshApp,
    // refreshApp,
    setCargoName,
    setPriceFilter,
    setFilterStatus,
    setFilterStartDate,
    setFilterEndDate,
    setShippingData
} = AppSlice.actions;