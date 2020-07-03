import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './redux/state'
import ReactDOM from 'react-dom';
import App from './App';

let renderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}
					 dispatch={store.dispatch.bind(store)}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
renderEntireTree(store.getState())
store.subscribe(renderEntireTree)

serviceWorker.unregister();
