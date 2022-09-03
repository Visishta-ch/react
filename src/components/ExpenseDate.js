function ExpenseDate(props){
    const month = props.time.toLocaleString('en-US',{month:'long'});
    const day = props.time.toLocaleString('en-Us',{day:'2-digit'});
    const year = props.time.getFullYear();

    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    )
}

export default ExpenseDate;

