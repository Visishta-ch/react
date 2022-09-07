import React from "react";

const ExpenseDate = (props) => {
    const month = props.time.toLocaleString('en-US',{month:'long'});
    const day = props.time.toLocaleString('en-Us',{day:'2-digit'});
    const year = props.time.getFullYear();

    return (
        <div>
            <div> {day} {month}{year}</div>
        </div>     
    )
}

export default ExpenseDate;

