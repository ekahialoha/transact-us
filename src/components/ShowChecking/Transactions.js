import React from 'react';

import './style.scss';


const Transactions = () => (
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
    <section>
      <div className="trans-desc">STARTING BALANCE</div>
      <div className="trans-amt">$4,000.00</div>
    </section>
  </main>
);

export default Transactions;
