import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { PURGE } from '../../store/characterStore';
import './auth.css';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch({ type: PURGE })
    await dispatch(logout());
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
