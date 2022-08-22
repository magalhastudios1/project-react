import './incomecard.css';
import incomeImage from '../../assets/income.svg'
import { getNameMonth } from '../../model/getNameMonth.js'

function SummaryIncomeCard({totalIncome, lastIncome}){
    let day = lastIncome.getDate();
    let numberMonth = lastIncome.getMonth();
    let namePtMonth = getNameMonth(numberMonth);
    
    return(
        <div className='incomecard'>
            <div className='top'>
                <p className='title'>Entradas</p>
                <img className='income_icon' src={incomeImage} alt="Entradas"/>
            </div>
            <div className='bottom'>
                <strong className='bottom-text'>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalIncome)}
                </strong>
                <p>
                    Última entrada dia {day} de {namePtMonth}
                </p>
            </div>
        </div>
    );
}

export {SummaryIncomeCard};