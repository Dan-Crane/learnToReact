import React from "react";
import s from './Dialogs.module.scss'
import MassagesContainer from "./Massages/MassagesContainer";
import UsersContainer from "./Users/UsersContainer";

const Dialogs = (props) => {
	return (
		<div className={s.wrapper}>
			<UsersContainer store={props.store}/>
			<MassagesContainer
				store={props.store}/>
		</div>
	)
}

export default Dialogs;
