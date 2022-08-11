import './incomecard.css';
import incomeImage from '../../assets/income.svg'

export function IncomeCard(props){

    return(
        <>  
            <div className='incomecard'>
                <header className='top'>
                    <p className='title'>Entradas</p>
                    <img className='income_icon' src={incomeImage} alt="Entradas"/>
                </header>
                <strong className='bottom'>
                    
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(props.total)}
                </strong>
            </div>
        </>
    );
}