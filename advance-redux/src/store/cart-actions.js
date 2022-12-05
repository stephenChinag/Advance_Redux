import { cartAction } from "./cart-slice";
import { uiActions } from "./ui-slice";
export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const respond = await fetch(
				"https://foodapp-b724c-default-rtdb.firebaseio.com/cart.json",
			);
			if (!respond.ok) {
				throw new Error("Sorry something went wrong ");
			}
			const data = await respond.json();
			return data;
		};
		try {
			const cartData = await fetchData();
			dispatch(
				cartAction.replaceCart({
					items: cartData.items || [],
					totalQuantity: cartData.totalQuantity,
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
