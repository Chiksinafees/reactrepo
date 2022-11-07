import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails ";
import Card from "../UI/Card";

const Expense = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <h2>{props.title}</h2>
      <h2>{props.LocationOfExpenditure}</h2>

      <div>
        <ExpenseDetails amount={props.amount} />
      </div>
    </Card>
  );
  // just did for checking how createElement work
  //   React.createElement("div",{ className: "expense-item" },
  //   React.createElement(ExpenseDate, { date: props.date }),
  //   React.createElement("h2", {}, props.title),
  //   React.createElement("h2", {}, props.LocationOfExpenditure),
  //   React.createElement("div",{},
  //   React.createElement(ExpenseDetails, { amount: props.amount })
  //   )
  // );
};

export default Expense;
