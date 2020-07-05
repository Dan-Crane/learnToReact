import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
	friends: state.profilePage.shortInfo.friends
})
const mapDispatchToProps = (dispatch) => ({})

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export default FriendsContainer
