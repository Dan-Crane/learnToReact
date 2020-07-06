import React from "react";
import s from './Friends.module.scss'
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {
	let item = props.friends.map(f=> <FriendItem avatar={f.avatar} key={f.id} name={f.name}/>)
	return (
		<div className={s.friends}>
			{item}
		</div>
	)
}
export default Friends
