import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import AccountRecovery from './components/AccountRecovery';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Dashboard from './components/Dashboard';
import ShowTransactions from './components/ShowTransactions';
import ShowChecking from './components/ShowChecking';


const App = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState('');

  const ShowSavings = (props) => <ShowTransactions {...props} user={user} updateUser={setUser} />;
  const DoShowChecking = (props) => <ShowChecking {...props} user={user} updateUser={setUser} />;
  const ShowLoginForm = (props) => <LoginForm {...props} updateUser={setUser} message={message} />;
  const ShowDashboard = (props) => <Dashboard {...props} user={user} updateUser={setUser} />;
  const ShowSignupForm = (props) => <SignupForm {...props} />;
  const ShowAccountRecovery = (props) => <AccountRecovery {...props} />;

  return (
    <div id="app">
      <AppHeader user={user} updateUser={setUser} setMessage={setMessage}>
        Transact Us
      </AppHeader>
      <div className="container main-container">
        <section id="main-body">
          <Route exact path="/savings/:id" component={ShowSavings} />
          <Route path="/checking/:id" component={DoShowChecking} />
          <Route path="/login" component={ShowLoginForm} />
          <Route path="/signup" component={ShowSignupForm} />
          <Route path="/account-recovery" component={ShowAccountRecovery} />
          <Route exact path="/" component={ShowDashboard} />
        </section>
        <AppFooter />
      </div>
    </div>
  );
};

export default App;
