import {
	DECREASE,
	INCREASE,
	REMOVE,
	CLEAR_CART,
	GET_TOTALS,
	TOGGLE_AMOUNT
} from "./reducers/actions";
import cartItems from "./reducers/cart-items";

const initialStore = [
	{
		cart: cartItems,
		total: 0,
		amount: 0
	}
];

//
function reducer(state = initialStore, action) {
	switch (action.type) {
		case CLEAR_CART:
			return { ...state, cart: [] };
		case DECREASE:
			//console.log("decreased");

			let tempCart = state.cart.map(cartItem => {
				if (cartItem.id === action.payload.id) {
					cartItem = { ...cartItem, amount: cartItem.amount - 1 };
				}
				return cartItem;
			});

			// let tempCart = [];
			// if (action.payload.amount === 1) {
			// 	tempCart = state.cart.filter(
			// 		cartItem => cartItem.id !== action.payload.id
			// 	);
			// } else {
			// 	tempCart = state.cart.map(cartItem => {
			// 		if (cartItem.id === action.payload.id) {
			// 			cartItem = { ...cartItem, amount: cartItem.amount - 1 };
			// 		}
			// 		return cartItem;
			// 	});
			// }
			return { ...state, cart: tempCart };
		case INCREASE:
			//console.log("increased");
			let tempCartIn = state.cart.map(cartItem => {
				if (cartItem.id === action.payload.id) {
					cartItem = { ...cartItem, amount: cartItem.amount + 1 };
				}
				return cartItem;
			});
			return { ...state, cart: tempCartIn };

		case REMOVE:
			return {
				...state,
				cart: state.cart.filter(
					cartItem => cartItem.id !== action.payload.id
				)
			};
		case GET_TOTALS:
			let { total, amount } = state.cart.reduce(
				(cartTotal, cartItem) => {
					//console.log(cartItem);
					const { price, amount } = cartItem;
					const itemTotal = price * amount;
					cartTotal.amount += amount;

					cartTotal.total += itemTotal;
					return cartTotal;
				},
				{
					total: 0,
					amount: 0
				}
			);
			total = parseFloat(total.toFixed(2));
			return { ...state, total, amount };
		case TOGGLE_AMOUNT:
			return {
				...state,
				cart: state.cart.map(cartItem => {
					if (cartItem.id === action.payload.id) {
						if (action.payload.toggle === "inc") {
							return (cartItem = {
								...cartItem,
								amount: cartItem.amount + 1
							});
						}
						if (action.payload.toggle === "dec") {
							return (cartItem = {
								...cartItem,
								amount: cartItem.amount - 1
							});
						}
					}
					return cartItem;
				})
			};

		default:
			return state;
	}
}

export default reducer;

// if (action.type === CLEAR_CART) {
// 	return { ...state, cart: [] };
// }
// console.log({ state, action });
// if (action.type === DECREASE) {
// 	return { ...state, count: state.count - 1 };
// }
// if (action.type === INCREASE) {
// 	return { ...state, count: state.count + 1 };
// }
// if (action.type === RESET) {
// 	return { ...state, count: 0 };
// }
// if (action.type === CHANGE_NAME) {
// 	return { ...state, name: "bobo" };
// }
// return state;
