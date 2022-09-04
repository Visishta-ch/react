import ExpenseItem from "./components/Expenses/ExpenseItem";

function App() {
  const expenses  = [
  {item:1, time:new Date(2022,1,6),amount:250},
  {item:2, time:new Date(2022,1,7), amount:500},
  {item:3, time:new Date(2022,2,8), amount:450},
  {item:4, time:new Date(2022,2,9), amount:1500},
  {item:5, time:new Date(2022,2,10), amount:250},
  {item:6, time:new Date(2022,2,11),amount:250}

  ]
  return (
    <div>
      <h2>Let's get started!</h2>
       {expenses.map((expense,index) =>
        <ExpenseItem item= {expense.item} time={expense.time}  amount={expense.amount} >
         
        </ExpenseItem>
      )}
      
    </div>
  );
}

export default App;
