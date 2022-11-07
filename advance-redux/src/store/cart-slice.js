import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cartUpdate",
	initialState: { items: [], totalQuantity: 0 },
	reducers: {
		addItemtoCart(state, action) {
			const newItem = action.payload;
			const exitingItems = state.items.find((item) => item.id === newItem.id);
			if (!exitingItems) {
				state.items.push({
					itemId: newItem.id,
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
	},
});

export const cartAction = cartSlice.actions;
export default cartSlice;
