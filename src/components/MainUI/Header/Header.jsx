import React from "react";

import s from './Header.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className='header'>
			<a href="#">
				<img className='header__img' src="https://15logo.net/wp-content/uploads/2017/06/pixel-tree-800x800.jpg"
						 alt="logo"/>
			</a>
			{/*<form className='header__search search-header'>*/}
			{/*	<input className='search-header__input' type="text" placeholder='Поиск...' aria-label='Поиск по сайту.'/>*/}
			{/*	<button className='search-header__btn'>Найти</button>*/}
			{/*</form>*/}
			{props.isAuth
				? props.login
				: <NavLink to='/login'>
					<button className='header__login'> log in</button>
				</NavLink>}
		</header>
	)
}

export default Header;
