import './incomecard.css';
import incomeImage from '../../assets/income.svg'

export function IncomeCard(){

    return(
        <>  
            <div className='incomecard'>
                <header className='top'>
                    <p className='title'>Entradas</p>
                    <img className='income_icon' src={incomeImage} alt="Entradas"/>
                </header>
                <strong className='bottom'>
                    R$ 17.400,00
                </strong>
            </div>
        </>
    );
}