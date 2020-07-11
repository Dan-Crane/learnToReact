import React from "react";
import {addPostActionCreator, updateChangePostActionCreator} from "../../../../../redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
	return{
		newPostText: state.profilePage.newPostText,
		posts: state.profilePage.posts
	}
}
let mapDispatchToProps=(dispatch)=>{
	return{
		addPost: ()=>dispatch(addPostActionCreator()),
		updateChangePost: (text) => dispatch(updateChangePostActionCreator(text))
	}
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)
export default MyPostContainer
