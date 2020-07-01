import React from "react";
import s from './Dialogs.module.scss'
import Massages from "./Massages/Massages";
import Users from "./Users/Users";

const Dialogs = (props) => {
	console.log(props.state.massage);
	return (
		<div className={s.wrapper}>

			<Users users={props.state.users}/>
			<Massages massages={props.state.massages}/>
		</div>
	)
}

export default Dialogs;
