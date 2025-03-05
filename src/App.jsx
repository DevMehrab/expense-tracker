import { useState, createContext } from 'react'
import './App.css'
import { Balance } from "./components/Balance.jsx";
import { FinanceCard } from './components/FinanceCard.jsx';
import { Form } from './components/Form.jsx';
import { TransactionHistory } from './components/TransactionHistory.jsx';

export const Appcontext = createContext()

function App() {
  const [netBalance, setNetBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [transactions, setTransactions] = useState([])



  const update = {
    income: setIncome,
    expense: setExpense,
    netBalance: setNetBalance,
    transactions: setTransactions
  }

  const currentValue = {
    income: income,
    expense: expense,
    netBalance: netBalance,
    transactions: transactions
  }
  return (
    <>
      <Appcontext.Provider value={{ currentValue, update }}>
        <div className="container">
          <h3>EXPENSE TRACKER</h3>
          <main>
            <Balance totalBalance={netBalance}></Balance>
            <div className="display-summury">
              <FinanceCard className="finance-card-income" title='Income' amount={income}></FinanceCard>
              <FinanceCard className="finance-card-expense" title='Expense' amount={expense}></FinanceCard>
            </div>
            <Form update={update} currentValue={currentValue}></Form>
          </main>
          <TransactionHistory currentValue={currentValue}></TransactionHistory>
        </div>
      </Appcontext.Provider>

    </>
  )
}

export default App
