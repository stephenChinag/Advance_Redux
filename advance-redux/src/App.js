import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { fetchCartData, sendCartData } from "./store/cart-actions";
import Notification from "./components/UI/Notification";
let initial = true;
function App() {
	const showCart = useSelector((state) => state.ui.showCartIsVisble);
	const dispatch = useDispatch();
	const notification = useSelector((state) => state.ui.notification);
	const cart = useSelector((state) => state.cart);
	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);
	useEffect(() => {
		if (initial) {
			initial = false;
			return;
		}
		if (cart.changes) {
			dispatch(sendCartData(cart));
		}
	}, [cart, dispatch]);
	return (
		<Fragment>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
