import './outcomecard.css'
import outcomeImage from '../../assets/outcome.svg'
import { getNameMonth } from '../../model/getNameMonth.js'

export function OutcomeCard(props){
    let day = props.transactionListState.getLastOutcome().getDate().getDate();
    let numberMonth = props.transactionListState.getLastOutcome().getDate().getMonth();
    let namePtMonth = getNameMonth(numberMonth);

    return(
        <>
            <div className='outcomecard'>
                <header className='top'>
                    <p className='title'>Saídas</p>
                    <img className='outcome_icon' src={outcomeImage} alt="Saídas"/>
                </header>
                <div className='bottom'>
                <strong className='bottom-text'>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(props.total)}
                </strong>
                <p>
                    Última saída dia {day} de {namePtMonth}
                </p>
                </div>
            </div>
        </>
    )
}