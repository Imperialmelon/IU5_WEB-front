import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
} from "react-redux";
import { AppSlice } from './slices/appSlice';
const rootReducer = combineReducers({
    app: AppSlice.reducer,
})
export const store = configureStore({
    reducer: rootReducer,
})
export type RootState = ReturnType<typeof store.getState>;
export const useSelector =  useReduxSelector;
export const useDispatch = () => useReduxDispatch();