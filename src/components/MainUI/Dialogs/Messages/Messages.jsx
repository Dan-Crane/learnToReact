import React from "react";
import s from './Messages.module.scss'
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";

const Messages = (props) => {
	let messageElement = props.messages.map(m => <MessageItem message={m.massage} key={m.id}/>)

	const SendMassageItem = () => {
		props.sendMessage()
	}

	const onChangeValue = (e) => {
		let text = e.target.value
		props.changeMessage(text)
	}

	if(!props.isAuth) return <Redirect to={'/login'} />
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
export default Messages
