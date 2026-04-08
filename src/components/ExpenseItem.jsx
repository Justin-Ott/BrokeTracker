import '../styles/ExpenseItem.css'

function ExpenseItem({ expense, onDelete }) {
  return (
    <li className="expense-item">
      <div className="expense-info">
        <span className="category">{expense.category}</span>
        <span className="frequency">{expense.frequency}</span>
      </div>
      <div className="expense-amount">${expense.amount.toFixed(2)}</div>
      <button
        className="btn-delete"
        onClick={() => onDelete(expense.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default ExpenseItem
