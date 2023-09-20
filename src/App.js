import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import Card from "./components/UI/Card";

const DUMMY_DATA = [
  {id: 1, title: "Test 1", amount: 198.87, date: "2021-03-25" },
  {id: 2, title: "Test 2", amount: 234.87, date: '2021-12-18' },
  {id: 3, title: "Test 3", amount: 345.87, date: '2022-12-18' },
  {id: 4, title: "Test 4", amount: 567.87, date: '2023-12-18' }
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA) 

  const showNewExpense = (expense) => {
    // Lifting the state up
    console.log('in app js')
    console.log(expense)
    // useState fn to update add the new expense
    setExpenses((prevState) => {
      return [
        expense,
        ...prevState
    ]
    })
  }

  return (
    <div>
      <ExpenseForm onAddExpense={showNewExpense}/>
      <Expenses props={expenses}>
      </Expenses>
    </div>
  );
}

export default App;
