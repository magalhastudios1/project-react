import './outcomecard.css'
import outcomeImage from '../../assets/outcome.svg'

export function OutcomeCard(){

    return(
        <>
            <div className='outcomecard'>
                <header className='top'>
                    <p className='title'>Saídas</p>
                    <img className='outcome_icon' src={outcomeImage} alt="Saídas"/>
                </header>
                <strong className='bottom'>
                    R$ 1.259,00
                </strong>
            </div>
        </>
    )
}