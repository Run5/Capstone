import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import './User.css';

export default function Demo() {
  const dispatch = useDispatch()
  const demoClick = async (e) => {
    await dispatch(login('demo@aa.io', 'password'));
  };

  return <button onClick={demoClick}>Demo User</button>;
}
