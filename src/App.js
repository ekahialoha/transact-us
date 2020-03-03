import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import LoginForm from './components/LoginForm';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Dashboard from './components/Dashboard';
import HandleLogout from './components/HandleLogout';
import ShowTransactions from './components/ShowTransactions';



const App = () => {
  const [user, setUser] = useState({});

  const DoShowTransactions = props => {
    return <ShowTransactions user={user}  updateUser={setUser} />;
  };
  const ShowLoginForm = props => {
    return <LoginForm {...props} updateUser={setUser} />;
  };
  const DoHandleLogout = props => {
    return <HandleLogout {...props} updateUser={setUser} />;
  };
  const ShowDashboard = props => {
    return <Dashboard {...props} user={user} updateUser={setUser} />;
  };

  return (
    <div className="App">
        <AppHeader user={user}>
          Transact Us
        </AppHeader>
        <div className="container">
          <Route path="/registries/:id" component={DoShowTransactions} />
          <Route path="/login" component={ShowLoginForm} />
          <Route path="/logout" component={DoHandleLogout} />
          <Route exact path="/" component={ShowDashboard} />
        </div>
        <AppFooter />
    </div>
  );
};

export default App;
