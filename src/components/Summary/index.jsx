import React from 'react';
import { TransactionList } from '../../model/transaction-list.mjs';
import { IncomeCard } from '../IncomeCard';
import { OutcomeCard } from '../OutcomeCard';
import { TotalCard } from '../TotalCard';
import './summary.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';



//<IncomeCard total={17400}/>
//<OutcomeCard total={1259}/>
//<TotalCard total={16141}/>

export function Summary(props){
    
    return(
        <>  
            <div className='summary'>
                <Swiper>
                    <SwiperSlide>
                        <IncomeCard total={props.transactionListState.getTotalIncome()}/>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <OutcomeCard total={props.transactionListState.getTotalOutcome()}/>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <TotalCard total={props.transactionListState.getTotalIncome() - props.transactionListState.getTotalOutcome()}/>
                    </SwiperSlide>
                </Swiper>
            </div>
           

        </>
    );
}