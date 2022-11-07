import Expense from "./Expense/ExpenseItem";
import Card from "./Expense/Card";
import "./App.css";

function App() {
  const Sampleexpense = [
    {
      id: "a1",
      title: "abc",
      date: new Date(2021, 5, 15),
      amount: 500,
      LocationOfExpenditure: "DELHI",
    },
    {
      id: "a2",
      title: "def",
      date: new Date(2020, 6, 29),
      amount: 400,
      LocationOfExpenditure: "UTTAR PRADESH",
    },
    {
      id: "a3",
      title: "ghi",
      date: new Date(2022, 2, 14),
      amount: 300,
      LocationOfExpenditure: "NOIDA",
    },
    {
      id: "a4",
      title: "pqr",
      date: new Date(2021, 8, 20),
      amount: 900,
      LocationOfExpenditure: "GAZIABAD",
    },
  ];
  return (
    <Card className="expense123">
      {Sampleexpense.map((Sample) => {
        return (
          <div key={Sample.id}>
            <Expense
              title={Sample.title}
              date={Sample.date}
              amount={Sample.amount}
              LocationOfExpenditure={Sample.LocationOfExpenditure}
            />
          </div>
        );
      })}
    </Card>
  );
}

export default App;
