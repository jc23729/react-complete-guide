//A component in react is just a function
//You always create a component, then export it
//then import in the file you want to use it so you can use it
//like an html element
//main thing is to have one root element, so one <div></div> wrapped
function ExpenseItem() {
  return (
    <div>
      <div>Date</div>
      <div>
        <h2>Title</h2>
      </div>
      <div>Amount</div>
    </div>
  );
}

export default ExpenseItem;
