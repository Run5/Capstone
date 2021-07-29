
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginFormModal from '../auth/LoginFormModal';
import LogoutButton from '../auth/LogoutButton';
import SignUpFormModal from '../auth/SignUpFormModal';

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
            <LoginFormModal />
            <SignUpFormModal />
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
