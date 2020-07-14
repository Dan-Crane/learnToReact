import * as axios from "axios";

const instanceAPI = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '7500fead-48f6-47dd-8a3a-f7c2c3c28190'
	}
})

export const usersAPI = {
	getUser(currentPage, pageSize = 1) {
		return instanceAPI.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	unfollow(userId) {
		return instanceAPI.delete(`follow/${userId}`)
			.then(res => res.data)
	},
	follow(userId) {
		return instanceAPI.post(`follow/${userId}`)
			.then(res => res.data)
	},
	getProfile(userId) {
		return instanceAPI.get(`profile/${userId}`)
			.then(res => {
				return res.data
			})
	}
}

export const authAPI = {
	me() {
		return instanceAPI.get(`auth/me`)
			.then(res => res.data)
	}
}

