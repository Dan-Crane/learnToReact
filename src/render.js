import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updateChangePost} from "./redux/state";

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateChangePost={updateChangePost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

serviceWorker.unregister();
