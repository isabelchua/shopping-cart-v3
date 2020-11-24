import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
//reducer

const initialStore = {
	count: 0
};

function reducer(state, action) {
	console.log({ state, action });
	if (action.type === "DECREASE") {
		return { count: state.count - 1 };
	}
	if (action.type === "INCREASE") {
		return { count: state.count + 1 };
	}
	if (action.type === "RESET") {
		return { count: 0 };
	}
	return state;
}
const store = createStore(reducer, initialStore);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "RESET" });
console.log(store.getState());

function App() {
	// cart setup

	return (
		<main>
			<Navbar cart={store.getState()} />
			<CartContainer cart={cartItems} />
		</main>
	);
}

export default App;
