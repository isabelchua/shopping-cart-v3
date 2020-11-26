import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// redux stuff
//import { createStore } from "redux";

// const store = createStore(
// 	reducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// store.dispatch({ type: DECREASE });
// // store.dispatch({ type: RANDOM });
// // store.dispatch({ type: CHANGE_NAME });
// // store.dispatch({ type: RESET });
// store.dispatch({ type: INCREASE });
// console.log(store.getState());

function App() {
	// cart setup

	return (
		<div>
			<Navbar />
			{/* <Navbar cart={store.getState()} /> */}
			{/* <CartContainer cart={cartItems} /> */}
			<CartContainer />
		</div>
	);
}

export default App;
