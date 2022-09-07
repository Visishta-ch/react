import React, {useState} from 'react';

import ExpenseItem from "./components/Expenses/ExpenseItem";

import NewExpense from "./components/NewExpense/NewExpense";



const dummyExpenses  = [
  { title: 'food',date:new Date(2022,6,11),amount:250, location: 'office'},
  { title: 'petrol', date:new Date(2022,1,7), amount:500,location: 'HpBunk'},
  { title: 'groceries', date:new Date(2022,2,8), amount:450,location: 'Big_Basket'},
  { title: 'currentBill', date:new Date(2022,2,9), amount:1500,location: 'houe'},
  { title: 'swiggy',date:new Date(2022,2,10), amount:250,location: 'office'},
  { title: 'zomato', date:new Date(2022,2,11),amount:250,location: 'office'}

  ];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    //console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    
    

  }

  return (
    <div id="expenses">
      <h2>Let's get started!</h2>

      <NewExpense onAddExpense = {addExpenseHandler} />
      
      {expenses.map((expense,index) =>
          <ExpenseItem description= {expense.title} time={expense.date}  amount={expense.amount} / >

      )}
          
    </div>
  );
}

export default App;
