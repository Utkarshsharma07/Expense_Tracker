import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const [isEdititng, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //copy in the enteredExpenseData which i expect to be that object which we generated in submithandler all key value pairs were added to this objct
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //we also want after adding expenses we want to close eiting window
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };
  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEdititng && <button onClick={startEditing}>Add new expenses</button>}
      {isEdititng && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpenses;
