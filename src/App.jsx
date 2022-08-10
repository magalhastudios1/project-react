import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TransactionTable } from './components/transaction-table'
import './App.css'
import { Summary } from './components/Summary'

function App() {
  const attributes = {
    name: {size: "6", name: "Titulo"},
    price: {size: "2", name: "Preço"},
    type: {size: "2", name: "Categoria"},
    date: {size: "2", name: "Data"}
  };

  return (
    <div className="container">{TransactionTable(attributes)}</div>
  )
}

export default App
