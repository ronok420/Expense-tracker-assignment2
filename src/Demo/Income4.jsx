const Income = ({ transactions, onEdit, onDelete }) => {
    const [filter, setFilter] = useState("");
    const filteredTransactions = transactions.filter(tx =>
      filter ? tx.category === filter : true
    );
  
    const handleSort = (order) => {
      // Sorting logic
    };
  
    return (
      <div>
        {/* Sorting and Filtering UI */}
        <div>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            {/* Populate options dynamically based on categories */}
          </select>
          {/* Sort buttons */}
          <button onClick={() => handleSort("asc")}>Low to High</button>
          <button onClick={() => handleSort("desc")}>High to Low</button>
        </div>
  
        {/* Transaction List */}
        {filteredTransactions.map(tx => (
          <div key={tx.id} onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
            <h3>{tx.category}</h3>
            <p>{tx.date}</p>
            <p>{tx.amount}</p>
            {showOptions && (
              <div>
                <button onClick={() => onEdit(tx)}>Edit</button>
                <button onClick={() => onDelete(tx.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  // Implement similar logic for the Expense component
  