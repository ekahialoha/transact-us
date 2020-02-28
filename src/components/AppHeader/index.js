import React from 'react';
import { PageHeader } from 'antd';
import './style.css';

const AppHeader = props => {
  return (
    <PageHeader
      title={props.children}
      className="header"
      ghost={false}
    />
  );
};

export default AppHeader;
