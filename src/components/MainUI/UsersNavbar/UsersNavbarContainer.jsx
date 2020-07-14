import React from "react";
import {connect} from "react-redux";
import UsersNavbar from "./UsersNavbar";
import {
	follow,
	getUsers,
	setCurrentPage, setToggleIsProgress,
	setTotalCountUsers, unfollow,
} from "../../../redux/users-navbar-reducer";


class UsersNavbarAPI extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.getUsers(pageNumber, this.props.pageSize)
	}

	render() {
		return <UsersNavbar users={this.props.users}
												totalCountUsers={this.props.totalCountUsers}
												pageSize={this.props.pageSize}
												currentPage={this.props.currentPage}
												follow={this.props.follow}
												unfollow={this.props.unfollow}
												onPageChanged={this.onPageChanged}
												isFetching={this.props.isFetching}
												setToggleIsProgress={this.props.setToggleIsProgress}
												followingInProgress={this.props.followingInProgress}
		/>
	}
}

const matStateToProps = (state) => (
	{
		users: state.usersNavbar.users,
		totalCountUsers: state.usersNavbar.totalCountUsers,
		pageSize: state.usersNavbar.pageSize,
		currentPage: state.usersNavbar.currentPage,
		isFetching: state.usersNavbar.isFetching,
		followingInProgress: state.usersNavbar.followingInProgress
	})

const UsersNavbarContainer = connect(matStateToProps, {
	setCurrentPage,
	setTotalCountUsers,
	setToggleIsProgress,
	getUsers,
	follow,
	unfollow
})(UsersNavbarAPI)

export default UsersNavbarContainer
