import React from 'react';
import './App.css';
import { Icon } from 'antd';
import LoginForm from './components/LoginForm';
import AppHeader from './components/AppHeader'

const App = () => (
  <div className="App">
    <AppHeader>
      <Icon type="bank" />
      {'  '}
      Transact Us
    </AppHeader>
    <div className="container">
      <LoginForm></LoginForm>
    </div>
  </div>
);

export default App;
