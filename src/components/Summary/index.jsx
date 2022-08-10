import { IncomeCard } from '../IncomeCard';
import { OutcomeCard } from '../OutcomeCard';
import { TotalCard } from '../TotalCard';
import './summary.css';

export function Summary(transactionList){

    return(
        <>  
            <div className='summary'>
                <IncomeCard />
                
                <OutcomeCard/>
                
                <TotalCard/>
            </div>
           

        </>
    );
}