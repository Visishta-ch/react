import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {

    let expenseContent = <p>No entries found !!</p>

    if(props.items.length === 0){
        return <h1>No entries found !!</h1>
    }
    if(props.items.length === 1){ 
        return  <div>
        <h2>"Only single Expense here. Please add more..."</h2>
        <ul>
        { props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          description= {expense.title} time={expense.date}  amount={expense.amount} 
        />
      ))
      }
     </ul>

     </div>
    }
     return <ul>
        { props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          description= {expense.title} time={expense.date}  amount={expense.amount} 
        />
      ))
      }
     </ul>
};


export default ExpenseList;