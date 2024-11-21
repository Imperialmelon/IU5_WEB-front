import {configureStore, combineReducers} from '@reduxjs/toolkit'

import { AppSlice } from './slices/appSlice';
import { userSlice } from './slices/userSlice';
const rootReducer = combineReducers({
    app: AppSlice.reducer,
    user : userSlice.reducer
})
export const store = configureStore({
    reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>;
