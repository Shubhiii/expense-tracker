import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import "./index.css";

const CreateExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default CreateExpense;
