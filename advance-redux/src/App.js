import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { sendCartData } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
let initial = true;
function App() {
	const showCart = useSelector((state) => state.ui.showCartIsVisble);
	const dispatch = useDispatch();
	const notification = useSelector((state) => state.ui.notification);
	const cart = useSelector((state) => state.cart);
	useEffect(() => {
		if (initial) {
			initial = false;
			return;
		}
		dispatch(sendCartData(cart));
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
