import './outcomecard.css'
import outcomeImage from '../../assets/outcome.svg'
import { getNameMonth } from '../../model/getNameMonth.js'

function SummaryOutcomeCard({totalOutcome, lastOutcome}){
    let day = lastOutcome.getDate();
    let numberMonth = lastOutcome.getMonth();
    let namePtMonth = getNameMonth(numberMonth);

    return(
        <div className='outcomecard'>
            <div className='top'>
                <p className='title'>Saídas</p>
                <img className='outcome_icon' src={outcomeImage} alt="Saídas"/>
            </div>
            <div className='bottom'>
                <strong className='bottom-text'>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalOutcome)}
                </strong>
                <p>
                    Última saída dia {day} de {namePtMonth}
                </p>
            </div>
        </div>
    )
}

export {SummaryOutcomeCard};