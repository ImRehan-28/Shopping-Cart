import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slices/Cartslice";
export const Store =configureStore(
    {
        reducer:{
            cart:CartReducer,
        },
    }
);