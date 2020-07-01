import React from "react";
import s from './SendMessage.module.scss'

const SendMessage = (props) => {
	let MassageItem = React.createRef()

	const SendMassageItem = () =>{
		let text = MassageItem.current.value
		alert(text)
	}
	return (
		<div className={s.wrapper}>
			<textarea ref={MassageItem} className={s.textarea}></textarea>
			<button onClick={SendMassageItem} className={s.btn}>Post massage</button>
		</div>
	)
}
export default SendMessage
