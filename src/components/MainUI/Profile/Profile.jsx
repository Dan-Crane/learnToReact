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
				updateChangePost={props.updateChangePost}
				addPost={props.addPost}/>
		</div>
	)
}

export default Profile;
