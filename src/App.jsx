import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { TransactionTable } from './components/transaction-table'
import './App.css'
import { Summary } from './components/Summary'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { TransactionList } from './model/transaction-list.mjs'
import { useEffect } from 'react'
import { Transaction } from './model/transaction.mjs'




function App() {
  const [count, setCount] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const attributes = {
    name: {size: "6", name: "Titulo"},
    price: {size: "2", name: "Preço"},
    type: {size: "2", name: "Categoria"},
    date: {size: "2", name: "Data"}
  };

  //const transactionList = new TransactionList([new Transaction('a',1100,true,'aa', null), new Transaction('b', 500, false, 'bb', null)]);
  
  console.log('afterTransactionList')
  /* o console.log acima está sendo impresso quando eu termino de cadastrar 
    uma nova transação. Então acho que sempre que termino uma transaçao
    a varipavel transactionList da linha 23 é sempre redeclarada e então
    eu sempre perco a transação que cadastrei. talvez eu precise usar um estado
    e não simplesmente uma variável let ou const
  */
  
  

  const transactionList = new TransactionList([]);
  transactionList.addTransaction(new Transaction("Google", 1000, true, "Salário", new Date()));
  transactionList.addTransaction(new Transaction("Conta de Luz", 100, false, "Conta", new Date()));
  transactionList.addTransaction(new Transaction("Conta de Internet", 200, false, "Conta", new Date()));

  const [transactionListState, setTansactionList] = useState(transactionList);
  const [orderObject, setOrderObject] = useState({attribute: "default", order: true});
  
  useEffect(()=>{
    console.log('transactionList:', transactionList);
    console.log('transactionListState:', transactionListState);
  },[openModal])

  return(
    <>
      
      <body>
        <Header setOpenModal={setOpenModal} transactionListState={transactionListState} setTansactionList={setTansactionList}/>
        <Modal  openModal={openModal} setOpenModal={setOpenModal} transactionListState={transactionListState} setTansactionList={setTansactionList}/>
        
      </body>
    </>
    
  );
  
 
  return (
    <div className="container">
      <TransactionTable attributes={attributes} 
      transactionList={transactionListState} transactionListSetter={setTansactionList}
      orderObject={orderObject} orderObjectSetter={setOrderObject}></TransactionTable>
    </div>
  )
}

export default App
