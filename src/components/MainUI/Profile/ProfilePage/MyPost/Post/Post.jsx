import React from "react";
import './Post.scss'

const Post = (props) =>{
	return (
		<div className='post'>
			<img src="https://i.pinimg.com/originals/5e/bb/01/5ebb01fae24bc34129d27d6a397afb48.png" alt=""/>
			<span> {props.massage}</span>
		</div>
	)
}

export default Post
