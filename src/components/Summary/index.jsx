import React from 'react';
import { TransactionList } from '../../model/transaction-list.mjs';
import { IncomeCard } from '../IncomeCard';
import { OutcomeCard } from '../OutcomeCard';
import { TotalCard } from '../TotalCard';
import './summary.css';



//<IncomeCard total={17400}/>
//<OutcomeCard total={1259}/>
//<TotalCard total={16141}/>

export function Summary(props){
    
    return(
        <>  
            <div className='summary'>

                <IncomeCard total={props.transactionList.getTotalIncome()}/>
                <OutcomeCard total={props.transactionList.getTotalOutcome()}/>
                <TotalCard total={props.transactionList.getTotalIncome() - props.transactionList.getTotalOutcome()}/>
            </div>
           

        </>
    );
}