import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice"
import CategorySlice from "./Slices/CategorySlice"

const Store=configureStore({
    reducer:{
        cart:CartSlice,
        category:CategorySlice,
    }
 });

export default Store;