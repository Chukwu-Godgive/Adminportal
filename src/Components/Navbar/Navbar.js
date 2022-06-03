import React from 'react'
import '../Navbar/Navbar.css'
import Logo from '../../Images/Logo.png'
import {FcHome, FcBusinessman, FcCollaboration, FcCurrencyExchange} from 'react-icons/fc'
import {Link} from 'react-router-dom'

function Navbar() {  
    return (
        <div className='navbarContents'>
            <div className='smallScreenDisplay'>

                <div className='image-menus'>
                    <div className='navbarLogo'>
                        <img src={Logo} alt='' />
                    </div>
                    <ul className='navbarList'>
                        <Link to='/'><li className='dashboard'><FcHome /> Dashboard </li></Link>
                        <Link to='/teams'><li className='team'><FcBusinessman /> Team </li></Link>
                        <Link to='/products'><li className='products'><FcCurrencyExchange /> Products </li></Link>
                        <Link to='/clients'><li className='clients'><FcCollaboration /> Clients </li></Link>
                    </ul>
                </div>

                <div className='usersInfor'>
                    <img src={Logo} alt='' />
                    <p className='userName'>Users Name</p>
                    <p className='userEmail'>username@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
export default Navbar;