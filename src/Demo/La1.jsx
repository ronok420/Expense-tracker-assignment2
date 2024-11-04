import React, { useState } from "react";
import SubmissionForm from "./SubmissionForm";
import TotalBalance from "./TotalBalance";
import Income from "./Income";
import Expense from "./Expense";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const handleAddTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  const handleEditTransaction = (updatedTransaction) => {
    setTransactions((prev) =>
      prev.map((tx) =>
        tx.id === updatedTransaction.id ? updatedTransaction : tx
      )
    );
    setEditingTransaction(null);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  const totalIncome = transactions
    .filter((tx) => tx.type === "Income")
    .reduce((acc, tx) => acc + tx.amount, 0);
  const totalExpense = transactions
    .filter((tx) => tx.type === "Expense")
    .reduce((acc, tx) => acc + tx.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div>
      <TotalBalance
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        balance={balance}
      />
      <SubmissionForm
        onAddTransaction={handleAddTransaction}
        editingTransaction={editingTransaction}
        onEditTransaction={handleEditTransaction}
      />
      <Income transactions={transactions.filter(tx => tx.type === "Income")} onEdit={setEditingTransaction} onDelete={handleDeleteTransaction} />
      <Expense transactions={transactions.filter(tx => tx.type === "Expense")} onEdit={setEditingTransaction} onDelete={handleDeleteTransaction} />
    </div>
  );
};

export default App;
