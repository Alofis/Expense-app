import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {id: 1, title: "Test 1", amount: 198.87, date: new Date() },
    {id: 2, title: "Test 2", amount: 234.87, date: new Date() },
    {id: 3, title: "Test 3", amount: 345.87, date: new Date() },
    {id: 4, title: "Test 4", amount: 567.87, date: new Date() }
  ]
  return (
    <div>
      <Expenses props={expenses} />
    </div>
  );
}

export default App;
