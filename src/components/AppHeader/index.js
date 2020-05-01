import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.scss';

const AppHeader = props => {
  const history = useHistory();

  const homeClick = () => {
    history.push('/');
  };

  const handleLogout = () => {
    const token = localStorage.getItem('session_key');
    console.log('eer');
  
    if (token !== null) {
      props.updateUser({});
      localStorage.removeItem('session_key');
      // message.warning('Successfully logged out');
      history.push('/');
    }
  };

  let subTitle = null;
  if (props.user.id !== undefined) {
    subTitle = <>
      Welcome back, {props.user.name}!
      {'  '}
      [<span onClick={handleLogout}>Logout</span>]
    </>;
  }

  return (
    <header>
    {/*<PageHeader
      title={headerLogo(props.children)}
      className="header"
      ghost={false}
      subTitle={subTitle}
      onBack={showBackButtton}
    />*/}
      <div className="container">
        <div id="logo-block" onClick={homeClick}>
          {props.children}
          {subTitle}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
