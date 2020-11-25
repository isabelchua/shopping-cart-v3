import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// redux stuff
import { createStore } from "redux";
//reducer
import { Provider } from "react-redux";
//import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";

const store = createStore(reducer);
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
			{/* <CartContainer cart={cartItems} /> */}
			<CartContainer />
		</Provider>
	);
}

export default App;
