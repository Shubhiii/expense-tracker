import React from "react";
import Card from "./components/ExpenseCard";
import ExpenseItem from "./components/ExpenseItem";
import "./index.css";

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((item, i) => {
        return (
          <ExpenseItem
            key={i}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
