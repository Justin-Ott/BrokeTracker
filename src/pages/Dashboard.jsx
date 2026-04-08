import { useState, useEffect } from 'react'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseList from '../components/ExpenseList'
import BreakdownStats from '../components/BreakdownStats'
import { loadData, saveData } from '../utils/storage'
import '../styles/Dashboard.css'

function Dashboard() {
  const [balance, setBalance] = useState(0)
  const [monthlyIncome, setMonthlyIncome] = useState(0)
  const [monthlyExpenses, setMonthlyExpenses] = useState(0)
  const [expenses, setExpenses] = useState([])
  const [hasLoaded, setHasLoaded] = useState(false)

  // Load data from local storage on mount
  useEffect(() => {
    const data = loadData()
    if (data) {
      setBalance(data.balance)
      setMonthlyIncome(data.monthlyIncome)
      setMonthlyExpenses(data.monthlyExpenses)
      setExpenses(data.expenses)
    }
    setHasLoaded(true)
  }, [])

  // Save data to local storage whenever it changes (but only after initial load)
  useEffect(() => {
    if (hasLoaded) {
      saveData({ balance, monthlyIncome, monthlyExpenses, expenses })
    }
  }, [balance, monthlyIncome, monthlyExpenses, expenses, hasLoaded])

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }])
  }

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id))
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>BrokeTracker</h1>
        <p>Track your expenses and see how long until you go broke</p>
      </header>

      <div className="dashboard-content">
        <div className="left-section">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="right-section">
          <BreakdownStats 
            balance={balance}
            monthlyIncome={monthlyIncome}
            monthlyExpenses={monthlyExpenses}
            expenses={expenses}
            onUpdateBalance={setBalance}
            onUpdateIncome={setMonthlyIncome}
            onUpdateMonthlyExpenses={setMonthlyExpenses}
          />
          <ExpenseList 
            expenses={expenses}
            onDeleteExpense={handleDeleteExpense}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
