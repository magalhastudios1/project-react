import './totalcard.css';
import totalImage from '../../assets/total.svg'
import { getNameMonth } from '../../model/getNameMonth.js'


export function TotalCard(props){
    let sortedTransactionList = props.transactionListState.orderBy('date', true);
    //console.log('sorted:',sortedTransactionList)
    let initialDay = sortedTransactionList[0].getDate().getDate();
    //console.log('initial day:', initialDay)
    let numberMonth = sortedTransactionList[0].getDate().getMonth();
    let inititialPtMonth = getNameMonth(numberMonth);
    let initialDateFormated = ((sortedTransactionList[0].getDate().getDate() )) + "/" + ((sortedTransactionList[0].getDate().getMonth() + 1)) + "/" + sortedTransactionList[0].getDate().getFullYear()
    //console.log('initial month:', inititialPtMonth)

    let finalDay = sortedTransactionList[sortedTransactionList.length-1].getDate().getDate();
    //console.log('final day:', finalDay)
    let finalDateFormated = ((sortedTransactionList[sortedTransactionList.length-1].getDate().getDate() )) + "/" + ((sortedTransactionList[sortedTransactionList.length-1].getDate().getMonth() + 1)) + "/" + sortedTransactionList[sortedTransactionList.length-1].getDate().getFullYear()

    
    numberMonth = sortedTransactionList[sortedTransactionList.length-1].getDate().getMonth();
    let finalPtMonth = getNameMonth(numberMonth);
    console.log('final month:', finalPtMonth)

    let phrase;
    if(inititialPtMonth == finalPtMonth){
        phrase = `${initialDay} à ${finalDay} de ${finalPtMonth}`
    }else{
        phrase = `${initialDay} de ${inititialPtMonth} à ${finalDay} de ${finalPtMonth}`;
    }
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
                    {phrase}
                </p>
                </div>
            </div>
        </>
    );
}