const { createSlice } = require("@reduxjs/toolkit");
const showCart = { showCartIsVisble: true, notification: null };
const uiSlice = createSlice({
	name: "ui",
	initialState: showCart,
	reducers: {
		toggle(state) {
			state.showCartIsVisble = !state.showCartIsVisble;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;
