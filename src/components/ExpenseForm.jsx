import { useState } from 'react'
import '../styles/ExpenseForm.css'

function ExpenseForm({ onAddExpense }) {
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [frequency, setFrequency] = useState('monthly')

  const categories = ['Rent', 'Food', 'Transportation', 'Utilities', 'Entertainment', 'Other']

  const handleSubmit = (e) => {
    e.preventDefault()
    if (category && amount) {
      onAddExpense({
        category,
        amount: parseFloat(amount),
        frequency
      })
      setCategory('')
      setAmount('')
      setFrequency('monthly')
    }
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
        />
      </div>

      <div className="form-group">
        <label htmlFor="frequency">Frequency</label>
        <select
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
          <option value="bi-weekly">Bi-weekly</option>
          <option value="weekly">Weekly</option>
          <option value="daily">Daily</option>
          <option value="one-time">One-time</option>
        </select>
      </div>

      <button type="submit" className="btn-primary">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
