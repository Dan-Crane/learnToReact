import React from "react";
import s from './Friends.module.scss'

const FriendItem=(props)=>{
	return (
		<div className={s.friendItem}>
			<img className={s.avatar} src={props.avatar} alt=""/>
			<div>{props.name}</div>
		</div>
	)
}

const Friends = (props) => {
	let item = props.friends.map(f=> <FriendItem avatar={f.avatar} name={f.name}/>)
	return (
		<div className={s.friends}>
			{item}
		</div>
	)
}
export default Friends
