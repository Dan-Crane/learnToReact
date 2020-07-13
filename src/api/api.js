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
		return instanceAPI.get(`users?page=${currentPage}&count=${pageSize}`, {
			withCredentials: true
		})
			.then(response => response.data)
	}
}

