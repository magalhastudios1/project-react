import React from 'react';
import { SummaryIncomeCard } from '../summary-income-card';
import { SummaryOutcomeCard } from '../summary-outcome-card';
import { SummaryTotalCard } from '../summary-total-card';
import './summary.css';

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

function Summary({tableState, tableStateSetter}){
    const [swiperSizeMobile, setSwiperSizeMobile] = useState(false);
    
    if(window.innerWidth <= 767){
        if(!swiperSizeMobile){
            setSwiperSizeMobile(true);
        }
    }else{
        if(swiperSizeMobile){
            setSwiperSizeMobile(false);
        }
    }

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

    const transactionList = tableState.getTransactionList();

    const totalIncome = transactionList.getTotalIncome();
    const totalOutcome = transactionList.getTotalOutcome();

    const total = totalIncome - totalOutcome;

    const lastIncome = transactionList.getLastIncome();
    const lastOutcome = transactionList.getLastOutcome();

    return(
        <div className='summary mb-5'>
            <Swiper slidesPerView={swiperSizeMobile?1:3} spaceBetween={swiperSizeMobile?'-5%':25}>
                <SwiperSlide>
                    <SummaryIncomeCard totalIncome={totalIncome} lastIncome={lastIncome}></SummaryIncomeCard>
                </SwiperSlide>
                <SwiperSlide>
                    <SummaryOutcomeCard totalOutcome={totalOutcome} lastOutcome={lastOutcome}/>
                </SwiperSlide>
                <SwiperSlide>
                    <SummaryTotalCard total={total} transactionList={transactionList}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export {Summary};