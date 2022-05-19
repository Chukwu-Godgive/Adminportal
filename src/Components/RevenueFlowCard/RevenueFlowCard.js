import React from 'react'
import '../RevenueFlowCard/RevenueFlowCard.css';



function RevenueFlowCard() {
    return (
        <React.Fragment>
            <div className='revenueFlowCard'>
                <div className='bars'>
                    <p className='b1'>+95%</p>
                    <p className='b2'>+55%</p>
                    <p className='b3'>+80%</p>
                    <p className='b4'>-49%</p>
                    <p className='b5'>+50%</p>
                    <p className='b6'>+91%</p>
                    <p className='b7'>+73%</p>
                </div>
                <div className='weeks'>
                    <p className='w1'>Sun</p>
                    <p className='w2'>Mon</p>
                    <p className='w3'>Tue</p>
                    <p className='w4'>Wed</p>
                    <p className='w5'>Thur</p>
                    <p className='w6'>Fri</p>
                    <p className='w7'>Sat</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default RevenueFlowCard;