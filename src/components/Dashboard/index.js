import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import AuthEnforcement from '../AuthEnforcement';
import Api from '../Api';

const makeAccounts = regs => {
  return regs.map(account => {
    account['url'] = `registries/${account.id}`;
    return account;
  });
};

const Dashboard = props => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    Api('accounts')
      .then(result => result.data)
      .then(data => setAccounts(makeAccounts(data)))
      .catch(error => console.log(error.response));
  }, []);
  return (
    <>
    <h1>Accounts</h1>
    <main className="em-box">
      {accounts.map((account, key) => {
        return (
          <div key={key}><Link to={account.url}>{account.name}</Link></div>
        );
      })}
    </main>
    </>
  );
};

export default AuthEnforcement(Dashboard);
