
const [tracker, setTracker] = useState(
    editingTransaction || {
      id: crypto.randomUUID(),
      category: "Education", // Default to the first "Expense" category
      amount: 0.00,
      date: "",
      type: "Expense",
    }
  );
  
  // When editingTransaction changes, update `tracker` if not already set
  if (editingTransaction && editingTransaction.id !== tracker.id) {
    setTracker(editingTransaction);
  }
  
  // Handle form input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setTracker((prevTracker) => ({
      ...prevTracker,
      [name]: value,
    }));
  }
  
  // Handle form submission
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
    onSave(newTracker, false); // Pass false to indicate a new transaction
  } else {
    // Keep the same ID for edits
    onSave(tracker, true); // Pass true to indicate an edit
  }
  
  
    // Reset form and clear `editingTransaction`
    setEditingTransaction(null);
    setTracker({
      id: crypto.randomUUID(),
      category: "Education",
      amount: 0.00,
      date: "",
      type: "Expense",
    });
  }
  


  
// import React, { useState } from 'react';

// const SubmissionForm = ({ onSave, editingTransaction, setEditingTransaction }) => {
//   // Initialize `tracker` with either `editingTransaction` or default values
//   const [tracker, setTracker] = useState(
//     editingTransaction || {
//       id: crypto.randomUUID(),
//       category: "Education", // Default to the first "Expense" category
//       amount: 0.00,
//       date: "",
//       type: "Expense",
//     }
//   );

//   // When editingTransaction changes, update `tracker` if not already set
//   if (editingTransaction && editingTransaction.id !== tracker.id) {
//     setTracker(editingTransaction);
//   }

//   // Handle form input changes
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setTracker((prevTracker) => ({
//       ...prevTracker,
//       [name]: value,
//     }));
//   }

//   // Handle form submission
//   function handleSubmit(e) {
//     e.preventDefault();

//     // Validate form fields
//     if (!tracker.amount || isNaN(tracker.amount)) {
//       alert("Please enter a valid amount.");
//       return;
//     }
//     if (!tracker.date) {
//       alert("Please select a date.");
//       return;
//     }

  

//      if (!editingTransaction) {
//     // Create a new transaction with a unique ID for new entries
//     const newTracker = {
//       ...tracker,
//       id: crypto.randomUUID(),
//     };
//     onSave(newTracker, false); // Pass false to indicate a new transaction
//   } else {
//     // Keep the same ID for edits
//     onSave(tracker, true); // Pass true to indicate an edit
//   }


//     // Reset form and clear `editingTransaction`
//     setEditingTransaction(null);
//     setTracker({
//       id: crypto.randomUUID(),
//       category: "Education",
//       amount: 0.00,
//       date: "",
//       type: "Expense",
//     });
//   }

//   return (
//     <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
//       <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
//         {editingTransaction ? "Edit Transaction" : "Add Transaction"}
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mt-3">
//           <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
//             Category
//           </label>
//           <select
//             id="category"
//             name="category"
//             value={tracker.category}
//             onChange={handleChange}
//             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
//           >
//             <option value="Education">Education</option>
//             <option value="Food">Food</option>
//             <option value="Health">Health</option>
//             {/* Add other categories as needed */}
//           </select>
//         </div>

//         {/* Other form fields for `amount`, `date`, etc. */}
//         <div className="mt-3">
//           <label htmlFor="amount" className="block text-sm font-medium leading-6 text-gray-900">
//             Amount
//           </label>
//           <input
//             type="number"
//             name="amount"
//             id="amount"
//             value={tracker.amount}
//             onChange={handleChange}
//             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
//           />
//         </div>
//         <div className="mt-3">
//           <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
//             Date
//           </label>
//           <input
//             type="date"
//             name="date"
//             id="date"
//             value={tracker.date}
//             onChange={handleChange}
//             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
//           />
//         </div>

//         <button
//           type="submit"
//           className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
//         >
//           {editingTransaction ? "Update Transaction" : "Save Transaction"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SubmissionForm;

