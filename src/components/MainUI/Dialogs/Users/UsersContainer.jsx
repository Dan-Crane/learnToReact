import React from "react";
import Users from "./Users";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
	users : state.dialogsPage.users
})

const mapDispatchToProps = (dispatch) => ({

})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;
