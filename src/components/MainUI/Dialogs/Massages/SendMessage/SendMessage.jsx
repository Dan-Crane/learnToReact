import React from "react";
import s from './SendMessage.module.scss'
import {addMessageActionCreator, updateChangeMessage} from "../../../../../redux/dialogs-reducer";

const SendMessage = (props) => {
	const SendMassageItem = () => {
		props.dispatch(addMessageActionCreator())
	}

	const onChangeValue = (e) => {
		let text = e.target.value
		props.dispatch(updateChangeMessage(text))
	}

	return (
		<div className={s.wrapper}>
			<textarea onChange={onChangeValue}
								className={s.textarea}
								value={props.textMessage}/>
			<button onClick={SendMassageItem} className={s.btn}>Post massage</button>
		</div>
	)
}
export default SendMessage
