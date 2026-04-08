import { useState } from 'react'
import '../styles/BreakdownStats.css'

function BreakdownStats({ balance, monthlyIncome, monthlyExpenses, expenses, onUpdateBalance, onUpdateIncome, onUpdateMonthlyExpenses }) {
  // Calculate total monthly expenses from the expenses array that users added
  const totalMonthlyExpenses = expenses.reduce((sum, expense) => {
    if (expense.frequency === 'monthly') {
      return sum + expense.amount
    } else if (expense.frequency === 'bi-weekly') {
      return sum + (expense.amount * 2) // 2 bi-weekly payments per month
    } else if (expense.frequency === 'weekly') {
      return sum + (expense.amount * 4.33) // ~4.33 weeks per month
    } else if (expense.frequency === 'daily') {
      return sum + (expense.amount * 30) // ~30 days per month
    }
    return sum
  }, 0)

  // Calculate monthly net: income - expenses
  const monthlyNet = parseFloat(monthlyIncome || 0) - totalMonthlyExpenses

  const calculateMonthsLeft = () => {
    const balanceNum = parseFloat(balance || 0)
    if (monthlyNet === 0) return '∞ (Breaking Even)'
    if (monthlyNet < 0) {
      const months = balanceNum / Math.abs(monthlyNet)
      return months.toFixed(1)
    }
    const months = balanceNum / monthlyNet
    return months.toFixed(1)
  }

  const handleBalanceChange = (newBalance) => {
    onUpdateBalance(parseFloat(newBalance) || 0)
  }

  const handleIncomeChange = (newIncome) => {
    onUpdateIncome(parseFloat(newIncome) || 0)
  }

  return (
    <div className="breakdown-stats">
      <h2>Financial Overview</h2>
      
      <div className="stat-input">
        <label htmlFor="balance">Current Balance</label>
        <div className="input-wrapper">
          <span className="currency">$</span>
          <input
            id="balance"
            type="number"
            value={balance === 0 ? '' : balance}
            onChange={(e) => handleBalanceChange(e.target.value)}
            placeholder="0.00"
            step="0.01"
          />
        </div>
      </div>

      <div className="stat-input">
        <label htmlFor="income">Monthly Income (You Earn)</label>
        <div className="input-wrapper">
          <span className="currency">$</span>
          <input
            id="income"
            type="number"
            value={monthlyIncome === 0 ? '' : monthlyIncome}
            onChange={(e) => handleIncomeChange(e.target.value)}
            placeholder="0.00"
            step="0.01"
          />
        </div>
      </div>

      <div className="stat-display-field">
        <label>Monthly Expenses (Auto-calculated from items)</label>
        <div className="display-wrapper">
          <span className="currency">$</span>
          <span className="display-value">{totalMonthlyExpenses.toFixed(2)}</span>
        </div>
      </div>

      <div className="stat-display-field">
        <label>Monthly Net (Income - Expenses)</label>
        <div className="display-wrapper">
          <span className="currency">$</span>
          <span className={`display-value ${monthlyNet < 0 ? 'negative' : 'positive'}`}>
            {monthlyNet.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="stat-display">
        <div className="stat-box">
          <label>Months Until Broke</label>
          <h3>{calculateMonthsLeft()}</h3>
        </div>
      </div>

      {parseFloat(balance || 0) < 0 && <p className="warning">⚠️ You're already broke!</p>}
      {monthlyNet < 0 && <p className="warning">⚠️ Your expenses exceed your income!</p>}
      {parseFloat(balance || 0) > 0 && monthlyNet > 0 && parseFloat(balance || 0) < monthlyNet && (
        <p className="warning">⚠️ Less than a month left!</p>
      )}
    </div>
  )
}

export default BreakdownStats
