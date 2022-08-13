import './modal.css';
import outcomeImage from '../../assets/outcome.svg'
import incomeImage from '../../assets/income.svg'
import close from '../../assets/close.svg'
import ReactModal from 'react-modal';
import { useState } from 'react';
import { Transaction } from '../../model/transaction.mjs';


export function Modal({openModal, setOpenModal, transactionList}){
    //const [openModal, setOpenModal] = useState(true);
    const [paintGreenBtn, setPaintGreenBtn] = useState(false);
    const [paintRedBtn, setPaintRedBtn] = useState(false);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState(''); 
    const [isIncome, setIsIncome] = useState(true);// true: income, false: outcome 

    function handleCloseModal(){
        setOpenModal(false);
    }

    function handleClickGreenBtn(){
        setPaintGreenBtn(true);
        setIsIncome(true);
        setPaintRedBtn(false);
    }

    function handleClickRedBtn(){
        setPaintRedBtn(true);
        setIsIncome(false);
        setPaintGreenBtn(false);
    }

    async function handleCreateNewTransaction(event){
        event.preventDefault();
        console.log("testando1: ",transactionList);
        let newTransaction = new Transaction(title, amount,isIncome, category, null );
        transactionList.addTransaction(newTransaction);
        console.log("testando2: ",transactionList);
        handleCloseModal();
    }

    return(
        <>
            <ReactModal 
                id="newTransactionModal"
                isOpen={openModal}
                className="react-modal-content"
                overlayClassName="react-modal-overlay"
                ariaHideApp={false}
            >
                <div id="newTransactionModalContainer">
                    <div className='modalHeader'>
                        <img 
                            src={close}
                            onClick={handleCloseModal}
                        ></img>
                    </div>
                    <form 
                        className='modalBody'
                        onSubmit={handleCreateNewTransaction}
                    >
                        <h2>Cadastrar Transação</h2>
                        <input 
                            placeholder='Nome'
                            onChange={title => setTitle(title.target.value)}
                        ></input>
                        <input 
                            placeholder='Preço'
                            onChange={amount => setAmount(amount.target.value)}
                        ></input>
                        <div className='transactionTypeContainer'>
                            <button 
                                className='btn' 
                                id='btnIncome'
                                type='button'
                                style={{backgroundColor: paintGreenBtn?'rgba(0, 255, 0, 0.2)':'rgb(255, 255, 255)'}}
                                onClick={handleClickGreenBtn}
                            >
                                <img src={incomeImage}></img>
                                <span>Entrada</span>
                            </button>
                            <button 
                                className='btn' 
                                id='btnOutcome'
                                type='button'
                                style={{backgroundColor: paintRedBtn?'rgba(255, 0, 0, 0.2)':'rgb(255, 255, 255)'}}
                                onClick={handleClickRedBtn}
                            >
                                <img src={outcomeImage}></img>
                                <span>Saída</span>
                            </button>
                        </div>    
                        <input 
                            placeholder='Categoria'
                            onChange={category => setCategory(category.target.value)}
                        ></input>
                        <button 
                            type='submit'  
                            className='btn' 
                            id='btnSubmit'
                        >
                            Cadastrar
                        </button>
                    </form>
                </div>
            </ReactModal>
        </>
    )
}