import { createSlice } from "@reduxjs/toolkit";

interface CartItem{
    id: number | string;
    name: string;
    qty: number,
    sum: number,
    price: number
}

interface CartState{
    items: CartItem[]
}

const initialState : CartState = {
    items:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{

        // Add Item to Cart
        addItemToCart: (state,action) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            )
            if(existingItem){
                existingItem.qty += 1,
                existingItem.sum += action.payload.price
            }else{
                state.items.push({
                    ...action.payload,
                    qty: 1,
                    sum: action.payload.price
                })
            }
        },

        // Remove Item from Cart
        removeItemFromCart : (state,action) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            )
            if(existingItem && existingItem.qty != 1){
                existingItem.qty -= 1,
                existingItem.sum -= action.payload.price
            }else{
                state.items = state.items.filter(
                    item => item.id !== action.payload.id
                )
            }
        },

        // Remove Product from Cart
        removeProductFromCart: (state,action) => {
            state.items = state.items.filter(
                    item => item.id !== action.payload.id
            )
        },

        // EmptyCart
        exptyCart: (state) => {
            state.items = []
        }
    }
})

export const {addItemToCart, removeItemFromCart,removeProductFromCart,exptyCart} = cartSlice.actions;

export default cartSlice.reducer