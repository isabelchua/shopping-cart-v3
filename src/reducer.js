import { DECREASE, INCREASE, REMOVE, CLEAR_CART } from "./actions";

//
function reducer(state, action) {
	switch (action.type) {
		case CLEAR_CART:
			return { ...state, cart: [] };
		case DECREASE:
			console.log("decreased");
			return state;
		case INCREASE:
			console.log("increased");
			return state;

		case REMOVE:
			console.log(action.payload.id);
			return {
				...state,
				cart: state.cart.filter(
					cartItem => cartItem.id !== action.payload.id
				)
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
