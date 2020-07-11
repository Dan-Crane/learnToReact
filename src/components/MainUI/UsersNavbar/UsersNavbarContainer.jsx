import React from "react";
import {connect} from "react-redux";
import UsersNavbar from "./UsersNavbar";
import {
	follow,
	setCurrentPage, setToggleIsFetching,
	setTotalCountUsers,
	setUsers,
	unfollow
} from "../../../redux/users-navbar-reducer";
import * as axios from "axios";


class UsersNavbarAPI extends React.Component {
	componentDidMount() {
		this.props.setToggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalCountUsers(response.data.totalCount)
				this.props.setToggleIsFetching(false)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.setToggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setToggleIsFetching(false)
			})
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
	})

const UsersNavbarContainer = connect(matStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalCountUsers,
	setToggleIsFetching,
})(UsersNavbarAPI)

export default UsersNavbarContainer
