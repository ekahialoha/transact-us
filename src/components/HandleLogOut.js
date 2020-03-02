import React, { useEffect } from 'react';
import { message } from 'antd';

const HandleLogOut = props => {
  useEffect(() => {
    const token = localStorage.getItem('session_key');
    if (token === null) {
      props.history.push('/');
    } else {
      props.updateUser({});
      localStorage.removeItem('session_key');
      message.warning('Successfully logged out');
    }
  });

  return (
    <>
    </>
  );
};
export default HandleLogOut;
