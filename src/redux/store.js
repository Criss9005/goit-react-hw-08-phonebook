import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import { authReducer } from './auth/authSlice';
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";


const persisConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    users: usersReducer,
    auth: authReducer,
})

const persistedReducer = persistReducer(persisConfig, reducer);


export const store = configureStore({
   reducer: persistedReducer,
})