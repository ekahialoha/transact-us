import React/*, { useState }*/ from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Api from '../Api';

const LogInForm = props => {
  if (localStorage.getItem('session_key') !== null) {
    props.history.push('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.form.validateFields((error, values) => {
      if (!error) {
        Api('sessions', 'POST', {
          'session': {
            email: values.email,
            password: values.password
          }
        })
          .then(result => result.data.data)
          .then(session => {
            props.form.resetFields();
            props.updateUser(session.user)
            localStorage.setItem('session_key', session.token);
            props.history.push('/');
          })
          .catch(error => console.log(error));
      }
    })
  };

  return (
    <>
    <h1>Login</h1>
    <form className="em-box" onSubmit={handleSubmit}>
      <div className="item-group">
        <label htmlFor="email">Email Address:</label>
        <input
          autoComplete="off"
          type="email"
          autoFocus="autoFocus"
          size="large"
          id="email"
          />
      </div>
      <div className="item-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          size="large"
          id="password"
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
