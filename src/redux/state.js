import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
	_state: {
		profilePage: {
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
						avatar: 'https://www.pngfind.com/pngs/m/298-2988203_donald-trump-donald-trump-face-pixel-art-hd.png',
						name: 'Ivan',
					},
					{
						avatar: 'https://st4.depositphotos.com/1494134/20836/v/1600/depositphotos_208365754-stock-illustration-pixel-red-cat-portrait-detailed.jpg',
						name: 'Julia',
					},
					{
						avatar: 'https://thumbs.dreamstime.com/z/vector-pixel-art-black-man-face-isolated-cartoon-vector-pixel-art-black-man-face-121405039.jpg',
						name: 'Leha'
					}
				]
			}
		},
		dialogsPage: {
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
		},
		sidebarPage: '',
	},
	_callSubscribe() {
		console.log('hi');
	},
	subscribe(observer) {
		this._callSubscribe = observer
	},
	getState() {
		return this._state
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebarPage = sidebarReducer(this._state.profilePage, action)

		this._callSubscribe(this._state)
	}
}

window.state = store

export default store
