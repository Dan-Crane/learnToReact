import React from "react";
import './ProfilePage.scss'
import MyPost from "./MyPost/MyPost";
import MyInfo from "./MyInfo/MyInfo";

const ProfilePage = (props) => {
	return (
		<div className='profile-info'>
			<MyInfo/>
			<MyPost posts={props.posts}
							newPostText={props.newPostText}
							updateChangePost={props.updateChangePost}
							addPost={props.addPost}/>
		</div>
	)
}
export default ProfilePage
