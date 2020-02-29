import React from 'react';
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
  return (
    <PageHeader
      title={headerLogo(props.children)}
      className="header"
      ghost={false}
    />
  );
};

export default AppHeader;
