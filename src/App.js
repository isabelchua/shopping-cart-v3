import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
//reducer
import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";

const initialStore = {
	count: 0,
	name: "john"
};

const store = createStore(reducer, initialStore);
store.dispatch({ type: DECREASE });
// store.dispatch({ type: RANDOM });
// store.dispatch({ type: CHANGE_NAME });
// store.dispatch({ type: RESET });
store.dispatch({ type: INCREASE });
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
