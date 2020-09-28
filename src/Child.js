import React, { useContext } from "react";
import { TransactionContext } from "./transContext";
function Child() {
  let transactions = useContext(TransactionContext);
  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h3>
        Your balance <br />{" "}
      </h3>

      <div className="total-expense-container">
        <h3>
          Income <br />{" "}
        </h3>
        <h3>
          Expense <br />
        </h3>
      </div>

      <h4>History</h4>
      <hr />
      <ul className="expense-list">
        {transactions.map((transObj, ind) => {
          return (
            <li>
              <span>{transObj.desc}</span>
              <span>{transObj.amount}</span>
            </li>
          );
        })}
      </ul>

      <h4>Add New Transaction</h4>
      <hr />

      <form className="transaction-form">
        <label>
          Enter Description: <br />
          <input type="text" required />
        </label>
        <br />
        <label>
          Enter Amount: <br />
          <input type="number" required />
        </label>
        <br /> <br />
        <input type="submit" value="Add Transaction" />
      </form>
    </div>
  );
}

export default Child;
