# [BrokeTracker](https://justin-ott.github.io/BrokeTracker/)

A simple React web app to track your monthly expenses and see how long until you go broke.

## Features

- **Add Expenses**: Track expenses by category with flexible frequency settings (daily, weekly, monthly, one-time)
- **Current Balance**: Input your current balance to calculate months remaining
- **Monthly Expenses**: Set your average monthly expenses
- **Breakdown**: See how many months until you run out of money
- **Local Storage**: All data is saved automatically to your browser's local storage
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
src/
├── components/           # React components
│   ├── ExpenseForm.jsx      # Form to add new expenses
│   ├── ExpenseList.jsx      # List of all expenses
│   ├── ExpenseItem.jsx      # Individual expense display
│   └── BreakdownStats.jsx   # Financial overview and months left
├── pages/               # Page components
│   └── Dashboard.jsx       # Main dashboard page
├── styles/              # CSS stylesheets
│   ├── index.css           # Global styles
│   ├── App.css
│   ├── Dashboard.css
│   ├── ExpenseForm.css
│   ├── ExpenseList.css
│   ├── ExpenseItem.css
│   └── BreakdownStats.css
├── utils/               # Utility functions
│   └── storage.js          # Local storage management
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production-ready build.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradient and modern effects
- **LocalStorage API** - Data persistence

## How to Use

1. **Add Expenses**: Fill out the expense form with:
   - Category (Rent, Food, Transportation, etc.)
   - Amount
   - Frequency (Daily, Weekly, Monthly, One-time)

2. **Set Your Balance**: Enter your current balance in the "Financial Overview" section

3. **Track Monthly Expenses**: Update your total monthly expenses

4. **View Results**: See how many months you have left based on your balance and spending

5. **Delete Expenses**: Click the delete button to remove an expense from your list

## Data Persistence

All data is automatically saved to your browser's local storage. Your expenses and balance will persist even after closing the browser.
