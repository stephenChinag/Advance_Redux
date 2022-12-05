import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cartUpdate",
	initialState: { items: [], totalQuantity: 0, changes: false },
	reducers: {
		replaceCart(state, action) {
			state.totalQuantity = action.payload.totalQuantity;
			state.items = action.payload.items;
		},
		addItemtoCart(state, action) {
			const newItem = action.payload;
			const exitingItems = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity++;
			state.changes = true;

			if (!exitingItems) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				});
			} else {
				exitingItems.quantity++;
				exitingItems.totalPrice = exitingItems.totalPrice + newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const exitingItems = state.items.find((item) => item.id === id);
			state.totalQuantity--;
			state.changes = true;
			if (exitingItems.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				exitingItems.quantity--;
				exitingItems.totalPrice = exitingItems.totalPrice - exitingItems.price;
			}
		},
	},
});

export const cartAction = cartSlice.actions;
export default cartSlice;
