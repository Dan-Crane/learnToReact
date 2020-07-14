import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersNavbarReducer from "./users-navbar-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		usersNavbar: usersNavbarReducer,
		sidebar: sidebarReducer,
		auth: authReducer,
	}
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
