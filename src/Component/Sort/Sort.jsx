// Sort.jsx
import React from "react";

const Sort = ({ sortOrder, setSortOrder ,setIsSorted}) => {
  const handleSort = (order) => {
    setSortOrder(order);
    setIsSorted(true);
  };

  return (


    <div    className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
              onClick={(e) => {
                e.preventDefault();
                handleSort("asc");
              }}
                  >
                    Low to High
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
              onClick={(e) => {
                e.preventDefault();
                handleSort("desc");
              }}
                  >
                    High to Low
                  </a>
                </div>
              </div>


    // <div className="py-1" role="none">
    //   <a
    //     href="#"
    //     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
    //     role="menuitem"
    //     tabIndex="-1"
    //     onClick={(e) => {
    //       e.preventDefault();
    //       handleSort("asc");
    //     }}
    //   >
    //     Low to High
    //   </a>
    //   <a
    //     href="#"
    //     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
    //     role="menuitem"
    //     tabIndex="-1"
    //     onClick={(e) => {
    //       e.preventDefault();
    //       handleSort("desc");
    //     }}
    //   >
    //     High to Low
    //   </a>
    // </div>
  );
};

export default Sort;
