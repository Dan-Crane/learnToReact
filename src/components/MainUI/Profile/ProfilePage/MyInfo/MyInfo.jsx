import React from "react";
import s from './MyInfo.module.scss'

const MyInfo = (props) => (
	<div className={s.myInfo}>
		<span className={s.name}>{props.profile.fullName}</span>
		<span className={s.lookingForAJob}>{props.profile.lookingForAJob ? <div>I am looging for a job</div>
		: <div>I am not looking for a job</div>}</span>
		<span className={s.lookingForAJobDescription}>
			{props.profile.lookingForAJobDescription}
		</span>
	</div>
)

export default MyInfo
