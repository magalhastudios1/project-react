import './totalcard.css';
import totalImage from '../../assets/total.svg'

export function TotalCard(){

    return(
        <>  
            <div className='totalcard'>
                <header className='top'>
                    <p className='title'>Total</p>
                    <img className='total_icon' src={totalImage} alt="Total"/>
                </header>
                <strong className='bottom'>
                    R$ 16.141,00
                </strong>
            </div>
        </>
    );
}