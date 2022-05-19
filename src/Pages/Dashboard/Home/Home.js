import React from 'react'
import '../Home/Home.css'
// import '../../../Components/MiniProfitCard/MiniProfitCard.css'
import ProfitCard from '../../../Components/ProfitCard/ProfitCard';
import RevenueFlowCard from '../../../Components/RevenueFlowCard/RevenueFlowCard';
import MiniProfitCard from '../../../Components/MiniProfitCard/MiniProfitCard';

import OptimalExpense from '../../../Images/optimalexpense.jpg'

function Home() {
    return (
        
        <div className='homeContainer'>
            <div>
                <h1>Dashboard</h1>
                <p>Users Name here</p>
            </div>

            <div className='section2'>
                <div className='passiveCard passiveCard-1 grid-1'>
                    <div className='passiveCardInfor'>
                        <h3>Total Expenses</h3>
                    </div>
                    {/* Other Components goes here */}    
                    <img src={OptimalExpense} alt='' />
                    <MiniProfitCard 
                        miniicon ='its dem good'
                        minititle='Inventory Cost'
                        minidescription='It explains the ins and outs.'
                        miniprice='$5,400'
                    />
                </div>

                <div>
                    <div className='passiveCard passiveCard-2 grid-2'>
                        <div className='passiveCardInfor'>
                            <h3>Inventory Cost</h3>
                        </div>
                        {/* Other Components goes here */}    

                        <MiniProfitCard 
                        minititle='Laptop'
                        minidescription='It explains the ins and outs.'
                        miniprice='$3,500'
                        />
                    </div>

                    <div className='passiveCard passiveCard-2 grid-3'>
                        <div className='passiveCardInfor'>
                            <h3>Advertising Cost</h3>
                        </div>
                        {/* Other Components goes here */}    

                        
                        <RevenueFlowCard />
                    </div>
                </div>


                <div className='activeCard activeCard-1'>
                    <div className='activeCardInfor'>
                        <div className='activeCardTitle'>
                            <h3>Hot {} Products</h3>
                        </div>
                        <div>
                            <select class='duration'>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Yearly</option>
                                <option>Daily</option>
                            </select>
                        </div>
                    </div>
                    {/* Other Components goes here */}


                    <div className='totalProfitFlex'>
                        <div>
                            <ProfitCard />
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
export default Home;