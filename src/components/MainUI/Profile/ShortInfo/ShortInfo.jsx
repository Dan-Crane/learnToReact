import React from "react";
import './ShortInfo.scss'
import FriendsContainer from "./Friends/FriendsContainer";

const ShortInfo = (props) => {
	return (
		<div className='short-info'>
			<img className='short-info__avatar' src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/932cd161086663.5a62bce65c4a1.png" alt=""/>
			<div className='short-info__friends'>
				<span>Your friends</span>
				<FriendsContainer/>
			</div>
			<div className='short-info__music'>Тут бует музыка</div>
		</div>
	)
}

export default ShortInfo;
