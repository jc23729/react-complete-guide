//A component in react is just a function
//You always create a component, then export it
//then import in the file you want to use it so you can use it
//like an html element
//main thing is to have one root element, so one <div></div> wrapped
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>March 28</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">
        <h2>294.67</h2>
      </div>
    </div>
  );
}


export default ExpenseItem;
