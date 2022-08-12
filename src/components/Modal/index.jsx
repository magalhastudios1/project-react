import './modal.css';
import outcomeImage from '../../assets/outcome.svg'
import incomeImage from '../../assets/income.svg'
import ReactModal from 'react-modal';
import { useState } from 'react';


export function Modal(){
    const [openModal, setOpenModal] = useState(true);
    return(
        <>
            <ReactModal 
                className="newTransactionModal"
                isOpen={openModal}
            >
                <div className='modalHeader'>

                </div>
                <div className='modalBody'>
                    <h2>Cadastrar Transação</h2>
                    <input placeholder='Nome'></input>
                    <input placeholder='Preço'></input>
                    <div className='transactionTypeContainer'>
                        <button className='btn' id='btnIncome'>
                            <img src={incomeImage}></img>
                            <span>Entrada</span>
                        </button>
                        <button className='btn' id='btnOutcome'>
                            <img src={outcomeImage}></img>
                            <span>Saída</span>
                        </button>
                    </div>    
                    <input className='' placeholder='Categoria'></input>
                    <button type='submit'  className='btn' id='btnSubmit'>Cadastrar</button>
                </div>
            </ReactModal>
        </>
    )
}