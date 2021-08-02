import React from 'react';
import { useHistory } from 'react-router-dom';
import './User.css';

export default function Profile() {
  let history = useHistory();

  return <button onClick={() => history.push('/profile')}>Profile</button>;
}
