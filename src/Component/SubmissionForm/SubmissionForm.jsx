import React, { useState } from 'react';

const SubmissionForm = () => {
  const [transactionType, setTransactionType]=useState("Expense");
  const [categories,setCategories]=useState([
    "Education",
    "Food",
    "Health",
    "Bill",
    "Insurance",
    "Tax",
    "Transport",
    "Telephone",
  ])
  function handleTransactionTypeChange(type){
  
    setTransactionType(type)
      setCategories(
        type ==="Income" ? ["Salary", "Outsourcing", "Bond", "Dividend"]
        : [
            "Education",
            "Food",
            "Health",
            "Bill",
            "Insurance",
            "Tax",
            "Transport",
            "Telephone",
          ]
      )
 

  }
    return (
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
        <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">Expense Tracker</h2>

        <form>
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
                autoComplete="category-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              >
                
                {
                  categories.map(ct=>(<option 
                  key={ct}
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
                autoComplete="off"
                placeholder="12931"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
          >
            Save
          </button>
        </form>
      </div>
    );
};

export default SubmissionForm;
