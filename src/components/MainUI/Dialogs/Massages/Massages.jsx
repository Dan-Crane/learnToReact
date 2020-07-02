import React from "react";
import s from './Massages.module.scss'
import MassageItam from "./MassageItem/MassageItem";
import SendMessage from "./SendMessage/SendMessage";

const Massages = (props) => {
	let data = props.massages
	let renderData = data.map(m=> <MassageItam massage={m.massage}/> )

	return (
		<div className={s.wrapper}>
			<div className={s.massages}>
				{renderData}
			</div>
			<SendMessage
				textMessage={props.textMessage}
				addMessage={props.addMessage}
				updateChangeMessage={props.updateChangeMessage}/>
		</div>
	)
}
export default Massages
