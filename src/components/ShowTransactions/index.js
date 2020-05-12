import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthEnforcement from '../AuthEnforcement';
import './style.scss';
import Api from '../Api';

const makeTransactions = trans => {
  return trans.map(transaction => {
     if (transaction.type === 2) {
       transaction['avatar'] = <></>;
     } else {
       transaction['avatar'] = <></>;
     }
    console.log(transaction);
    return transaction;
  });
}

const ShowTransactions = props => {
  const params = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
      Api(`transactions?registryId=${params.id}`)
          .then(result => result.data)
          .then(data => setTransactions(makeTransactions(data)))
          .catch(error => console.log(error.response));
  }, [params.id]);

  return (
    <>
      <h1>Transactions</h1>
      <main>
        
      </main>
      {/*<List
        dataSource={transactions}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={item.avatar}
              title={item.description}
              description={item.value}
            />
          </List.Item>
        )}
      />*/}
    </>
  );
};

export default AuthEnforcement(ShowTransactions);
