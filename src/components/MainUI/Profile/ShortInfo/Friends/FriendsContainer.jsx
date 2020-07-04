import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import Friends from "./Friends";


const FriendsContainer = (props) => {
	let state = props.store.getState()
	return (
		<Friends friends={state.profilePage.shortInfo.friends}/>
	)
}
export default FriendsContainer
