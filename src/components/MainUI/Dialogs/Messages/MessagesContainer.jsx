import React from "react";
import {addMessageActionCreator, updateChangeMessage} from "../../../../redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../../../../hoc/withAuthRedirect";

const mapStateToProps = (state) => ({
	messages: state.dialogsPage.massages,
	inputMessage: state.dialogsPage.textMessage,
})

const mapDispatchToProps = (dispatch) => ({
	sendMessage: ()=>{dispatch(addMessageActionCreator())},
	changeMessage: (text) => {dispatch(updateChangeMessage(text))}
})


export default compose(
	WithAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)
)(Messages)
