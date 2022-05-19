import React from 'react'
import { FcPositiveDynamic } from 'react-icons/fc'
import '../ProfitCard/ProfitCard.css';



function ProfitCard(props) {
    return (
        <React.Fragment>
            <div className='profitCard'>
                <div className='iconContainer'>
                    <FcPositiveDynamic className='profitCardIcon'/>
                </div>
                <div className='profitCardInfor'>
                    <p>Invoice Sales</p>
                    <p>$2,400 <span className='profitCradRate'>+1.2%</span></p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProfitCard;