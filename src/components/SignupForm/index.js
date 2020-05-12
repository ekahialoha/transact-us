import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Api from '../Api';

const SignupForm = props => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: ''
  });

  const handleChanges = e => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Api
    console.log('submitted', state);
  };

  return (
    <>
      <h1>Signup</h1>
      <h4 className="sub-headding">Register for your Transact Us account here!</h4>
      <main>
          <form className="em-box" onSubmit={handleSubmit}>
            <div className="flex-columns">
              <div className="item-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    autoFocus="autoFocus"
                    placeholder="John"
                    id="firstName"
                    onChange={handleChanges}
                  />
              </div>
              <div className="item-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    autoFocus="autoFocus"
                    placeholder="Smith"
                    id="lastName"
                    onChange={handleChanges}
                  />
              </div>
            </div>
            <div className="item-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  autoFocus="autoFocus"
                  placeholder="email@example.co"
                  id="email"
                  onChange={handleChanges}
                />
            </div>
            <div className="flex-columns">
              <div className="item-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  placeholder="password"
                  id="password"
                  onChange={handleChanges}
                />
              </div>
              <div className="item-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  placeholder="password"
                  id="confirmPassword"
                  onChange={handleChanges}
                />
              </div>
            </div>
            <div className="agree-terms item-group">
            <input
              type="checkbox"
              id="agree"
              onChange={handleChanges}
            />
            <label htmlFor="agree">
              Agree to <Link to="#">terms &amp; conditions</Link>?
          </label>
        </div>
            <div className="item-group">
              <button
                type="submit"
                className="login-button"
              >
                Signup
              </button>
            </div>
            <div className="item-group new-user">
              <label>Already have an account?</label>
              <span><Link to="/login">Signin to your account</Link></span>
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

export default SignupForm;