import React from "react";
import I1 from "../Svg/I1";
import I2 from "../Svg/I2";
import I3 from "../Svg/I3";
import I4 from "../Svg/I4";
import I5 from "../Svg/I5";
import I6 from "../Svg/I6";
import I7 from "../Svg/I7";
import I8 from "../Svg/I8";
import I9 from "../Svg/I9";
import { useDropdown } from "../../CustomHooks/useDropdown";

const Expense = ({transactions,onDelete,onEdit}) => {
  const menuDropdown = useDropdown();  // For Sorting dropdown
  const filterDropdown = useDropdown(); // For Filtering dropdown
  const closeAllDropdowns = () => { //alternative  way
    menuDropdown.closeDropdown();
    filterDropdown.closeDropdown();
  };

  return (
    // <div className="border rounded-md" onClick={closeAllDropdowns}> //alternative  way
    <div className="border rounded-md"
      onClick={() => {
      menuDropdown.closeDropdown();
      filterDropdown.closeDropdown();
    }}>
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          {/* <!-- Icon --> */}
          <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">

            <I1></I1>
          </div>
          {/* <!-- Text --> */}
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Expense
            </h3>
          </div>
        </div>

        {/* <!-- Sorting and Filtering Column --> */}
        <div>
          {/* <!-- Sorting --> */}
          <div className="relative inline-block text-left"  onClick={(e) => e.stopPropagation()}>
            <div>
              <button
                type="button"
                onClick={menuDropdown.toggleDropdown}
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button2"
                aria-expanded={menuDropdown.isDropdownOpen}
                aria-haspopup="true"
              >
               <I2></I2>
              </button>
            </div>
            {menuDropdown.isDropdownOpen &&
             (<div
              className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu2"
              aria-orientation="vertical"
              aria-labelledby="menu-button2"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Low to High
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  High to Low
                </a>
              </div>
            </div>

            )

            }

          </div>

          {/* <!-- Filtering --> */}
          <div className="relative inline-block text-left"  onClick={(e) => e.stopPropagation()}>
            <div>
              <button
                type="button"
                onClick={filterDropdown.toggleDropdown}
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="filter-button-2"
                aria-expanded={filterDropdown.isDropdownOpen}
                aria-haspopup="true"
              >
               <I3></I3>
              </button>
            </div>

         {filterDropdown.isDropdownOpen && (
           <div
           className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
           role="menu"
           aria-orientation="vertical"
           aria-labelledby="filter-button-2"
           tabIndex="-1"
           id="filter-dropdown2"
         >
           <div className="py-1" role="none">
             <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
               <input
                 type="checkbox"
                 className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                 id="filter-option-1"
               />
               <span className="ml-2">Education</span>
             </label>
             <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
               <input
                 type="checkbox"
                 className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                 id="filter-option-2"
               />
               <span className="ml-2">Food</span>
             </label>
             <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
               <input
                 type="checkbox"
                 className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                 id="filter-option-3"
               />
               <span className="ml-2">Health</span>
             </label>
           </div>
         </div>

         )

         }

          </div>
        </div>
        {/* <!-- Sorting and Filtering Column Ends --> */}
      </div>

      <div className="p-4 divide-y">
        {/* <!-- Expense Row 1 --> */}
        {
          transactions.map(tr=>tr.type==="Expense" && (  <div className="flex justify-between items-center py-2 relative group cursor-pointer" key={tr.id}>
            <div >
              <h3 className="text-base font-medium leading-7 text-gray-600">
              {tr.category}
              </h3>
              <p className="text-xs text-gray-600"> {" "}
                    {new Intl.DateTimeFormat("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(tr.date))}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
              BDT {Number(tr.amount)}
              </p>

              {/* <!-- 3 Dots --> */}
              <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                <button
                  className="hover:text-teal-600"
                  role="button"
                  title="Edit Button"
                  onClick={() => onEdit(tr)}
                >
                <I4></I4>
                </button>

                <button
                  className="hover:text-red-600"
                  role="button"
                  title="Delete"
                  onClick={()=>onDelete(tr.id)}
                >
                <I5></I5>
                </button>
              </div>
            </div>
          </div>

          ))
        }

      </div>
    </div>
  );
};

export default Expense;

















// import React, { useState } from "react";
// import I1 from "../Svg/I1";
// import I2 from "../Svg/I2";
// import I3 from "../Svg/I3";
// import I4 from "../Svg/I4";
// import I5 from "../Svg/I5";
// import { useDropdown } from "../../CustomHooks/useDropdown";

// const Expense = ({ transactions, onDelete, onEdit }) => {
//   // Define expense categories (from the "Expense Tracker" form)
//   const expenseCategories = ["Education", "Food", "Health"]; // Replace with actual expense categories

//   // State for selected filter categories
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   // Dropdown for sorting and filtering
//   const menuDropdown = useDropdown();
//   const filterDropdown = useDropdown();

//   // Close dropdowns when clicking outside
//   const closeAllDropdowns = () => {
//     menuDropdown.closeDropdown();
//     filterDropdown.closeDropdown();
//   };

//   // Handle checkbox toggle for category filtering
//   const toggleCategory = (category) => {
//     setSelectedCategories((prevSelectedCategories) => {
//       if (prevSelectedCategories.includes(category)) {
//         return prevSelectedCategories.filter((cat) => cat !== category);
//       } else {
//         return [...prevSelectedCategories, category];
//       }
//     });
//   };

//   // Filtered transactions based on selected categories
//   const filteredTransactions = selectedCategories.length
//     ? transactions.filter(
//         (tr) =>
//           tr.type === "Expense" && selectedCategories.includes(tr.category)
//       )
//     : transactions.filter((tr) => tr.type === "Expense");

//   return (
//      // <div className="border rounded-md" onClick={closeAllDropdowns}> //alternative  way
//      <div className="border rounded-md"
//      onClick={() => {
//      menuDropdown.closeDropdown();
//      filterDropdown.closeDropdown();
//    }}>
//       <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
//         <div className="flex items-center gap-2">
//           {/* <!-- Icon --> */}
//           <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">

//             <I1></I1>
//           </div>
//           {/* <!-- Text --> */}
//           <div>
//             <h3 className="text-xl font-semibold leading-7 text-gray-800">
//               Expense
//             </h3>
//           </div>
//         </div>

//         {/* Sorting and Filtering Column */}
//         <div className="flex gap-2">
//           {/* Sorting */}
//           {/* <div
//             className="relative inline-block text-left"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               type="button"
//               onClick={menuDropdown.toggleDropdown}
//               className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//             >
//               <I2 />
//             </button> */}
//              <div className="relative inline-block text-left"  onClick={(e) => e.stopPropagation()}>
//             <div>
//               <button
//                 type="button"
//                 onClick={menuDropdown.toggleDropdown}
//                 className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                 id="menu-button2"
//                 aria-expanded={menuDropdown.isDropdownOpen}
//                 aria-haspopup="true"
//               >
//                <I2></I2>
//               </button>
//             </div>
//             {/* {menuDropdown.isDropdownOpen && (
//               <div className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                 >
//                   Low to High
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
//                 >
//                   High to Low
//                 </a>
//               </div>
//             )} */}
//              {menuDropdown.isDropdownOpen &&
//              (<div
//               className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//               role="menu2"
//               aria-orientation="vertical"
//               aria-labelledby="menu-button2"
//               tabIndex="-1"
//             >
//               <div className="py-1" role="none">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
//                   role="menuitem"
//                   tabIndex="-1"
//                   id="menu-item-0"
//                 >
//                   Low to High
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
//                   role="menuitem"
//                   tabIndex="-1"
//                   id="menu-item-0"
//                 >
//                   High to Low
//                 </a>
//               </div>
//             </div>

//             )

//             }
//           </div>

//           {/* Filtering */}
//           <div
//             className="relative inline-block text-left"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* <button
//               type="button"
//               onClick={filterDropdown.toggleDropdown}
//               className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//             >
//               <I3 />
//             </button> */}

//             <div>
//               <button
//                 type="button"
//                 onClick={filterDropdown.toggleDropdown}
//                 className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                 id="filter-button-2"
//                 aria-expanded={filterDropdown.isDropdownOpen}
//                 aria-haspopup="true"
//               >
//                <I3></I3>
//               </button>
//             </div>

//             {filterDropdown.isDropdownOpen && (
//               <div
//                 className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//                 role="menu"
//                 aria-orientation="vertical"
//                 aria-labelledby="filter-button-2"
//                 tabIndex="-1"
//               >
//                 <div className="py-1" role="none">
//                   {expenseCategories.map((category, index) => (
//                     <label
//                       key={index}
//                       className="inline-flex items-center px-4 py-2 text-sm text-gray-700"
//                     >
//                       <input
//                         type="checkbox"
//                         className="form-checkbox h-4 w-4 rounded-md text-gray-600"
//                         checked={selectedCategories.includes(category)}
//                         onChange={() => toggleCategory(category)}
//                       />
//                       <span className="ml-2">{category}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Display Filtered Transactions */}
//       <div className="p-4 divide-y">
//         {filteredTransactions.map((tr) => (
//           <div
//             className="flex justify-between items-center py-2 relative group cursor-pointer"
//             key={tr.id}
//           >
//             <div>
//               <h3 className="text-base font-medium leading-7 text-gray-600">
//                 {tr.category}
//               </h3>
//               <p className="text-xs text-gray-600">
//                 {new Intl.DateTimeFormat("en-GB", {
//                   day: "numeric",
//                   month: "long",
//                   year: "numeric",
//                 }).format(new Date(tr.date))}
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
//                 BDT {Number(tr.amount)}
//               </p>
//               <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
//                 <button
//                   className="hover:text-teal-600"
//                   title="Edit Button"
//                   onClick={() => onEdit(tr)}
//                 >
//                   <I4 />
//                 </button>
//                 <button
//                   className="hover:text-red-600"
//                   title="Delete Button"
//                   onClick={() => onDelete(tr.id)}
//                 >
//                   <I5 />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Expense;
