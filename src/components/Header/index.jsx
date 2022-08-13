import { Summary } from '../Summary'
import './header.css'
import totalImage from '../../assets/total.svg'

export function Header({setOpenModal, transactionList}){
    return(
        <>
            <header className='headerPrincipal'>
                <div className='contentHeader'>
                    <div className='headerTop'>
                        <div className='headerTopLeft'>
                            <div className='headerLogo'>
                                <img className='total_icon' src={totalImage} alt="Total"/>
                            </div>
                            <strong className='headerTitle'>
                                Meu Dinheirinho
                            </strong>
                        </div>
                        <div className='headerTopRight'>
                            <button className='btn' data-toggle="modal" data-target="modal" onClick={()=>setOpenModal(true)}>Nova Transação</button>
                        </div>
                    </div>
                    <div className='headerBottom'>
                        <Summary transactionList={transactionList}/>
                    </div>
                </div>
            </header>
        </>
    )
}