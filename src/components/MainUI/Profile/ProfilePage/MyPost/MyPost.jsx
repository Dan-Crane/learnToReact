import React from "react";
import './MyPost.scss'
import Post from "./Post/Post";


const MyPost = (props) => {
	let postElements = props.posts.map(m => <Post massage={m.massage}/>)
	let newPostElement = React.createRef()

	let onAddPost = () => {
		props.addPost()
	}

	let onChangeValue = () => {
		let text = newPostElement.current.value
		props.updateChangePost(text)
	}

	return (
		<div className='my-post'>
			<div>
				<div>
					<textarea onChange={onChangeValue} ref={newPostElement} value={props.newPostText}/>
				</div>
				<div>
					<button onClick={onAddPost}>Go</button>
				</div>
			</div>
			{postElements}
		</div>
	)
}
export default MyPost
