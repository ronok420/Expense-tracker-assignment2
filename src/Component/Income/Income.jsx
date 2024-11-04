import React, { useState } from "react";
import E1 from "../Svg/E1";
import E2 from "../Svg/E2";
import E3 from "../Svg/E3";
import E6 from "../Svg/E6";
import E7 from "../Svg/E7";
import { useDropdown } from "../../CustomHooks/useDropdown";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";

const Income = ({ transactions,onDelete,onEdit}) => {

  const incomeCategories = ["Salary", "Outsourcing", "Bond","Dividend"];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isSorted, setIsSorted] = useState(false); // State to control sorting
  const menuDropdown = useDropdown();
  const filterDropdown = useDropdown();

  //
  const filteredTransactions = selectedCategories.length
  ? transactions.filter(
      (tr) =>
        tr.type === "Income" && selectedCategories.includes(tr.category)
    )
  : transactions.filter((tr) => tr.type === "Income");

  const closeDropdowns = () => {
   menuDropdown.closeDropdown();
   filterDropdown.closeDropdown();
  };

  const sortedTransactions = isSorted
    ? filteredTransactions.sort((a, b) => sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount)
    : filteredTransactions; // Only sort if isSorted is true


  return (
    <div className="border rounded-md relative" onClick={closeDropdowns}>
      {/* <!-- Header --> */}
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
            <E1 />
          </div>
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Income
            </h3>
          </div>
        </div>
        <div>
          {/* <!-- Sorting Dropdown --> */}
          <div
            className="relative inline-block text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={menuDropdown.toggleDropdown}
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded={menuDropdown.isDropdownOpen}
              aria-haspopup="true"
            >
              <E2 />
            </button>
            {menuDropdown.isDropdownOpen && (
              // <div
              //   className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              //   role="menu"
              //   aria-orientation="vertical"
              //   aria-labelledby="menu-button"
              //   tabIndex="-1"
              // >
              //   <div className="py-1" role="none">
              //     <a
              //       href="#"
              //       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              //       role="menuitem"
              //       tabIndex="-1"
              //     >
              //       Low to High
              //     </a>
              //     <a
              //       href="#"
              //       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
              //       role="menuitem"
              //       tabIndex="-1"
              //     >
              //       High to Low
              //     </a>
              //   </div>
              // </div>
              <Sort
              sortOrder={sortOrder}
              setIsSorted={setIsSorted}
              setSortOrder={setSortOrder}
              // setSortOrder={(order) => {
              //   setSortOrder(order);
              //   setIsSorted(true); // Enable sorting
              // }}
            />
            )}
          </div>

          {/* <!-- Filtering Dropdown --> */}
          <div
            className="relative inline-block text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={filterDropdown.toggleDropdown}
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="filter-button"
              aria-expanded={filterDropdown.isDropdownOpen}
              aria-haspopup="true"
            >
              <E3 />
            </button>
            {filterDropdown.isDropdownOpen && (
              // <div
              //   className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              //   role="menu"
              //   aria-orientation="vertical"
              //   aria-labelledby="filter-button"
              //   tabIndex="-1"
              //   id="filter-dropdown"
              // >
              //   <div className="py-1" role="none">
              //     <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              //       <input
              //         type="checkbox"
              //         className="form-checkbox h-4 w-4 rounded-md text-gray-600"
              //         id="filter-option-1"
              //       />
              //       <span className="ml-2">Salary</span>
              //     </label>
              //     <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              //       <input
              //         type="checkbox"
              //         className="form-checkbox h-4 w-4 rounded-md text-gray-600"
              //         id="filter-option-2"
              //       />
              //       <span className="ml-2">Outsourcing</span>
              //     </label>
              //     <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              //       <input
              //         type="checkbox"
              //         className="form-checkbox h-4 w-4 rounded-md text-gray-600"
              //         id="filter-option-3"
              //       />
              //       <span className="ml-2">Bond</span>
              //     </label>
              //     <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              //       <input
              //         type="checkbox"
              //         className="form-checkbox h-4 w-4 rounded-md text-gray-600"
              //         id="filter-option-4"
              //       />
              //       <span className="ml-2">Dividend</span>
              //     </label>
              //   </div>
              // </div>
              <Filter
              categories={incomeCategories} 
              selectedCategories={selectedCategories} 
              setSelectedCategories={setSelectedCategories} 
            />
            )}
          </div>
        </div>
      </div>

      <div className="p-4 divide-y">
        {filteredTransactions.map(
          (tr, index) =>
            tr.type === "Income" && (
              <div
                key={tr.id}
                className="flex justify-between items-center py-2 relative group cursor-pointer"
              >
                <div>
                  <h3 className="text-base font-medium leading-7 text-gray-600">
                    {tr.category}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {" "}
                    {new Intl.DateTimeFormat("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(tr.date))}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                    BDT {Number(tr.amount)}
                  </p>
                  <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                    <button
                      className="hover:text-teal-600"
                      role="button"
                      title="Edit Button"
                      onClick={() => onEdit(tr)}
                    >
                      <E6 />
                    </button>
                    <button
                      className="hover:text-red-600"
                      role="button"
                      title="Delete"
                      onClick={()=>onDelete(tr.id)}
                    >
                      <E7 />
                    </button>
                  </div>
                </div>
              </div>
            )
        )}

       
      </div>
    </div>
  );
};

export default Income;
