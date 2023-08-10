import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		promoProducts: [],
		quantity: 0,
		total: 0,
		iterator: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.quantity += 1;
			const itemInCart = state.products.find(
				(item) =>
					item._id === action.payload._id && item.size === action.payload.size
			);
			if (itemInCart) {
				itemInCart.quantity += action.payload.quantity;
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
		addPromo: (state, action) => {
			state.quantity += 1;
			state.products.push({ ...action.payload });
			state.total += action.payload.price * action.payload.quantity;
		},
	},
});

export const { addProduct, increaseAmount, decreaseAmount, addPromo } =
	cartSlice.actions;
export default cartSlice.reducer;
