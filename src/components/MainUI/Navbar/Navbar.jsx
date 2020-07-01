import React from "react";
import navBar1 from './img/navbar-1.png'
import navBar2 from './img/navbar-2.png'
import './Navbar.scss'
import {NavLink} from "react-router-dom";


const Navbar = () => {
	return (
		<nav className='main-nav'>
			<ul>
				<li>
					<NavLink to='/profile'>
						<img className='main-nav__img' src={navBar1} alt=""/>
						<span className='main-nav__text'>Profile</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/dialogs'>
						<img className='main-nav__img' src={navBar2} alt=""/>
						<span className='main-nav__text'>Massage</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/news'>
						<img className='main-nav__img' src={navBar2} alt=""/>
						<span className='main-nav__text'>News</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/music'>
						<img className='main-nav__img' src={navBar2} alt=""/>
						<span className='main-nav__text'>Music</span>
					</NavLink>
				</li>
				<li>
					<NavLink to='/settings'>
						<img className='main-nav__img' src={navBar2} alt=""/>
						<span className='main-nav__text'>Settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
