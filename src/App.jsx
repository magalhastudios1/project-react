import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TransactionTable } from './components/transaction-table'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const attributes = {
    name: {size: "12", name: "Titulo"}
  };

  return (
    TransactionTable(attributes)
  )
}

export default App
