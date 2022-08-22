import totalImage from '../../assets/total.svg'
import './header.css'

function Header({setOpenModal}){
    return (
        <header>
            <div className='container d-flex justify-content-between align-items-center' style={{top: "40px"}}>
                <div className='d-flex align-items-center'>
                    <div className='header-logo'>
                        <img className='total-icon' src={totalImage} alt="Total"/>
                    </div>
                    <strong className='header-title'>
                        Meu Dinheirinho
                    </strong>
                </div>
                <button className='btn header-button' data-toggle="modal" data-target="modal" onClick={()=>setOpenModal(true)}>Nova Transação</button>
            </div>
        </header>
    )
}

export {Header};