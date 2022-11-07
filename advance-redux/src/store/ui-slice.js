const { createSlice } = require("@reduxjs/toolkit");
const showCart = { showCartIsVisble: true };
const uiSlice = createSlice({
	name: "ui",
	initialState: showCart,
	reducers: {
		toggle(state) {
			state.showCartIsVisble = !state.showCartIsVisble;
		},
	},
});
export const uiActions = uiSlice.actions;
export default uiSlice;
