import React, { useState } from "react";

import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpenseList items={filteredExpenses} />
      </Card>
  );
};

export default Expenses;
