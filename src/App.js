import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import LoginForm from './components/LoginForm';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Dashboard from './components/Dashboard';
import HandleLogOut from './components/HandleLogOut';

const App = () => {
  const [user, setUser] = useState({});

  return (
    <div className="App">
        <AppHeader user={user}>
          Transact Us
        </AppHeader>
        <div className="container">
          <Route path="/login" component={props => <LoginForm {...props} updateUser={setUser} />} />
          <Route path="/logout" user={user} updateUser={setUser} component={HandleLogOut} />
          <Route exact path="/" component={props => <Dashboard {...props} user={user}  updateUser={setUser} />} />
        </div>
        <AppFooter />
    </div>
  );
};

export default App;
