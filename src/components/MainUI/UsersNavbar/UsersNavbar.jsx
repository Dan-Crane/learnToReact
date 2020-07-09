import React from "react";
import s from './UsersNavbar.module.scss'
import * as axios from "axios";

class UsersNavbar extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
				this.props.setTotalCountUsers(response.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalCountUsers / this.props.pageSize)
		let pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		return <div className={s.wrapper}>
			<div className={s.pagination}>
				{pages.map(p=>{
					return (<span onClick={()=> this.onPageChanged(p)} className={this.props.currentPage === p ? s.paginationActive : '' } key={p}>{p}</span>)
				})}
			</div>

			{
				this.props.users.map(u => <div key={u.id} className={s.userItem}>
					<div className={s.avaAndBtn}>
						<img
							src={u.avatar != null ? u.avatar : 'https://3dnews.ru/assets/external/illustrations/2018/02/01/964971/theres-one-simple-reason-nintendo-is-bringing-super-mario-to-the-iphone-first.jpg'}
							className={s.avatar} alt="avatar"/>
						{u.followed
							? <button className={s.btn} onClick={(e) => {
								this.props.unfolow(u.id)
							}}>Unfollow</button>
							: <button className={s.btn} onClick={() => this.props.follow(u.id)}>Follow</button>}
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
	}
}

export default UsersNavbar
