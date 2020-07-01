import React from "react";
import s from './Users.module.scss'
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
	let data = props.users
	let usersData = data.map(n => <UserItem id={n.id} name={n.name}/>)
	return (
		<div>
			{usersData}
		</div>
	)
}

export default Users;