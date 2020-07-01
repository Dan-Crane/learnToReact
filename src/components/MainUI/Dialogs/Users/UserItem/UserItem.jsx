import React from "react";
import s from './UserItem.module.scss'
import {NavLink} from "react-router-dom";

const UserItem = (props) => {
	return (
		<NavLink className={s.nav} to={'/dialogs/' + props.id}>{props.name}</NavLink>
	)
}
export default UserItem
