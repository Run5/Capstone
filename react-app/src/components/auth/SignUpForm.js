import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './auth.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div className='signup-container'>
        <div className='signup-title'>
          Register to get started today!
        </div>
        <div className='signup-input'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='signup-input'>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            placeholder='User Name'
          ></input>
        </div>
        <div className='signup-input'>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            placeholder='Email'
          ></input>
        </div>
        <div className='signup-input'>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            placeholder='Password'
          ></input>
        </div>
        <div className='signup-input'>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            placeholder='Confirm Password'
            required={true}
          ></input>
        </div>
        <div>
          <button className='signup-button' type='submit'>Sign Up</button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
