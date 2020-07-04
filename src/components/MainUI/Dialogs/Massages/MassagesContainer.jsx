import React from "react";
import {addMessageActionCreator, updateChangeMessage} from "../../../../redux/dialogs-reducer";
import Massages from "./Massages";

const MassagesContainer = (props) => {
	let state = props.store.getState()
	console.log(state);
	const SendMassageItem = () => {
		props.store.dispatch(addMessageActionCreator())
	}

	const onChange = (text) => {
		props.store.dispatch(updateChangeMessage(text))
	}

	return (
		<Massages sendMessage={SendMassageItem}
							onChange={onChange}
							messages={state.dialogsPage.massages}
							inputMessage={state.dialogsPage.textMessage}/>
	)
}
export default MassagesContainer
