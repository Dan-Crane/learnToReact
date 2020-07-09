import React from "react";
import {connect} from "react-redux";
import UsersNavbar from "./UsersNavbar";
import {
	followAC,
	setCurrentPageAC,
	setTotalCountUsersAC,
	setUsersAC,
	unfollowAC
} from "../../../redux/users-navbar-reducer";

const matStateToProps = (state) => (
	{	users: state.usersNavbar.users,
		totalCountUsers: state.usersNavbar.totalCountUsers,
		pageSize: state.usersNavbar.pageSize,
		currentPage: state.usersNavbar.currentPage,
	})

const mapDispatchToProps = (dispatch) => (
	{	follow: (userId) => dispatch(followAC(userId)),
		unfolow: (userId) => dispatch(unfollowAC(userId)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (page)=> dispatch(setCurrentPageAC(page)),
		setTotalCountUsers: (users) => dispatch(setTotalCountUsersAC(users))
	})

const UsersNavbarContainer = connect(matStateToProps, mapDispatchToProps)(UsersNavbar)

export default UsersNavbarContainer
