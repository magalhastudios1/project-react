import './modal.css';
import outcomeImage from '../../assets/outcome.svg'
import incomeImage from '../../assets/income.svg'
import close from '../../assets/close.svg'
import ReactModal from 'react-modal';
import { useState } from 'react';


export function Modal(){
    const [openModal, setOpenModal] = useState(true);
    const [paintGreenBtn, setPaintGreenBtn] = useState(false);
    const [paintRedBtn, setPaintRedBtn] = useState(false);

    function handleCloseModal(){
        setOpenModal(false);
    }

    function handleClickGreenBtn(){
        setPaintGreenBtn(true);
        setPaintRedBtn(false);
    }

    function handleClickRedBtn(){
        setPaintRedBtn(true);
        setPaintGreenBtn(false);
    }

    return(
        <>
            <ReactModal 
                id="newTransactionModal"
                isOpen={openModal}
                
            >
                <div id="newTransactionModalContainer">
                    <div className='modalHeader'>
                        <img 
                            src={close}
                            onClick={handleCloseModal}
                        ></img>
                    </div>
                    <div className='modalBody'>
                        <h2>Cadastrar Transação</h2>
                        <input placeholder='Nome'></input>
                        <input placeholder='Preço'></input>
                        <div className='transactionTypeContainer'>
                            <button 
                                className='btn' 
                                id='btnIncome'
                                style={{backgroundColor: paintGreenBtn?'rgba(0, 255, 0, 0.2)':'rgb(255, 255, 255)'}}
                                onClick={handleClickGreenBtn}
                            >
                                <img src={incomeImage}></img>
                                <span>Entrada</span>
                            </button>
                            <button 
                                className='btn' 
                                id='btnOutcome'
                                style={{backgroundColor: paintRedBtn?'rgba(255, 0, 0, 0.2)':'rgb(255, 255, 255)'}}
                                onClick={handleClickRedBtn}
                            >
                                <img src={outcomeImage}></img>
                                <span>Saída</span>
                            </button>
                        </div>    
                        <input className='' placeholder='Categoria'></input>
                        <button 
                            type='submit'  
                            className='btn' 
                            id='btnSubmit'
                            onClick={handleCloseModal}
                        >
                            Cadastrar
                        </button>
                    </div>
                </div>
            </ReactModal>
        </>
    )
}