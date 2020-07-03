import React from "react";
import s from './Dialogs.module.scss'
import Massages from "./Massages/Massages";
import Users from "./Users/Users";

const Dialogs = (props) => {
	return (
		<div className={s.wrapper}>
			<Users users={props.dialogsPage.users}/>
			<Massages massages={props.dialogsPage.massages}
								textMessage={props.dialogsPage.textMessage}
								dispatch={props.dispatch}/>
		</div>
	)
}

export default Dialogs;
