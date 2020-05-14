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
          <legend>Owned Registries</legend>
          <section>
            <Link to="/registries/4">Our Checking</Link>
          </section>
        </fieldset>
        <fieldset className="account-list">
          <legend>Joint Registries</legend>
          <section>
            <Link to="/registries/4">His Checking</Link>
          </section>
          <section>
            <Link to="/registries/4">Some Awesome Company</Link>
          </section>
        </fieldset>
      </main>
    </>
  );
};

export default AuthEnforcement(Dashboard);
