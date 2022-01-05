import React from "react";
import "./index.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      updatedTitle: title,
      updatedAmount: amount,
      updatedDate: new Date(date).toLocaleDateString(),
    };

    onSaveExpenseData(expenseData);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={handleTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={handleAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2019-01-01"
            onChange={handleDate}
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
