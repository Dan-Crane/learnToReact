import React from "react";
import './ProfilePage.scss'
import MyInfo from "./MyInfo/MyInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const ProfilePage = (props) => {
	return (
		<div className='profile-info'>
			<MyInfo/>
			<MyPostContainer store={props.store}/>
		</div>
	)
}
export default ProfilePage
