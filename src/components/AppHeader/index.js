import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const AppHeader = (props) => {
  const history = useHistory();

  const homeClick = () => {
    history.push('/');
  };

  const handleLogout = () => {
    const token = localStorage.getItem('session_key');

    if (token !== null) {
      props.updateUser({});
      localStorage.removeItem('session_key');
      props.setMessage('Successfully logged out');
      history.push('/');
    }
  };

  const MenuSubHeader = () => {
    if (props.user.id !== undefined) {
      return (
        <div id="header-menu">
          Welcome back,
          {' '}
          {props.user.name}
          !
          {'  '}
          <span onClick={handleLogout} className="logout-link link">[Logout]</span>
        </div>
      );
    }
    return null;
  };

  return (
    <header>
      <div className="container">
        <MenuSubHeader />
        <div id="logo-block" className="link" onClick={homeClick}>
          {props.children}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
