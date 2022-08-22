import './totalcard.css';
import totalImage from '../../assets/total.svg'
import { getNameMonth } from '../../model/getNameMonth.js'


function SummaryTotalCard({total, transactionList}){
    let sortedTransactionList = transactionList.orderBy('date', true);

    let initialDay = sortedTransactionList[0].getDate().getDate();
    let numberMonth = sortedTransactionList[0].getDate().getMonth();

    let inititialPtMonth = getNameMonth(numberMonth);
    let initialDateFormated = ((sortedTransactionList[0].getDate().getDate() )) + "/" + ((sortedTransactionList[0].getDate().getMonth() + 1)) + "/" + sortedTransactionList[0].getDate().getFullYear();

    let finalDay = sortedTransactionList[sortedTransactionList.length-1].getDate().getDate();
    let finalDateFormated = ((sortedTransactionList[sortedTransactionList.length-1].getDate().getDate() )) + "/" + ((sortedTransactionList[sortedTransactionList.length-1].getDate().getMonth() + 1)) + "/" + sortedTransactionList[sortedTransactionList.length-1].getDate().getFullYear()

    numberMonth = sortedTransactionList[sortedTransactionList.length-1].getDate().getMonth();
    let finalPtMonth = getNameMonth(numberMonth);

    let phrase;
    if(inititialPtMonth == finalPtMonth){
        phrase = `${initialDay} à ${finalDay} de ${finalPtMonth}`
    }else{
        phrase = `${initialDay} de ${inititialPtMonth} à ${finalDay} de ${finalPtMonth}`;
    }

    return( 
        <div className='totalcard'>
            <div className='top'>
                <p className='title'>Total</p>
                <img className='total_icon' src={totalImage} alt="Total"/>
            </div>
            <div className='bottom'>
                <strong className='bottom-text'>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(total)}
                </strong>
                <p>
                    {phrase}
                </p>
            </div>
        </div>
    );
}

export {SummaryTotalCard};