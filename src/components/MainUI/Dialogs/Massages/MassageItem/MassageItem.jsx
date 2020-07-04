import React from "react";
import s from './MassageItem.module.scss'

const MassageItem = (props) => {

	return (
		<span className={s.messageItem}>{props.message}</span>
	)
}
export default MassageItem
