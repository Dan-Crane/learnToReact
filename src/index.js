import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

let renderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
renderEntireTree(store)
store.subscribe(() => {
	renderEntireTree(store.getState())
})

serviceWorker.unregister();
