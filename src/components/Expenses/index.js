import React from "react";
import Card from "./components/ExpenseCard";
import ExpensesFilter from "./components/ExpenseFilter";
import ExpenseItem from "./components/ExpenseItem";
import ExpensesList from "./components/ExpenseList";
import ExpensesChart from "./components/ExpensesChart";
import "./index.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = React.useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  let expenseData = (
    <p style={{ textAlign: "center", color: "#fff" }}>No Data Found!</p>
  );

  if (items.length > 0) {
    expenseData = (
      <>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </>
    );
  }
  return <Card className="expenses">{expenseData}</Card>;
};

export default Expenses;
