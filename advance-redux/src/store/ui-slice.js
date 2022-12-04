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

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: "pending",
				title: "sending....",
				message: "sending a cart data ",
			}),
		);
		const sendResponse = async () => {
			const respond = await fetch(
				"https://foodapp-b724c-default-rtdb.firebaseio.com/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				},
			);
			if (!respond.ok) {
				throw new Error("sending Cart fail");
			}
		};
		try {
			await sendResponse();

			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Succses",
					message: "sending a cart data ",
				}),
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error..",
					message: "Error please try again",
				}),
			);
		}
	};
};
export const uiActions = uiSlice.actions;
export default uiSlice;
