//A component in react is just a function
//You always create a component, then export it
//then import in the file you want to use it so you can use it
//like an html element
//main thing is to have one root element, so one <div></div> wrapped
import ExpenseDate from "/Users/juancruz/Documents/Projects/react-complete-guide/src/ExpenseDate.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // props.title key has to match <ExpenseItem title={expenses[0].title
  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>{props.amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
