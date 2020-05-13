import React from 'react';
import './style.scss';

const AppFooter = (props) => {
  const currentYear = new Date().getFullYear();
  const copyYear = 2020;
  const year = (currentYear > copyYear) ? `${copyYear} - ${currentYear}` : copyYear;

  return (
    <footer>
      <div className="container">
        links
        <div className="copyright">
          &copy;
          {' '}
          {year}
          {' '}
          Christian Kelsom-Martin
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
