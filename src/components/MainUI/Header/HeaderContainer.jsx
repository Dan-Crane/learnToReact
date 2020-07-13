import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../redux/auth-reducer";
import * as axios from "axios";

class HeaderContainer extends React.Component{
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true,
		})
			.then(response => {
				let {id, login, email} = response.data.data
				if (response.data.resultCode === 0) {
					this.props.setAuthUserData(id, login, email)
				}
			})
	}

	render(){
		return (
			<Header {...this.props}/>
		)
	}
}

const mapStateToProps = (state) => ({
	login: state.auth.data.login,
	isAuth: state.auth.isAuth,
})

export default connect (mapStateToProps, {
	setAuthUserData,
}) (HeaderContainer);
