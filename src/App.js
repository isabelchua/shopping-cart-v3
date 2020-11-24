import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
//reducer
import { connect, Provider } from "react-redux";
//import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";

const initialStore = {
	cart: cartItems,
	total: 0,
	amount: 5
};

const store = createStore(reducer, initialStore);
// store.dispatch({ type: DECREASE });
// // store.dispatch({ type: RANDOM });
// // store.dispatch({ type: CHANGE_NAME });
// // store.dispatch({ type: RESET });
// store.dispatch({ type: INCREASE });
// console.log(store.getState());

function App() {
	// cart setup

	return (
		<Provider store={store}>
			<Navbar />
			{/* <Navbar cart={store.getState()} /> */}
			<CartContainer cart={cartItems} />
		</Provider>
	);
}

export default App;
