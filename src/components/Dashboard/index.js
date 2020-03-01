import React, { useEffect, useState } from 'react';
import { List, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage';
import './style.scss';
import API from '../api';

const Dashboard = props => {
  const [registries, setRegistries] = useState([]);
  useEffect(() => {
    API.get('registries')
      .then(result => result.data)
      .then(data => {
        console.log(data);
        setRegistries(data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          reactLocalStorage.remove('sesssion_key');
          props.history.push('/');
        }
      });
  }, []);
  return (
    <>
    <h3>Registries</h3>
    <List
      bordered
      dataSource={registries}
      renderItem={item => (
        <List.Item>
          <Link to="/">{item.name}</Link>
        </List.Item>
      )}
    />
    </>
  );
};

export default Dashboard;
