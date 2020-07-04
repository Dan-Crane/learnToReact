import React from "react";
import './Profile.scss'
import ShortInfo from "./ShortInfo/ShortInfo";
import ProfilePage from "./ProfilePage/ProfilePage";

const Profile = (props) => {

	return (
		<div className='profile'>
			<ShortInfo
				store={props.store}/>
			<ProfilePage
				store={props.store}/>
		</div>
	)
}

export default Profile;
