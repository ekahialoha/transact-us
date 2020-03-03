import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Icon, PageHeader } from 'antd';
import './style.css';

const headerLogo = (title) => {
  return (
    <>
    <Icon className="logo" type="bank" />
    {'  '}
    {title}
    </>
  );
}

const AppHeader = props => {
  const history = useHistory();
  const location = useLocation();

  let showBackButtton;
  if (location.pathname !== '/' && location.pathname !== '/login') {
    showBackButtton = history.goBack;
  } else {
    showBackButtton = '';
  }

  let subTitle = null;
  if (props.user.id !== undefined) {
    subTitle = <>
      Welcome back, {props.user.name}!
      {'  '}
      [<Link to="/logout">Logout</Link>]
    </>;
  }

  return (
    <PageHeader
      title={headerLogo(props.children)}
      className="header"
      ghost={false}
      subTitle={subTitle}
      onBack={showBackButtton}
    />
  );
};

export default AppHeader;
