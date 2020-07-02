import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from './redux/state'
import ReactDOM from 'react-dom';
import App from './App';

let renderEntireTree = (state) => {
	debugger
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}
					 addPost={store.addPost.bind(store)}
					 updateChangePost={store.updateChangePost.bind(store)}
					 addMessage={store.addMessage.bind(store)}
					 updateChangeMessage={store.updateChangeMessage.bind(store)}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
renderEntireTree(store.getState())
store.subscribe(renderEntireTree)

serviceWorker.unregister();
