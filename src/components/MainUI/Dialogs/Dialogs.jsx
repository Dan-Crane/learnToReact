import React from "react";
import s from './Dialogs.module.scss'
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";

const Dialogs = (props) => {
	return (
		<div className={s.wrapper}>
			<UsersContainer/>
			<MessagesContainer/>
		</div>
	)
}

export default Dialogs;
