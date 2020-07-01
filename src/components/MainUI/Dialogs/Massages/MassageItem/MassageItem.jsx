import React from "react";
import s from './MassageItem.module.scss'

const MassageItam = (props) => {
	return (
		<span className={s.massagItem}>{props.massage}</span>
	)
}
export default MassageItam
