import React from 'react';
const ExpenseDetails = (props) => {
    const title = props.description;
    const amount = props.amount; 
    const location = props.location;


    return(
        <div>
           <div>category = {title}</div>  ${amount} @ {location}
        </div>
    )
}

export default ExpenseDetails;