import React, { useState, useEffect } from 'react';
import AuthEnforcement from '../AuthEnforcement';
import { List, Avatar } from 'antd';
import { ImportOutlined } from '@ant-design/icons';
import './style.css';
import Api from '../Api';

const makeTransactions = trans => {
  return trans.map(transaction => {
    transaction['type'] = <Avatar icon={<ImportOutlined />} />;
    console.log(transaction);
    return transaction;
  });
}

const ShowTransactions = props => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
      if (props.match.params.id) {
      Api(`transactions?registryId=${props.match.params.id}`)
          .then(result => result.data)
          .then(data => setTransactions(makeTransactions(data)))
          .catch(error => console.log(error.response));
      }
  }, []);

  return (
    <>
      <h3>Transactions</h3>
      <List
        bordered
        dataSource={transactions}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={item.type}
              title={item.description}
              description={item.value}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default AuthEnforcement(ShowTransactions);
