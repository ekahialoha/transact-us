import React, { useEffect, useState } from 'react';
import { List, Typography } from 'antd';
import { Link } from 'react-router-dom';
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
        console.log(error.response);
        // if (error.response.status === 401) {
        //   // localStorage.removeItem('session_key');
        //   props.history.push('/');
        // }
      });
      // const fetchRegistries = async () => {
      //   const result = await API.get('registries');
      //   setRegistries(result);
      // };
      //
      // fetchRegistries();
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
