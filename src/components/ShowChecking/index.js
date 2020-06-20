import React from 'react';
import {
  Route, useHistory, useParams,
} from 'react-router-dom';

import AuthEnforcement from '../AuthEnforcement';
import Budget from './Budget';
import Overview from './Overview';
import Reports from './Reports';
import Transactions from './Transactions';
import './style.scss';

const menu = [{
  route: '',
  title: 'Overview',
}, {
  route: 'budget',
  title: 'Budget',
}, {
  route: 'transactions',
  title: 'Transactions',
}, {
  route: 'reports',
  title: 'Reports',
}];


const ShowChecking = () => {
  const history = useHistory();
  const { id } = useParams();

  const menuItem = (item, key) => (
    <div key={key} className="link" onClick={() => history.push(`/checking/${id}/${item.route}`)}>{item.title}</div>
  );

  return (
    <>
      <h1>Checking</h1>
      <div className="em-box header">
        <div className="cycle-back">⋘</div>
        <div className="header-title">June 2020</div>
        <div className="cycle-forward">⋙</div>
        {menu.map((item, key) => menuItem(item, key))}

      </div>
      <Route exact path="/checking/:id/budget" component={Budget} />
      <Route exact path="/checking/:id/reports" component={Reports} />
      <Route exact path="/checking/:id/transactions" component={Transactions} />
      <Route exact path="/checking/:id" component={Overview} />
    </>
  );
};

export default AuthEnforcement(ShowChecking);
