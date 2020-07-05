import React from "react";
import s from './MessageItem.module.scss'

const MessageItem = (props) => {

	return (
		<span className={s.messageItem}>{props.message}</span>
	)
}
export default MessageItem
