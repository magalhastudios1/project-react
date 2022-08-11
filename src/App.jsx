import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TransactionTable } from './components/transaction-table'
import './App.css'
import { Summary } from './components/Summary'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0);

  const attributes = {
    name: {size: "6", name: "Titulo"},
    price: {size: "2", name: "Preço"},
    type: {size: "2", name: "Categoria"},
    date: {size: "2", name: "Data"}
  };

  return(
    <>
      
      <body>
        <Header transactionList={[]}/>
      </body>
    </>
    
  );
  

  return (
    <div className="container">{TransactionTable(attributes)}</div>
  )
}

export default App
