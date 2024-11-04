import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import SubmissionForm from "./Component/SubmissionForm/SubmissionForm";
import TotalBalance from "./Component/TotalBalancae/TotalBalance";
import Income from "./Component/Income/Income";
import Expense from "./Component/Expense/Expense";


const Layout = () => {
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);
  // function handleAddTransaction(tracker){
  //   setTransactions(previousTransactions =>[...previousTransactions,tracker]);
  //   console.log(transactions);

  // }
  // function handleAddTransaction(tracker,isEdit) {
  //   setTransactions(previousTransactions => {
  //     const updatedTransactions = [...previousTransactions, tracker];
  //     console.log(updatedTransactions); // Logs the updated transactions immediately
  //     return updatedTransactions;
  //   });
  // }
  function handleAddTransaction(tracker, isEdit) {
    console.log("tracker  edit  or   add ",tracker)
    setTransactions((previousTransactions) => {
      if (isEdit) {
        // Update the existing transaction by keeping the same ID
        return previousTransactions.map((transaction) =>
          transaction.id === tracker.id ? tracker : transaction
        );
      } else {
        // Add a new transaction with a unique ID
        return [...previousTransactions, tracker];
      }
    });
  }
  

  const totalIncome = transactions
  .filter((tx) => tx.type === "Income")
  .reduce((acc, tx) => acc + parseFloat(tx.amount), 0);
const totalExpense = transactions
  .filter((tx) => tx.type === "Expense")
  .reduce((acc, tx) => acc + parseFloat(tx.amount), 0);
const balance = totalIncome - totalExpense;
const  trackedCalculation={
  totalIncome:totalIncome,
  totalExpense:totalExpense,
  balance:balance,
  
}


function handleDelete(categoryId){
  setTransactions(transactions.filter(tr=>tr.id!==categoryId));

}
function handleEditTransaction(transaction){
  setEditingTransaction(transaction);

}

  return (
    <>
      <Navbar />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SubmissionForm  onSave={handleAddTransaction}  editingTransaction={editingTransaction}  setEditingTransaction={setEditingTransaction}  />

          <div className="lg:col-span-2">
            <TotalBalance trackedCalculation={trackedCalculation} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
               <Income transactions={transactions} onDelete={handleDelete} onEdit={handleEditTransaction} ></Income>
               <Expense transactions={transactions} onDelete={handleDelete} onEdit={handleEditTransaction}></Expense>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Layout;

