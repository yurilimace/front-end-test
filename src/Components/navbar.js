import React from 'react'
import logo_img from '../assets/06-LOGO.png'
const Navbar =() =>{
    return(
        <nav className='navbar'>
            <div>
                <img src={logo_img} className="log-img" alt=''></img>
            </div>
            
        </nav>
    )
}

export default Navbar