import React from 'react';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state'
import ReactDOM from 'react-dom';
import App from './App';
import {addMessage, addPost, updateChangeMessage, updateChangePost} from "./redux/state";

let renderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state}
					 addPost={addPost}
					 updateChangePost={updateChangePost}
					 addMessage={addMessage}
					 updateChangeMessage={updateChangeMessage}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
renderEntireTree(state)
subscribe(renderEntireTree)

serviceWorker.unregister();
