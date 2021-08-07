
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginFormModal from '../auth/LoginFormModal';
import LogoutButton from '../auth/LogoutButton';
import SignUpFormModal from '../auth/SignUpFormModal';
import Demo from '../User/Demo';
import Profile from '../User/Profile';
import './NavBar.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  const extendNavbar = () => {
    const firstNav = document.querySelector('#first-nav');
    const secondNav = document.querySelector('#second-nav');
    firstNav.classList.add('navbar-hover');
    secondNav.classList.remove('hidden');
  };
  const minimizeNavbar = () => {
    const firstNav = document.querySelector('#first-nav');
    const secondNav = document.querySelector('#second-nav');
    firstNav.classList.remove('navbar-hover');
    secondNav.classList.add('hidden');
  };

  return (
    <>
      <nav id='first-nav' className='navbar' onMouseEnter={() => extendNavbar()}>
        <div className='nav-container'>
          <NavLink to='/' exact={true} activeClassName='active' className='navlink-comp nav-container-element main-home'>
            Modest
          </NavLink>
          <NavLink to='/grind-sessions/all' exact={true} activeClassName='active' className='navlink-comp nav-container-element nav-container-element-top'>
            Grind Sessions
          </NavLink>
          <NavLink to='/about' exact={true} activeClassName='active' className='navlink-comp nav-container-element nav-container-element-top'>
            About
          </NavLink>
          <NavLink to='/contact' exact={true} activeClassName='active' className='navlink-comp nav-container-element nav-container-element-top'>
            Contact Me
          </NavLink>
          {(user) ? (
            <div className='nav-container-element'>
              <Profile />
              &nbsp;|&nbsp;
              <LogoutButton />
            </div>
          ) : (
            <div className='nav-container-element'>
              <Demo />
              &nbsp;|&nbsp;
              <LoginFormModal />
              &nbsp;|&nbsp;
              <SignUpFormModal />
            </div>
          )}
        </div>
      </nav>
      <nav id='second-nav' className='hidden navbar dropdown-nav' onMouseLeave={() => minimizeNavbar()}>
        <div className='nav-container'>
          <span className='nav-container-element'>
          </span>
          <ul className='nav-container-element nav-list'>
            <li><NavLink to='/grind-sessions/OrcCamp' exact={true} activeClassName='active'>Orc Camp</NavLink></li>
            <li><NavLink to='/grind-sessions/CastleRuins' exact={true} activeClassName='active'>Castle Ruins</NavLink></li>
            <li><NavLink to='/grind-sessions/BloodyMonastery' exact={true} activeClassName='active'>Bloody Monastery</NavLink></li>
            <li><NavLink to='/grind-sessions/StarsEnd' exact={true} activeClassName='active'>Star's End</NavLink></li>
            <li><NavLink to='/grind-sessions/HystriaRuins' exact={true} activeClassName='active'>Hystria Ruins</NavLink></li>
          </ul>
          <span className='nav-container-element'>
          </span>
          <ul className='nav-container-element nav-list'>
            <li>Email</li>
            <li onClick={()=> window.open("https://github.com/Run5", "_blank")}>Github</li>
            <li onClick={()=> window.open("https://www.linkedin.com/in/chase-brashear-a05724163/", "_blank")}>Linkedin</li>
          </ul>
          <span className='nav-container-element'>
          </span>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
