import React from "react";
import header1 from './Header.scss'

const Header = () =>{
	return (
		<header className='header'>
			<a href="#">
				<img className='header__img' src="https://15logo.net/wp-content/uploads/2017/06/pixel-tree-800x800.jpg" alt="logo"/>
			</a>
			{/*<form className='header__search search-header'>*/}
			{/*	<input className='search-header__input' type="text" placeholder='Поиск...' aria-label='Поиск по сайту.'/>*/}
			{/*	<button className='search-header__btn'>Найти</button>*/}
			{/*</form>*/}

			{/*<div className='header__login' > log in</div>*/}
		</header>
	)
}

export default Header;
