import React, { useState } from 'react';

// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css'
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />
      {/* {filteredExpenses.length === 0 && <p>No entries found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            description= {expense.title} time={expense.date}  amount={expense.amount} 
          />
        )) }
 */}   
  <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>

      </Card>
    </div>
  );
};

export default Expenses;