import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [show, setShow] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showHandler = () => {
    setShow(true);
  };
  console.log(show);
  return (
    <div className="new-expense">
      {!show && <button onClick={showHandler}>Add New Expense</button>}
      {show && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
}

export default NewExpense;
