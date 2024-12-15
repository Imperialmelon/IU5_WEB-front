import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";
import { api } from "../../api";
import { AxiosError } from "axios";
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


export const form = createAsyncThunk('shipping/form', async(Shipping_ID : string , { rejectWithValue }) =>{
    try {
        const response = await api.shipping.shippingFormUpdate(Shipping_ID)
        
        // Проверяем статус ответа
        if (response.status === 200 || response.status === 201) {
          return 'Успешно сформировано'
        }
        
        return rejectWithValue('Неизвестная ошибка')
      } catch (err) {
        const error = err as AxiosError
        
        // if (error.response?.status === 400) {
        //   return rejectWithValue('Неверные данные для входа')
        // }
        if (error.response?.status === 401) {
          return rejectWithValue('Неавторизованный доступ')
        }
        if (error.response?.status === 404) {

            // navigate('/cargo_catalog')
            
          return rejectWithValue('Отправление не найдено')
        }
        if (!error.response) {
          return rejectWithValue('Ошибка сети. Проверьте подключение')
        }
        
        return rejectWithValue('Сервер временно недоступен')
      }
})





export const clear = createAsyncThunk('shipping/clear', async(Shipping_ID : string , { rejectWithValue }) =>{
    try {
        const response = await api.shipping.shippingDeleteDelete(Shipping_ID)
        
        // Проверяем статус ответа
        if (response.status === 200 || response.status === 201) {
          return 'Успешно удалено'
        }
        
        return rejectWithValue('Неизвестная ошибка')
      } catch (err) {
        const error = err as AxiosError
        
        // if (error.response?.status === 400) {
        //   return rejectWithValue('Неверные данные для входа')
        // }
        if (error.response?.status === 401) {
          return rejectWithValue('Неавторизованный доступ')
        }
        if (error.response?.status === 404) {

            // navigate('/cargo_catalog')
            
          return rejectWithValue('Отправление не найдено')
        }
        if (!error.response) {
          return rejectWithValue('Ошибка сети. Проверьте подключение')
        }
        
        return rejectWithValue('Сервер временно недоступен')
      }
})


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
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(form.pending, (state) => {
            console.log('pending')
        
        })
        .addCase(form.fulfilled, (state, action) => {
            state.Shipping_id = 0
        })
        .addCase(form.rejected, (state, action) => {
            console.log('failed')
        })
        .addCase(clear.pending, (state) => {
            console.log('pending')
        
        })
        .addCase(clear.fulfilled, (state, action) => {
            state.Shipping_id = 0
        })
        .addCase(clear.rejected, (state, action) => {
            console.log('failed')
        })
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