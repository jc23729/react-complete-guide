import ExpenseItem from './ExpenseItem';

function Expenses(props) {}=>{
    return <div>
    <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}></ExpenseItem>
      <ExpenseItem
        title={prop.expenses[1].title}
        amount={prop.expenses[1].amount}
        date={prop.expenses[1].date}></ExpenseItem>
      <ExpenseItem
        title={prop.expenses[2].title}
        amount={prop.expenses[2].amount}
        date={prop.expenses[2].date}></ExpenseItem>
      <ExpenseItem
        title={prop.expenses[3].title}
        amount={prop.expenses[3].amount}
        date={prop.expenses[3].date}></ExpenseItem>
    </div>
    
    
    
    </div>
}

export default Expenses;