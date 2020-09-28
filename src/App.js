import React from "react";
import "./App.css";
import { TransactionProvider } from "./transContext";
import Child from "./Child";

function App() {
  return (
    <TransactionProvider>
      <Child />;
    </TransactionProvider>
  );
}

export default App;
