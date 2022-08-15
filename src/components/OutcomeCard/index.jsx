import './outcomecard.css'
import outcomeImage from '../../assets/outcome.svg'

export function OutcomeCard(props){

    return(
        <>
            <div className='outcomecard'>
                <header className='top'>
                    <p className='title'>Saídas</p>
                    <img className='outcome_icon' src={outcomeImage} alt="Saídas"/>
                </header>
                <strong className='bottom'>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(props.total)}
                </strong>
            </div>
        </>
    )
}