import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const AppHeader = (props) => {
  const {
    user, children, updateUser, setMessage,
  } = props;
  const history = useHistory();

  const homeClick = () => {
    history.push('/');
  };

  const handleLogout = () => {
    const token = localStorage.getItem('session_key');

    if (token !== null) {
      updateUser({});
      localStorage.removeItem('session_key');
      setMessage('Successfully logged out');
      history.push('/');
    }
  };

  const MenuSubHeader = () => {
    if (user.id !== undefined) {
      return (
        <div id="header-menu">
          Welcome back,
          {' '}
          {user.name}
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
          {children}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
