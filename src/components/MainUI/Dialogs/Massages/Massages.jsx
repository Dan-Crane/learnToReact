import React from "react";
import s from './Massages.module.scss'
import MassageItem from "./MassageItem/MassageItem";

const Massages = (props) => {
	let messageElement = props.messages.map(m => <MassageItem message={m.massage}/>)

	const SendMassageItem = () => {
		props.sendMessage()
	}

	const onChangeValue = (e) => {
		let text = e.target.value
		props.onChange(text)
	}

	return (
		<div className={s.wrapper}>
			<div className={s.messages}>
				{messageElement}
			</div>
			<textarea onChange={onChangeValue}
								className={s.textarea}
								value={props.inputMessage}/>
			<button onClick={SendMassageItem} className={s.btn}>Post massage</button>
		</div>
	)
}
export default Massages
