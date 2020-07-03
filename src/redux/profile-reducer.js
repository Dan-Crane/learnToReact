const ADD_POST = 'ADD-POST';
const UPDATE_CHANGE_POST = 'UPDATE-CHANGE-POST';

const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let post = {
				id: 5,
				massage: state.newPostText,
				countLIke: 0
			}
			state.posts.push(post)
			state.newPostText = ''
			return state
		case UPDATE_CHANGE_POST:
			state.newPostText = action.newText
			return state
		default:
			return state
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateChangePostActionCreator = (text) => ({type: UPDATE_CHANGE_POST, newText: text})

export default profileReducer
