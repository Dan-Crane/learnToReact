import {renderEntireTree} from "../render";


let state = {
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
	}
}
window.state = state

export let addPost = () => {
	let post = {
		id: 5,
		massage: state.profilePage.newPostText,
		countLIke: 0
	}
	state.profilePage.posts.push(post)
	state.profilePage.newPostText = ''
	renderEntireTree(state)
}

export let updateChangePost = (newText) => {
	state.profilePage.newPostText = newText
	renderEntireTree(state)
}
export default state
