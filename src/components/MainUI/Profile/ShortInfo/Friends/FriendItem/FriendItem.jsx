import React from "react";
import s from './FriendItem.module.scss'

const FriendItem=(props)=>{
	return (
		<div className={s.friendItem}>
			<img className={s.avatar} src={props.avatar} alt=""/>
			<div>{props.name}</div>
		</div>
	)
}

export default FriendItem
