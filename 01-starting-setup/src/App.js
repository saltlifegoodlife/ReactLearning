import Expenses from "./components/Expenses/Expenses";
import { expenses } from "./data/expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
