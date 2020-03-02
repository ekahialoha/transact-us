import React from 'react';
import { Icon, PageHeader } from 'antd';
import { Link } from 'react-router-dom';
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
    />
  );
};

export default AppHeader;
