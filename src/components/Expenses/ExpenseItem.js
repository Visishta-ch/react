import React, { useState } from 'react';
import './ExpenseItem.css';

import Card from '../UI/Card';

import ExpenseDate from './ExpenseDate';

import ExpenseDetails from './ExpenseDetails';


const ExpenseItem = (props) => {
  const [description, setDescription] = useState(props.description);

  const clickEditHandler = () => {
    setDescription('Updated!');
    console.log(description);
  };

  const [amount, setAmount] = useState(props.amount);
  const changeAmount = () => {
    setAmount(`${100}`);
    console.log(amount);
  };

  const clickDeleteHandler = () => {
    document.getElementById(props.amount).remove();
  };

 
  
  return (
    <Card id={props.amount} className="expense-item">
      
    
      <ExpenseDetails
        amount={props.amount}
        title={props.description}
        location={props.location}
      />
      <ExpenseDate time={props.time} />
      <button onClick={changeAmount}>Edit_Amount</button>
      <button onClick={clickEditHandler}>Edit</button>
      <button onClick={clickDeleteHandler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
