import React from "react";
import {addPostActionCreator, updateChangePostActionCreator} from "../../../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
	let state = props.store.getState()
	console.log(state);
	let addPost = () => {
		props.store.dispatch(addPostActionCreator())
	}


	let onChangeValue = (text) => {
		props.store.dispatch(updateChangePostActionCreator(text))
	}
	return (
		<MyPost updateChangePost={onChangeValue}
						addPost={addPost}
						posts={state.profilePage.posts}
						newPostText={state.profilePage.newPostText}/>
	)
}
export default MyPostContainer
