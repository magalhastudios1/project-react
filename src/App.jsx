import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TransactionTable } from './components/transaction-table'
import './App.css'
import { Summary } from './components/Summary'
import { Header } from './components/Header'

import { Transaction } from './model/transaction.mjs'
import { TransactionList } from './model/transaction-list.mjs'

function App() {
  const attributes = {
    name: {size: "6", name: "Titulo"},
    price: {size: "2", name: "Preço"},
    type: {size: "2", name: "Categoria"},
    date: {size: "2", name: "Data"}
  };

  const transactionList = new TransactionList([]);
  transactionList.addTransaction(new Transaction("Google", 1000, true, "Salário", new Date()));
  transactionList.addTransaction(new Transaction("Conta de Luz", 100, false, "Conta", new Date()));
  transactionList.addTransaction(new Transaction("Conta de Internet", 200, false, "Conta", new Date()));

  const [transactionListState, setTansactionList] = useState(transactionList);
  const [orderObject, setOrderObject] = useState({attribute: "default", order: true});

  return (
    <div className="container">
      <TransactionTable attributes={attributes} 
      transactionList={transactionListState} transactionListSetter={setTansactionList}
      orderObject={orderObject} orderObjectSetter={setOrderObject}></TransactionTable>
    </div>
  )
}

export default App
