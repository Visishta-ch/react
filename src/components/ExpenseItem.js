import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){
    const month = props.time.toLocaleString('en-US',{month: 'long'}); 
    const day = props.time.toLocaleString('en-US',{day: '2-digit'});
    const year = props.time.getFullYear();
    return (
        

            
            <div className="expense-item">ItemNo : {props.item}
                <div>
                   <ExpenseDate time ={props.time}/>
                   
                </div>
                <div>
                <ExpenseDetails amount ={props.amount}/>
                </div>
   
            
           </div>
        
    )
}

export default ExpenseItem;