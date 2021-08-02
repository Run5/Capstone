
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
  // const firstNav = document.querySelector('#first-nav');
  // const secondNav = document.querySelector('#second-nav');

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
          <NavLink to='/' exact={true} activeClassName='active' className='navlink-comp nav-container-element'>
            Modest
          </NavLink>
          <NavLink to='/grind-sessions' exact={true} activeClassName='active' className='navlink-comp nav-container-element nav-container-element-top'>
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
              {/* <NavLink to='/users' exact={true} activeClassName='active'>
                Users
              </NavLink> */}
            </div>
          )}
        </div>
      </nav>
      <nav id='second-nav' className='hidden navbar dropdown-nav' onMouseLeave={() => minimizeNavbar()}>
        <div className='nav-container'>
          <span className='nav-container-element'>
          </span>
          <ul className='nav-container-element nav-list'>
            <li>Orc Camp</li>
            <li>Castle Ruins</li>
            <li>Bloody Monastery</li>
            <li>Star's End</li>
            <li>Hystria Ruins</li>
            {/* <li>Swamp Fogan Habitat</li>
            <li>Swamp Naga Habitat</li>
            <li>Crypt of Resting Thoughts</li>
            <li>Biraghi Den</li>
            <li>Ash Forest</li>
            <li>Sycraia Abyssal Ruins</li>
            <li>Aakman Temple</li>
            <li>Thornwood Forest</li>
            <li>Kratuga Ancient Ruins</li>
            <li>Altar Imp Habitat</li>
            <li>Tunkuta</li>
            <li>Olun's Valley</li>
            <li>Padix Island</li>
            <li>Abandoned Monastery</li> */}
          </ul>
          <span className='nav-container-element'>
            Hello
          </span>
          <ul className='nav-container-element nav-list'>
            <li>Email</li>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
          <span className='nav-container-element'>
          </span>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
