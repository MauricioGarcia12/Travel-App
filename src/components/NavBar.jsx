import React,{Fragment,useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import Button from './Button'

const NavBar = () => {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    //displays on mobile

    const showButton = () =>{
        if(window.innerWidth <=900){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }
    window.addEventListener('resize',showButton)
    
    return ( 
        <Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">

                            <Link to='/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                            Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/products' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                            Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                            Sign Up
                            </Link>
                        </li>
                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </Fragment>
     );
}
 
export default NavBar;