import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import LoginForm from './components/LoginForm';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Dashboard from './components/Dashboard';
import ShowTransactions from './components/ShowTransactions';



const App = () => {
  const [user, setUser] = useState({});

  const DoShowTransactions = props => {
    return <ShowTransactions user={user}  updateUser={setUser} />;
  };
  const ShowLoginForm = props => {
    return <LoginForm {...props} updateUser={setUser} />;
  };
  const ShowDashboard = props => {
    return <Dashboard {...props} user={user} updateUser={setUser} />;
  };

  return (
    <div id="app">
        <AppHeader user={user} updateUser={setUser}>
          Transact Us
        </AppHeader>
        <div className="container main-container">
          <section id="main-body">
            <Route path="/registries/:id" component={DoShowTransactions} />
            <Route path="/login" component={ShowLoginForm} />
            {/* <Route path="/signup" component={} />> */}
            <Route exact path="/" component={ShowDashboard} />
          </section>
          <AppFooter />
        </div>
    </div>
  );
};

export default App;
