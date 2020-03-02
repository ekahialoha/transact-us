import React, { useEffect, useState } from 'react';
import { List, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';
import AuthEnforcement from '../AuthEnforcement';
import Api from '../Api';

const Dashboard = props => {
  const [registries, setRegistries] = useState([]);
  useEffect(() => {
    Api('registries')
      .then(result => result.data)
      .then(data => {
        console.log(data);
        setRegistries(data);
      })
      .catch((error) => console.log(error.response));
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

export default AuthEnforcement(Dashboard);
