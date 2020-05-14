import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthEnforcement from '../AuthEnforcement';
import './style.scss';
import Api from '../Api';

const makeTransactions = (trans) => trans.map((transaction) => ({ ...transaction }));

const ShowTransactions = (props) => {
  const params = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    Api(`transactions?registryId=${params.id}`)
      .then((result) => result.data)
      .then((data) => setTransactions(makeTransactions(data)))
      .catch((error) => console.log(error.response));
  }, [params.id]);

  return (
    <>
      <h1>Transactions</h1>
      <main className="em-box transactions-list">
        <section>
          <div className="trans-date">MAY 14</div>
          <div className="trans-amt" data-negative="true">($20)</div>
          <div className="trans-balance">$4,500.00</div>
          <div className="trans-desc">ATM WIDTHDRAWL @ 111 E Main St Branch ATM</div>
          <div className="heading-balance">Balance:</div>
          <div className="heading-desc">Desccription:</div>
        </section>
        <section>
          <div className="trans-date">MAY 13</div>
          <div className="trans-amt" data-positive="true">$520</div>
          <div className="trans-balance">$4,520.00</div>
          <div className="trans-desc">DRIECT DEPOSIT COMPANY NAME HERE</div>
          <div className="heading-balance">Balance:</div>
          <div className="heading-desc">Desccription:</div>
        </section>
      </main>
    </>
  );
};

export default AuthEnforcement(ShowTransactions);
