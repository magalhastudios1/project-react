import './incomecard.css';
import incomeImage from '../../assets/income.svg'
import { getNameMonth } from '../../model/getNameMonth.js'

export function IncomeCard(props){
    let day = props.transactionListState.getLastIncome().getDate().getDate();
    let numberMonth = props.transactionListState.getLastIncome().getDate().getMonth();
    let namePtMonth = getNameMonth(numberMonth);
    
    return(
        <>  
            <div className='incomecard'>
                <header className='top'>
                    <p className='title'>Entradas</p>
                    <img className='income_icon' src={incomeImage} alt="Entradas"/>
                </header>
                <div className='bottom'>

                
                <strong className='bottom-text'>
                    
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(props.total)}
                </strong>
                <p>
                    Última entrada dia {day} de {namePtMonth}
                </p>
                </div>
            </div>
        </>
    );
}