import React, { useState } from 'react';


const ExpenseForm = () => {
    const [titleEntered, setTitleEntered] = useState('');
    const[amountEntered, setAmountEntered] = useState('');
    const[dateEntered, setDateEntered] = useState('');
    const titleHandler = (event) => {
        // console.log(event.target.value);
        setTitleEntered(event.target.value);
        console.log(titleEntered);
        console.log(event.target.value)
    }

    const amountHandler = (event) => {
        setAmountEntered(event.target.value);
        console.log(amountEntered);
        console.log(event.target.value);
    }

    const dateHandler = (event) => {
        
        setDateEntered(event.target.value);
        console.log(dateEntered);
        console.log(event.target.value)
    }

    // const submitDetails = () => {
    //     console.log("Submitted Expense Details :")
    //     console.log(document.getElementById('title').value);
    //     console.log(document.getElementById('amount').value);
    //     console.log(document.getElementById('date').value);
        
    // }
    const submitDetails = (event) => {
        event.preventDefault();
        const dataEntered = {
            title : titleEntered,
            amount : amountEntered,
            date: new Date(dateEntered)
        }
        console.log(dataEntered);
    }
    return (
        <div>
        <form onSubmit={submitDetails}>
            <label>Expense Title</label>
            <input type = 'text' onChange={titleHandler} id ='title' placeholder = 'Expense Title' name='description' />
            <label>Amount</label>
            <input type = 'number' onChange={amountHandler} id ='amount'  placeholder = 'Expense Amount' name='amount' />
            <label>Date</label>
            <input type = 'date' onChange={dateHandler} id ='date' placeholder = 'Date' name='date' />
            <button type = 'submit' >Add Expense</button>
          
        </form>
        </div>
    )
    
}

export default ExpenseForm;