import React from 'react';
import { TransactionList } from '../../model/transaction-list.mjs';
import { IncomeCard } from '../IncomeCard';
import { OutcomeCard } from '../OutcomeCard';
import { TotalCard } from '../TotalCard';
import './summary.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';



//<IncomeCard total={17400}/>
//<OutcomeCard total={1259}/>
//<TotalCard total={16141}/>

export function Summary(props){
    const [swiperSizeMobile, setSwiperSizeMobile] = useState(false);
    
    window.addEventListener('resize', function(event){
        if(window.innerWidth <= 767){
            if(!swiperSizeMobile){
                setSwiperSizeMobile(true);
            }
        }else{
            if(swiperSizeMobile){
                setSwiperSizeMobile(false);
            }
        }
    })

    return(
        <>  
            <div 
                className='summary' 
                /*style={{width: swiperSizeMobile?'95%':'100%'}}*/
                >
                <Swiper
                    slidesPerView={swiperSizeMobile?1:3}
                    spaceBetween={swiperSizeMobile?'-5%':25}
                >
                    <SwiperSlide>
                        <IncomeCard total={props.transactionListState.getTotalIncome()} transactionListState={props.transactionListState}/>
                    </SwiperSlide>
                    
                    <SwiperSlide style={{marginLeft: ''}}>
                        <OutcomeCard total={props.transactionListState.getTotalOutcome()} transactionListState={props.transactionListState}/>
                    </SwiperSlide>
                    
                    <SwiperSlide style={{marginLeft: ''}}>
                        <TotalCard total={props.transactionListState.getTotalIncome() - props.transactionListState.getTotalOutcome()} transactionListState={props.transactionListState}/>
                    </SwiperSlide>
                </Swiper>
            </div>
           

        </>
    );
}