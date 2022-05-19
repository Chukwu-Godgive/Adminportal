import React from 'react'
import { FcPositiveDynamic } from 'react-icons/fc'
import '../MiniProfitCard/MiniProfitCard.css';



function MiniProfitCard(props) {
    return (
        <React.Fragment>
            <div className='miniProfitCard'>
                <div className='iconContainer'>
                    <FcPositiveDynamic className='miniProfitCardIcon' />
                </div>
                <div className='miniProfitCardInfor'>
                    <p>{props.minititle}</p>
                    <p className='miniProfitCardInfor-p'>{props.minidescription}</p>
                    
                </div>
                <div className='miniProfitCardRate'>
                    <p>{props.miniprice}</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MiniProfitCard;