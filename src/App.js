import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.scss';
import Navbar from "./components/MainUI/Navbar/Navbar";
import Header from "./components/MainUI/Header/Header";
import Profile from "./components/MainUI/Profile/Profile";
import Dialogs from "./components/MainUI/Dialogs/Dialogs";
import News from "./components/MainUI/News/News";
import Music from "./components/MainUI/Music/Music";
import Settings from "./components/MainUI/Settings/Settings";


let App = (props) => {
	return (
		<BrowserRouter>
			<div className='wrapper'>
				<Header/>
				<Navbar/>
				<div className='wrapper__content'>
					<Route path='/profile'
								 render={() => <Profile
									 state={props.state.profilePage}
									 updateChangePost={props.updateChangePost}
									 addPost={props.addPost}/>}/>
					<Route path='/dialogs'
								 render={() => <Dialogs
									 updateChangeMessage={props.updateChangeMessage}
									 addMessage={props.addMessage}
									 dialogsPage={props.state.dialogsPage}/>}/>
					<Route path='/news' component={News}/>
					<Route path='/music' component={Music}/>
					<Route path='/settings' component={Settings}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
