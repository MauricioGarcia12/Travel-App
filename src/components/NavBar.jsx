import React,{Fragment,useState} from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    const [click,setClick]=useState(false);

    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);
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

                            <Link to='/products' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                            Products
                            </Link>

                            <Link to='/sign-up' 
                            className='nav-links' 
                            onClick={closeMobileMenu}
                            >
                            Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default NavBar;