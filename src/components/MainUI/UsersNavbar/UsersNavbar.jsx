import React from "react";
import s from './UsersNavbar.module.scss'
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const UsersNavbar = (props) => {
	let pagesCount = Math.ceil(props.totalCountUsers / props.pageSize)
	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<>
			{props.isFetching && <Preloader/>}
			<div className={s.wrapper}>
				<div className={s.pagination}>
					{pages.map(p => {
						return (
							<span onClick={() => props.onPageChanged(p)} className={props.currentPage === p ? s.paginationActive : ''}
										key={p}>{p}</span>)
					})}
				</div>
				{
					props.users.map(u => <div key={u.id} className={s.userItem}>
						<div className={s.avaAndBtn}>
							<NavLink to={'/profile/' + u.id}>
								<img
									src={u.photos.small != null ? u.photos.small : 'https://3dnews.ru/assets/external/illustrations/2018/02/01/964971/theres-one-simple-reason-nintendo-is-bringing-super-mario-to-the-iphone-first.jpg'}
									className={s.avatar} alt="avatar"/>
							</NavLink>
							{u.followed
								?
								<button className={s.btn} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									props.setToggleIsProgress(true, u.id)
									axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
										withCredentials: true,
										headers: {
											'API-KEY': 'b1662927-0a8d-494b-98c5-a1db1fd2ebf7'
										}
									})
										.then(response => {
											if (response.data.resultCode === 0) {
												props.unfollow(u.id)
											}
											props.setToggleIsProgress(false, u.id)
										})
								}
								}>Unfollow</button>
								:
								<button className={s.btn} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
									props.setToggleIsProgress(true, u.id)
									axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
										withCredentials: true,
										headers: {
											'API-KEY': 'b1662927-0a8d-494b-98c5-a1db1fd2ebf7'
										}
									})
										.then(response => {
											if (response.data.resultCode === 0) {
												props.follow(u.id)
											}
											props.setToggleIsProgress(false, u.id)
										})
								}
								}>Follow</button>}
						</div>
						<div className={s.infoWrapper}>
							<div className={s.infoUser}>
								<span>{u.name}</span>
								<span>{u.status}</span>
							</div>
							<div className={s.infoCountry}>
								<span>u.location.country</span>
								<span>u.location.sity</span>
							</div>
						</div>
					</div>)
				}
			</div>
		</>
	)
}


export default UsersNavbar
