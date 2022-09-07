import React,{ useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [editing,setEditing] = useState(false)

    const onSaveExpenseDataHandler = (EnteredExpenseData) => { 
        const expenseData = {
            ...EnteredExpenseData,
            id: Math.random().toString()  
        };
        console.log("id :"+ expenseData.id);
        props.onAddExpense(expenseData)
        setEditing(false);
    };

    const startEditing = () => {
        setEditing(true);
    }
    const stopEditing = () => {
        setEditing(false);
    }


    return (
        <div className = 'new-expense'>
           {!editing && <button id='add-expense' onClick = {startEditing}>Add New Expense</button>}
           {editing && <ExpenseForm  onSaveExpenseData = {onSaveExpenseDataHandler}  onCancel = {stopEditing}/>}
        </div>
    );

};

export default NewExpense;