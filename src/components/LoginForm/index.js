import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Api from '../Api';

const LogInForm = props => {
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  if (localStorage.getItem('session_key') !== null) {
    props.history.push('/');
  }

  const handleChanges = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Api('sessions', 'POST', {
      'session': {
        email: state.email,
        password: state.password
      }
    })
      .then(result => result.data.session)
      .then(session => {
        setState({
          email: '',
          password: ''
        });
        props.updateUser(session.user);
        localStorage.setItem('session_key', session.token);
        props.history.push('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <>
    <h1>Login</h1>
    <form className="em-box" onSubmit={handleSubmit}>
    {props.message}
      <div className="item-group">
        <label htmlFor="email">Email Address:</label>
        <input
          autoComplete="off"
          type="email"
          autoFocus="autoFocus"
          placeholder="email@example.co"
          id="email"
          onChange={handleChanges}
        />
      </div>
      <div className="item-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChanges}
        />
      </div>
      <div className="remember-me item-group">
          <input
            type="checkbox"
            id="remember-me"
          />
          <label htmlFor="remember-me">
            Remember me for 7 days?
        </label>
      </div>
      <div className="item-group">
        <button
          type="submit"
          className="login-button"
          size="large"
        >
          Login
        </button>
      </div>
      <div className="item-group new-user">
        <label>New user?</label>
        <span><Link to="#">Register for account</Link></span>
      </div>
      <div className="item-group new-user">
        <label>Problems signing in?</label>
        <span><Link to="#">Account Recovery</Link></span>
      </div>
    </form>
    </>
  );
};
export default LogInForm;
