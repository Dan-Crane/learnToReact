import React from "react";
import './Profile.scss'
import ShortInfo from "./ShortInfo/ShortInfo";
import ProfilePage from "./ProfilePage/ProfilePage";

const Profile = (props) => {
	return(
		<div className='profile'>
			<ShortInfo state={props.state.shortInfo}/>
			<ProfilePage
				posts={props.state.posts}
				newPostText={props.state.newPostText}
				dispatch={props.dispatch}/>
		</div>
	)
}

export default Profile;
