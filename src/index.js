import React from 'react';
import * as serviceWorker from './serviceWorker';
import state from './redux/state'
import {addPost, updateChangePost} from "./redux/state";
import {renderEntireTree} from "./render";

renderEntireTree(state, addPost, updateChangePost)

serviceWorker.unregister();
