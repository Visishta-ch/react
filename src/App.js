import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses  = [
  {item:1, category:'stationary',amount:250, locationSpent : "Books"},
  {item:2,category:'Petrol',amount:500, locationSpent : "Hp petrol bunk"},
  {item:3, category:'Current Bill',amount:450, locationSpent : "Households"},
  {item:4, category:'party',amount:1500, locationSpent : "Bday"},
  {item:5, category:'Food',amount:250, locationSpent : "swiggy"},
  {item:6, category:'Food',amount:250, locationSpent : "zomato"}

  ]
  return (
    <div>
      <h2>Let's get started!</h2>
       {expenses.map((expense,index) =>
        <ExpenseItem item= {expense.item}category={expense.category} amount={expense.amount} locationSpent={expense.locationSpent}>
        
        </ExpenseItem>
      )}
      
    </div>
  );
}

export default App;
