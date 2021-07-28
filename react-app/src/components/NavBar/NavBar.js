
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div class="container-fluid">
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>
        {(user) ? (
          <LogoutButton />
        ) : (
          <div>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
            {/* <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink> */}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
