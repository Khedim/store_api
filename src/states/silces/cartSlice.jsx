import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: JSON.parse(localStorage.getItem('cartItems')) || [],
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find(product => product.id === action.payload.id)
            if (findProduct) {
                findProduct.quantity += 1
            }else {
                const newProduct = {...action.payload, quantity:1}
            state.push(newProduct)
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        },
        clearCart: () => {
            return []
        },
        handelLocalStorage: (state) => {
            localStorage.setItem('cartItems', JSON.stringify(state))
        }
    }
})

export const {addToCart, removeFromCart, clearCart, handelLocalStorage} = cartSlice.actions
export default cartSlice.reducer