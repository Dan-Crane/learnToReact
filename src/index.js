import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App store={store}/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
renderEntireTree(store)
store.subscribe(() => {
	renderEntireTree(store.getState())
})

serviceWorker.unregister();
