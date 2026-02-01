import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/CartSlice"
import userSlice from "./reducers/useSlice";

export const store = configureStore({
    reducer:{
        cartSlice,
        userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;