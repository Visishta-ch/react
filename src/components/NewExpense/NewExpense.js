import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (EnteredExpenseData) => { 
        const expenseData = {
            ...EnteredExpenseData,
            id: Math.random().toString()  
        };
        console.log("id :"+ expenseData.id);
        props.onAddExpense(expenseData)
    };


    return (
        <div className = 'new-expense'>
            <ExpenseForm  onSaveExpenseData = {onSaveExpenseDataHandler} />
        </div>
    );

};

export default NewExpense;