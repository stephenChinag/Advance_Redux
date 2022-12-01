import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { title, quantity, total, price, id } = props.item;
	const deleteItemHandler = () => {
		dispatch(cartAction.removeItemFromCart(id));
	};

	const addItemHandler = () => {
		dispatch(
			cartAction.addItemtoCart({
				id,
				title,
				price,
			}),
		);
	};
	useEffect(() => {
		fetch("https://foodapp-b724c-default-rtdb.firebaseio.com/cart.json", {
			method: "PUT",
			body: JSON.stringify(cart),
		});
	}, [cart]);

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}
					<span className={classes.itemprice}>${price.toFixed(2)}/item</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					<span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={deleteItemHandler}>-</button>
					<button onClick={addItemHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
