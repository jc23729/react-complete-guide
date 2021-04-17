//A component in react is just a function
//You always create a component, then export it
//then import in the file you want to use it so you can use it
//like an html element
//main thing is to have one root element, so one <div></div> wrapped
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">
        <h2>Car Insurance</h2>
      </div>
    </div>
  );
}

// function ExpenseItem() {
//   return (
//     <div className="expense-item">
//       <div>March 28 2021</div>
//       <div className="expense-item__description">
//         <h2>Title</h2>
//       <div className="expense-item__price"/>
//       <div>Amount</div>
//     </div>
//   );
// }

export default ExpenseItem;
