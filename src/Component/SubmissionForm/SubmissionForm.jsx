import React, { useState } from 'react';

const SubmissionForm = ({onSave,editingTransaction,setEditingTransaction}) => {

const [transactionType, setTransactionType] = useState("Expense");

const [tracker, setTracker] = useState(editingTransaction || {
  id: crypto.randomUUID(),
  category: "Education", // Default to the first "Expense" category
  amount: 0,
  date: "",
  type: "Expense"
});
// console.log("edit ", tracker);




const expenseCategories = [
  "Education",
  "Food",
  "Health",
  "Bill",
  "Insurance",
  "Tax",
  "Transport",
  "Telephone",
];

const incomeCategories = ["Salary", "Outsourcing", "Bond", "Dividend"];

// Set categories based on the transaction type
const [categories, setCategories] = useState(expenseCategories);

function handleTransactionTypeChange(type) {
  const newCategories = type === "Income" ? incomeCategories : expenseCategories;

  // Update transaction type, categories, and set the first category as default
  setTransactionType(type);
  setCategories(newCategories);
  setTracker(prevTracker => ({
    ...prevTracker,
    type,             // Update the type in tracker
    category: newCategories[0] // Set category to the first item in the updated list
  }));
}

function handleChange(e) {
  const { name, value } = e.target;
  setTracker(prevTracker => ({
    ...prevTracker,
    [name]: value
  }));
}
 // When editingTransaction changes, update `tracker` if not already set
 if (editingTransaction && editingTransaction.id !== tracker.id) {
  setTracker(editingTransaction);
}
// function handleSubmit(e) {
//   e.preventDefault();
//   // if (!tracker.amount || isNaN(tracker.amount)   ) {
//   //   alert("Please enter a valid amount.");
//   //   return;
//   // }
  
//   if (!tracker.date) {
//     alert("Please select a date.");
//     return;
//   }
//   if(!editingTransaction){
//     const newTracker = {
//       ...tracker,
//       id: crypto.randomUUID(), // Generate a unique ID for each submission
//     };
//     setTracker(
//       newTracker
//     )

//   }
 
//   onSave(tracker);  // Pass tracker data to parent component when form is submitted.
//   setEditingTransaction(null);

// }
function handleSubmit(e) {
  e.preventDefault();

  // Validate form fields
  if (!tracker.amount || isNaN(tracker.amount)) {
    alert("Please enter a valid amount.");
    return;
  }
  if (!tracker.date) {
    alert("Please select a date.");
    return;
  }



   if (!editingTransaction) {
  // Create a new transaction with a unique ID for new entries
  const newTracker = {
    ...tracker,
    id: crypto.randomUUID(),
  };
  setTracker(newTracker);
  onSave(newTracker, false); // Pass false to indicate a new transaction
} else {
  // Keep the same ID for edits
  onSave(tracker, true); // Pass true to indicate an edit
}


  // Reset form and clear `editingTransaction`
  setEditingTransaction(null);
  // setTracker({
  //   id: crypto.randomUUID(),
  //   category: "Education",
  //   amount: 0.00,
  //   date: "",
  //   type: "Expense",
  // });
}


    return (
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
        <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">Expense Tracker</h2>

        <form onSubmit={handleSubmit}>
          <div
            className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6"
          >
            <div className={`cursor-pointer text-center flex-1 px-4 py-2 
              ${transactionType ==="Expense" ?  " bg-teal-600" :  "hover:bg-slate-50 hover:text-slate-900 active" }
               `}
               onClick={()=>handleTransactionTypeChange("Expense")}
               >
              Expense
            </div>
            <div className={`cursor-pointer text-center flex-1 px-4 py-2 
              ${transactionType ==="Income" ?  "bg-teal-600" :  "hover:bg-slate-50 hover:text-slate-900 active" }
               `}
               onClick={()=>handleTransactionTypeChange("Income")}>
              Income
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                value={tracker.category}
                onChange={handleChange}
                autoComplete="category-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              >
                 {/* <option value="" disabled>Select a category</option> */}
                
                {
                  categories.map(ct=>(<option 
                  key={ct} value={ct}
                  >{ct}</option>))
                }
                
              </select>
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">Amount</label>
            <div className="mt-2">
              <input
                type="number"
                name="amount"
                id="amount"
                value={tracker.amount}
                onChange={handleChange}
                autoComplete="off"
                placeholder="12931"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-3">
            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Date</label>
            <div className="mt-2">
              <input
                type="date"
                name="date"
                id="date"
                value={tracker.date}
                onChange={handleChange}
                autoComplete="off"
                placeholder="12931"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
            // onClick={()=>onSave(tracker)}
          >
            Save
          </button>
        </form>
      </div>
    );
};

export default SubmissionForm;

