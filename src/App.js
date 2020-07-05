import React from 'react';
import {Route} from "react-router-dom";
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
		<div className='wrapper'>
			<Header/>
			<Navbar/>
			<div className='wrapper__content'>
				<Route path='/profile'
							 render={() => <Profile/>}/>
				<Route path='/dialogs'
							 render={() => <Dialogs/>}/>
				<Route path='/news' component={News}/>
				<Route path='/music' component={Music}/>
				<Route path='/settings' component={Settings}/>
			</div>
		</div>
	);
}

export default App;
