const ADD_POST = 'ADD-POST';
const UPDATE_CHANGE_POST = 'UPDATE-CHANGE-POST';

const initialState = {
	posts: [
		{
			id: '1',
			massage: 'hi pitushara',
		},
		{
			id: '2',
			massage: 'first post',
		},
		{
			id: '3',
			massage: 'lol',
		},
		{
			id: '4',
			massage: 'It`s method map',
		},
	],
	newPostText: 'it-camasutra',
	shortInfo: {
		friends: [
			{
				id: 1,
				avatar: 'https://www.pngfind.com/pngs/m/298-2988203_donald-trump-donald-trump-face-pixel-art-hd.png',
				name: 'Ivan',
			},
			{
				id: 2,
				avatar: 'https://st4.depositphotos.com/1494134/20836/v/1600/depositphotos_208365754-stock-illustration-pixel-red-cat-portrait-detailed.jpg',
				name: 'Julia',
			},
			{
				id: 3,
				avatar: 'https://thumbs.dreamstime.com/z/vector-pixel-art-black-man-face-isolated-cartoon-vector-pixel-art-black-man-face-121405039.jpg',
				name: 'Leha'
			}
		]
	}
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let post = {
				id: 5,
				massage: state.newPostText,
				countLIke: 0
			}
			let stateCope = {...state}
			stateCope.posts = [...state.posts]
			stateCope.posts.push(post)
			stateCope.newPostText = ''
			return stateCope
		}
		case UPDATE_CHANGE_POST: {
			let stateCopy = {...state}
			stateCopy.newPostText = action.newText
			return stateCopy
		}
		default:
			return state
	}
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateChangePostActionCreator = (text) => ({type: UPDATE_CHANGE_POST, newText: text})

export default profileReducer
