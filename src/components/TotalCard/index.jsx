import './totalcard.css';
import totalImage from '../../assets/total.svg'

export function TotalCard(props){

    return(
        <>  
            <div className='totalcard'>
                <header className='top'>
                    <p className='title'>Total</p>
                    <img className='total_icon' src={totalImage} alt="Total"/>
                </header>
                <div className='bottom'>
                <strong className='bottom-text'>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(props.total)}
                </strong>
                <p>
                    Última entrada dia 10 de dezembro
                </p>
                </div>
            </div>
        </>
    );
}