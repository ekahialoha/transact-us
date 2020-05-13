import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Api from '../Api';
import FormValidation from '../FormValidation';
import rules from './validations';

const LogInForm = props => {
  const validationRules = new FormValidation(rules);
  const [state, setState] = useState({
    email: '',
    password: '',
    submitted: false,
    validation: validationRules.defaultValidations()
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

    const validation = validationRules.runValidations(state);
    setState({
      ...state,
      submitted: true
    });

    if (validation.valid) {
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
    }
  };

  const validation = state.submitted ? validationRules.runValidations(state) : state.validation;

  return (
    <>
    <h1>Login</h1>
    {props.message}
    <main>
      <form noValidate className="em-box" onSubmit={handleSubmit}>
        <div className={!validation.email.valid ? 'item-group has_error' : 'item-group' }>
          <label htmlFor="email">Email Address:</label>
          <input
            autoComplete="off"
            type="email"
            autoFocus="autoFocus"
            placeholder="email@example.co"
            id="email"
            onChange={handleChanges}
          />
          <span className="help-block">{validation.email.error}</span>
        </div>
        <div className={!validation.password.valid ? 'item-group has_error' : 'item-group' }>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChanges}
          />
          <span className="help-block">{validation.password.error}</span>
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
          >
            Login
          </button>
        </div>
        <div className="item-group new-user">
          <label>New user?</label>
          <span><Link to="/signup">Register for account</Link></span>
        </div>
        <div className="item-group new-user">
          <label>Problems signing in?</label>
          <span><Link to="/account-recovery">Account Recovery</Link></span>
        </div>
      </form>
    </main>
    </>
  );
};
export default LogInForm;
