import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails ";

function Expense(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <h2>{props.title}</h2>
      <h2>{props.LocationOfExpenditure}</h2>

      <div>
        <ExpenseDetails amount={props.amount} />
      </div>
    </div>
  );
}

export default Expense;
