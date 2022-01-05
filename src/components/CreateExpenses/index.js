import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import "./index.css";

const CreateExpense = ({ onAddExpense }) => {
  const [count, setCount] = React.useState(0);
  const handleExpenseData = (data) => {
    const expenseData = {
      ...data,
      id: count,
    };

    setCount(count + 1);

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleExpenseData} />
    </div>
  );
};

export default CreateExpense;
