import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			const itemInCart = state.products.find(
				(item) =>
					item._id === action.payload._id && item.size === action.payload.size
			);
			if (itemInCart) {
				itemInCart.quantity+=action.payload.quantity;
			} else {
				state.products.push({ ...action.payload });
			}
			state.total += action.payload.price * action.payload.quantity;
		},
		increaseAmount: (state, action) => {
			state.quantity += 1;
			const item = state.products.find(
				(item) => item._id === action.payload._id
			);
			if (item) {
				item.quantity++;
			}
			state.total += action.payload.price;
		},
		decreaseAmount: (state, action) => {
			const item = state.products.find(
				(item) => item._id === action.payload._id
			);
			item.quantity--;
			state.quantity -= 1;
			state.total -= action.payload.price;
		},
	},
});

export const { addProduct, increaseAmount, decreaseAmount } = cartSlice.actions;
export default cartSlice.reducer;
