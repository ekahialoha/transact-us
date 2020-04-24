import React/*, { useState }*/ from 'react';
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
    <form onSubmit={handleSubmit}>
      <div>
        <input
            type="email"
            placeholder="Email Address"
            autoFocus="autoFocus"
            size="large"
          />
      </div>
      <div>
      <input
          type="password"
          placeholder="Password"
          size="large"
        />
      </div>
      <div>
        <input
          type="checkbox"
        />
        Remember me for 7 days
      </div>
      <div>
        <button
          type="submit"
          className="login-form-button"
          size="large"
        >
          Sign in
        </button>

        <button
          type="dashed"
          href="#"
        >
          Forgot Password
        </button>

        <button
          type="dashed"
          href="#"
        >
          Register
        </button>
      </div>
    </form>
  );
};
export default LogInForm;
