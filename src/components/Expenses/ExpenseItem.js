import React from 'react';
import './ExpenseItem.css';

import Card from '../UI/Card';

import ExpenseDate from './ExpenseDate';

import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props){
    
    

    const clickDeleteHandler = () => { 
      console.log('Entry Deleted');
    }
    const clickEditHandler = () => {
        console.log('Entry Updated');
    }
    return (
        

            
            <Card className="expense-item">ItemNo : {props.item}
                <div>
                   <ExpenseDate time ={props.time}/>
                   
                </div>
                <div>
                <ExpenseDetails amount ={props.amount}/>
                </div>
                <button onClick ={clickEditHandler}>Edit</button>
                <button onClick={clickDeleteHandler}>Delete</button>
           </Card>
        
    )
}

export default ExpenseItem;