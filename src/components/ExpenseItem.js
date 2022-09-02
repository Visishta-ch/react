import './ExpenseItem.css';
function ExpenseItem(props){
     
    return (
        <div >

            
            <div className="expense-item"> {props.item}
            <div className="expense-item__description">
                <h3>{props.category}</h3>
                <div className="expense-item__price">
                    {props.amount}
                </div>
                <div className="expense-item__location">
                <h3>{props.locationSpent}</h3>
                </div>
           </div>
           </div>
        </div>
    )
}

export default ExpenseItem;