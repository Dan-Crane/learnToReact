import React from "react";
import './MyPost.scss'
import Post from "./Post/Post";
import {addPostActionCreator, updateChangePostActionCreator} from "../../../../../redux/profile-reducer";

const MyPost = (props) => {
	let postElements = props.posts.map(m => <Post massage={m.massage}/>)
	let newPostElement = React.createRef()

	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}

	let onChangeValue = () =>{
		debugger
		let text = newPostElement.current.value
		props.dispatch(updateChangePostActionCreator(text))
	}

	return (
		<div className='my-post'>
			<div>
				<div>
					<textarea onChange={onChangeValue} ref={newPostElement} value={props.newPostText}/>
				</div>
				<div>
					<button onClick={addPost}>Go</button>
				</div>
			</div>

			{postElements}
		</div>
	)
}
export default MyPost
