import React from 'react';

import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
  const expenses  = [
  {item_id:1, description: 'food',time:new Date(2022,1,6),amount:250, location: 'office'},
  {item_id:2, description: 'petrol', time:new Date(2022,1,7), amount:500,location: 'HpBunk'},
  {item_id:3, description: 'groceries', time:new Date(2022,2,8), amount:450,location: 'Big_Basket'},
  {item_id:4, description: 'currentBill', time:new Date(2022,2,9), amount:1500,location: 'houe'},
  {item_id:5, description: 'swiggy',time:new Date(2022,2,10), amount:250,location: 'office'},
  {item_id:6, description: 'zomato', time:new Date(2022,2,11),amount:250,location: 'office'}

  ]
  return (
    <div id="expenses">
      <h2>Let's get started!</h2>
      
        {expenses.map((expense,index) =>
          <ExpenseItem  item= {expense.item_id}  description= {expense.description} time={expense.time}  amount={expense.amount}  location = {expense.location}/ >
      )}
      
      
    </div>
  );
}

export default App;
