import React from 'react';
const ExpenseDetails = (props) => {
    const title = props.title;
    const amount = props.amount; 


    return(
        <div>
           <div>category = {title}</div> amount = ${amount}
        </div>
    )
}

export default ExpenseDetails;