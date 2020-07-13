const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
	data: {
		id: null,
		login: null,
		email: null,
	},
	isAuth: false,
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_USER_DATA: {
			return {
				...state,
				data: {
					...action.data
				},
				isAuth: true
			}
		}
		default:
			return state
	}
}

export const setAuthUserData = (id, login, email) => ({type: SET_AUTH_USER_DATA, data: {id, login, email}})

export default authReducer
