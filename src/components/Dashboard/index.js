import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import AuthEnforcement from '../AuthEnforcement';
import Api from '../Api';

const makeRegistries = regs => {
  return regs.map(registry => {
    registry['url'] = `registries/${registry.id}`;
    return registry;
  });
};

const Dashboard = props => {
  const [registries, setRegistries] = useState([]);
  useEffect(() => {
    Api('registries')
      .then(result => result.data)
      .then(data => setRegistries(makeRegistries(data)))
      .catch(error => console.log(error.response));
  }, []);
  return (
    <>
    <h3>Registries</h3>
    {/*<List
      bordered
      dataSource={registries}
      renderItem={item => (
        <List.Item>
          <Link to={item.url}>{item.name}</Link>
        </List.Item>
      )}
    />*/}
    </>
  );
};

export default AuthEnforcement(Dashboard);
