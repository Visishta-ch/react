import React, {useState} from 'react';

import ExpenseItem from "./components/Expenses/ExpenseItem";

import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from './components/Expenses/ExpenseFilter';


const dummyExpenses  = [
  {id: '1',title: 'food',date:new Date(2022,6,11),amount:250, location: 'office'},
  {id: '2', title: 'petrol', date:new Date(2022,1,7), amount:500,location: 'HpBunk'},
  {id: '3', title: 'groceries', date:new Date(2022,2,8), amount:450,location: 'Big_Basket'},
  {id: '4',title: 'currentBill', date:new Date(2022,2,9), amount:1500,location: 'houe'},
  {id: '5', title: 'swiggy',date:new Date(2022,2,10), amount:250,location: 'office'},
  {id: '6', title: 'zomato', date:new Date(2022,2,11),amount:250,location: 'office'}

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

  const [filteredYear, setFilteredYear] = useState('2022');
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div id="expenses">
      <h2>Let's get started!</h2>

      <NewExpense onAddExpense = {addExpenseHandler} />
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />
      {expenses.map((expense) =>
          <ExpenseItem   key = {expense.id} item= {expense.id} description= {expense.title} time={expense.date}  amount={expense.amount} / >

      )}
          
    </div>
  );
}

export default App;
