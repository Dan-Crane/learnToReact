import * as axios from "axios";

const instanceAPI = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'b1662927-0a8d-494b-98c5-a1db1fd2ebf7'
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

