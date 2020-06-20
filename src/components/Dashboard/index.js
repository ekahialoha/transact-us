import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import AuthEnforcement from '../AuthEnforcement';
import Api from '../Api';

const makeAccounts = (regs) => regs.map((account) => ({ ...account, url: `registries/${account.id}` }));

const Dashboard = (props) => {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    Api('accounts')
      .then((result) => result.data)
      .then((data) => setAccounts(makeAccounts(data)));
    // .catch((error) => console.log(error.response));
  }, []);
  return (
    <>
      <h1>Accounts</h1>
      <main>
        {/* {accounts.map((account) => (
          <div key={account.id}><Link to={account.url}>{account.name}</Link></div>
        ))} */}
        <fieldset className="account-list">
          <legend>Savings</legend>
          <section>
            <Link to="/savings/4">Emergency</Link>
          </section>
          <section>
            <Link to="/savings/4">New Car</Link>
          </section>
          <section>
            <Link to="/savings/4">4th of July Getaway</Link>
          </section>
        </fieldset>
        <fieldset className="account-list">
          <legend>Checking</legend>
          <section>
            <Link to="/checking/7">Checking 1</Link>
          </section>
          <section>
            <Link to="/checking/7">Checking 2</Link>
          </section>
          <section>
            <Link to="/checking/7">Checking 3</Link>
          </section>
        </fieldset>
      </main>
    </>
  );
};

export default AuthEnforcement(Dashboard);
