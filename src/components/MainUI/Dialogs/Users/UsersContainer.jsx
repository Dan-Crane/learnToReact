import React from "react";
import Users from "./Users";

const UsersContainer = (props) => {
let state = props.store.getState()
	return (
		<div>
			<Users users={state.dialogsPage.users}/>
		</div>
	)
}

export default UsersContainer;
