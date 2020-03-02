import React from 'react';
import { message } from 'antd';
import LoginForm from './LoginForm';

const HandleLogOut = props => {
  const token = localStorage.getItem('session_key');
  if (token === null) {
    props.history.push('/');
  } else {
    localStorage.removeItem('session_key');
    message.warning('Successfully logged out');
  }

  return (
    <LoginForm />
  );
};
export default HandleLogOut;
