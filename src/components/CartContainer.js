import React from "react";
import CartItem from "./CartItem";
import { connect, useDispatch, useSelector } from "react-redux";
import { CLEAR_CART, GET_TOTALS } from "../reducers/actions";

//const CartContainer = ({ cart = [], total, dispatch }) => {
const CartContainer = () => {
	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch({ type: GET_TOTALS });
	}, [cart.cart]);

	//console.log(cart);

	if (cart.cart.length === 0) {
		return (
			<section className="cart">
				{/* cart header */}
				<header>
					<h2>your bag</h2>
					<h4 className="empty-cart">is currently empty</h4>
				</header>
			</section>
		);
	}
	return (
		<section className="cart">
			{/* cart header */}
			<header>
				<h2>your bag</h2>
			</header>
			{/* cart items */}
			<article>
				{cart.cart.map(item => {
					return <CartItem key={item.id} {...item} />;
				})}
			</article>
			{/* cart footer */}
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>{cart.total}</span>
					</h4>
				</div>
				<button
					className="btn clear-btn"
					onClick={() => dispatch({ type: CLEAR_CART })}
				>
					clear cart
				</button>
			</footer>
		</section>
	);
};

// function mapStateToProps(store) {
// 	const { cart, total } = store;
// 	// return {cart:store.cart, total: store.total}
// 	return { cart, total };
// }

export default CartContainer;

// function mapStateToProps(store) {
// 	const { cart, total } = store;
// 	// return {cart:store.cart, total: store.total}
// 	return { cart, total };
// }

// export default connect(mapStateToProps)(CartContainer);
