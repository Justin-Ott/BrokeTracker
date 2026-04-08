const STORAGE_KEY = 'broketracker_data'

export const saveData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Failed to save data to local storage:', error)
  }
}

export const loadData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) {
      const parsed = JSON.parse(data)
      return {
        balance: parsed.balance || 0,
        monthlyIncome: parsed.monthlyIncome || 0,
        monthlyExpenses: parsed.monthlyExpenses || 0,
        expenses: parsed.expenses || []
      }
    }
    return null
  } catch (error) {
    console.error('Failed to load data from local storage:', error)
    return null
  }
}

export const clearData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear data from local storage:', error)
  }
}
