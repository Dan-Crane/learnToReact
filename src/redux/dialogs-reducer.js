const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_CHANGE_MESSAGE = 'UPDATE-CHANGE-MESSAGE';

export const dialogsReducer = (state, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 4,
				massage: state.textMessage
			}
			state.massages.push(newMessage)
			state.textMessage = ''
			return state
		case UPDATE_CHANGE_MESSAGE:
			state.textMessage = action.newText
			return state
		default:
			return state
	}
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateChangeMessage = (text) => ({type: UPDATE_CHANGE_MESSAGE, newText: text})

export default dialogsReducer
