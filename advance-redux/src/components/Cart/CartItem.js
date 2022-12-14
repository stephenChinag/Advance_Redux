import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
	const dispatch = useDispatch();

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

	return (
		<Fragment>
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
		</Fragment>
	);
};

export default CartItem;
