import React from 'react';
import './style.css';

const AppFooter = props => {
  const currentYear = new Date().getFullYear();
  const copyYear = 2020;
  const year = (currentYear > copyYear) ? `${copyYear} - ${currentYear}` : copyYear;

  return (
    <footer>
      &copy; {year} Christian Kelsom-Martin
    </footer>
  );
};

export default AppFooter;
