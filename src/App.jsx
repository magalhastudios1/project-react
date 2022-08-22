import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Main } from './components/main'
import { Modal } from './components/modal'
import { TransactionList } from './model/transaction-list.mjs'
import { useEffect } from 'react'
import { Transaction } from './model/transaction.mjs'
import { TableOrder } from './model/table-order.mjs'
import { TableState } from './model/table-state.mjs'




function App() {
  const [openModal, setOpenModal] = useState(false);

  const transactionList = new TransactionList([]);
  transactionList.addTransaction(new Transaction("Desenvolvimento Web", 12000, true, "Venda", new Date("2022-08-05")));
  transactionList.addTransaction(new Transaction("Conta de Luz", 100, false, "Conta", new Date("2022-08-07")));
  transactionList.addTransaction(new Transaction("Conta de Internet", 200, false, "Conta", new Date("2022-08-07")));
  transactionList.addTransaction(new Transaction("Gasolina", 200, false, "Transporte", new Date("2022-07-30")));
  transactionList.addTransaction(new Transaction("Aplicativos de Corrida", 150, false, "Transporte", new Date("2022-07-30")));
  transactionList.addTransaction(new Transaction("Carro", 15000, true, "Venda", new Date("2022-08-02")));

  const tableOrder = new TableOrder("default", true);

  const tableAttributes = {
    name: {size: "6", name: "Título"},
    price: {size: "2", name: "Preço"},
    type: {size: "2", name: "Categoria"},
    date: {size: "2", name: "Data"}
  };

  const [tableState, tableStateSetter] = useState(new TableState(transactionList, tableOrder, tableAttributes));

  /*console.log('transactionListState inicial:', transactionListState);
  useEffect(()=>{
    console.log('transactionList:', transactionList);
    console.log('transactionListState:', transactionListState);
  },[openModal])*/

  /*let aaa = (<><Modal openModal={openModal} setOpenModal={setOpenModal} transactionListState={transactionListState} setTansactionList={setTansactionList}/>
  <Header></Header></>);*/

  return(
      <>
        <Header setOpenModal={setOpenModal}></Header>
        <Main tableState={tableState} tableStateSetter={tableStateSetter}></Main>
        <Modal openModal={openModal} setOpenModal={setOpenModal} tableState={tableState} tableStateSetter={tableStateSetter}></Modal>
      </>
  );
  
}

export default App
