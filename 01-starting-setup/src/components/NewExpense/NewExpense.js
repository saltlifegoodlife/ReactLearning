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
    setShow(false);
  };

  const showHandler = () => {
    setShow(true);
  };

  const hideHandler = () => {
    setShow(false);
  };
  return (
    <div className="new-expense">
      {!show && <button onClick={showHandler}>Add New Expense</button>}
      {show && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
