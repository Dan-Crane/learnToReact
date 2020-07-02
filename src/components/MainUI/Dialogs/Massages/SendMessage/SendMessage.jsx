import React from "react";
import s from './SendMessage.module.scss'

const SendMessage = (props) => {
	let MassageItem = React.createRef()

	const SendMassageItem = () => {
		props.addMessage()
	}

	const onChangeValue = () => {
		let text = MassageItem.current.value
		props.updateChangeMessage(text)
	}

	return (
		<div className={s.wrapper}>
			<textarea onChange={onChangeValue} ref={MassageItem}
								className={s.textarea}
								value={props.textMessage}/>
			<button onClick={SendMassageItem} className={s.btn}>Post massage</button>
		</div>
	)
}
export default SendMessage
