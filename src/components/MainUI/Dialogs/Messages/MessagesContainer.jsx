import React from "react";
import {addMessageActionCreator, updateChangeMessage} from "../../../../redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
	messages: state.dialogsPage.massages,
	inputMessage: state.dialogsPage.textMessage
})

const mapDispatchToProps = (dispatch) => ({
	sendMessage: ()=>{dispatch(addMessageActionCreator())},
	changeMessage: (text) => {dispatch(updateChangeMessage(text))}
})

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
export default MessagesContainer
