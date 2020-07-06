const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_CHANGE_MESSAGE = 'UPDATE-CHANGE-MESSAGE';

const initialState = {
	users: [
		{
			id: '1',
			name: 'Dima',
		},
		{
			id: '2',
			name: 'Oleg',
		},
		{
			id: '3',
			name: 'San',
		},
	],
	massages: [
		{
			id: '1',
			massage: 'hi',
		},
		{
			id: '2',
			massage: 'lol',
		},
		{
			id: '3',
			massage: 'how are you?',
		},
	],
	textMessage: 'hihi'
}

export const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			let newMessage = {
				id: 4,
				massage: state.textMessage
			}
			let stateCopy = {...state}
			stateCopy.massages = [...state.massages]
			stateCopy.massages.push(newMessage)
			stateCopy.textMessage = ''
			return stateCopy
		}
		case UPDATE_CHANGE_MESSAGE: {
			let stateCope = {...state}
			stateCope.textMessage = action.newText
			return stateCope
		}
		default:
			return state
	}
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateChangeMessage = (text) => ({type: UPDATE_CHANGE_MESSAGE, newText: text})

export default dialogsReducer
