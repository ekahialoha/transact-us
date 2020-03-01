import React from 'react';
import './App.scss';
import LoginForm from './components/LoginForm';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Dashboard from './components/Dashboard';
import { Route } from 'react-router-dom';

const App = () => (
  <div className="App">
    <AppHeader>
      Transact Us
    </AppHeader>
    <div className="container">
      <Route path="/login" component={LoginForm} />
      <Route exact path="/" component={Dashboard} />
    </div>
    <AppFooter />
  </div>
);

export default App;
