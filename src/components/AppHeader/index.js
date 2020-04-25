import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';

const headerLogo = (title) => {
  return (
    <>
    {/*<Icon className="logo" type="bank" />
    {'  '}
    {title}*/}
    </>
  );
}

const AppHeader = props => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  let subTitle = null;
  if (props.user.id !== undefined) {
    subTitle = <>
      Welcome back, {props.user.name}!
      {'  '}
      [<Link to="/logout">Logout</Link>]
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
      <div id="logo-block" onClick={handleClick}>
        {props.children}
        {subTitle}
      </div>
    </header>
  );
};

export default AppHeader;
