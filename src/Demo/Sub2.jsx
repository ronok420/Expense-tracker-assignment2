import React, { useState } from "react";

const SubmissionForm = ({ onAddTransaction, editingTransaction, onEditTransaction }) => {
  const [transactionType, setTransactionType] = useState("Expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  // Initialize form state if editing
  const initializeForm = () => {
    if (editingTransaction) {
      setTransactionType(editingTransaction.type);
      setAmount(editingTransaction.amount);
      setCategory(editingTransaction.category);
      setDate(editingTransaction.date);
    } else {
      resetForm();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: editingTransaction ? editingTransaction.id : Date.now(),
      type: transactionType,
      category,
      amount: Number(amount),
      date,
    };

    if (editingTransaction) {
      onEditTransaction(transaction);
    } else {
      onAddTransaction(transaction);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setTransactionType("Expense");
    setAmount("");
    setCategory("");
    setDate("");
  };

  // Call initializeForm when component is mounted or when editingTransaction changes
  if (editingTransaction) {
    initializeForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Transaction Type:</label>
        <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">{editingTransaction ? "Update Transaction" : "Add Transaction"}</button>
    </form>
  );
};

export default SubmissionForm;
