import ExpenseItem from './ExpenseItem'
import '../styles/ExpenseList.css'

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Expenses ({expenses.length})</h2>
      {expenses.length === 0 ? (
        <p className="empty-message">No expenses added yet</p>
      ) : (
        <ul>
          {expenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDelete={onDeleteExpense}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExpenseList
