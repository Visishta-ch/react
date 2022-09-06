import React from 'react';


const ExpenseForm = () => {

    const titleHandler = (event) => {
        console.log(event.target.value);
    }

    const amountHandler = (event) => {
        console.log(event.target.value);
    }

    const dateHandler = (event) => {
        console.log(event.target.value);
    }

    const submitDetails = () => {
        console.log(document.getElementById('title').value);
        // console.log(document.getElementById('amount').value);
        // console.log(document.getElementById('date').value);
        
    }
    return (
        <div>
        <form>
            <label>Expense Title</label>
            <input type = 'text' onChange={titleHandler} id ='title' placeholder = 'Expense Title' name='description' />
            <label>Amount</label>
            <input type = 'number' onChange={amountHandler} id ='amount'  placeholder = 'Expense Amount' name='amount' />
            <label>Date</label>
            <input type = 'date' onChange={dateHandler} id ='date' placeholder = 'Date' name='date' />
            <button onClick={submitDetails}>Add Expense</button>
          
        </form>
        </div>
    )
    
}

export default ExpenseForm;