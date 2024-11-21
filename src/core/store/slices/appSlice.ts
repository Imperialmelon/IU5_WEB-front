import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AppData{
    Cargo_name : string
    price_filter : string
    filterStatus? : string
    filterStartDate? : string
    filterEndDate? : string
}

const initialState : AppData =  {
    Cargo_name: "",
    price_filter : '0',
    filterStatus: undefined,
    filterStartDate: undefined,
    filterEndDate: undefined,


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
    setFilterEndDate
} = AppSlice.actions;