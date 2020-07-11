import React from "react";
import './Profile.scss'
import ShortInfo from "./ShortInfo/ShortInfo";
import ProfilePage from "./ProfilePage/ProfilePage";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {
	if(!props.profile){
		return <Preloader/>
	}
	return (
		<div className='profile'>
			<ShortInfo photo={props.profile.photos.large}/>
			<ProfilePage profile={props.profile}/>
		</div>
	)
}
export default Profile;
