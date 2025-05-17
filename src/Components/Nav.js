import './Nav.css'
import { HashLink as Link } from 'react-router-hash-link'
import logo from "../icons_assets/logo.png";
function Nav() {

    return(
        <>
            <header className='header'>
        <img
    src={logo}
     alt="Restaurant food"
      style={{}}
      className='logo'
     />
    
     <nav id="home" className='nav'>
        <Link smooth to="/#home">Home</Link>
        <Link smooth to="/#about">About</Link>
        <Link smooth to="/#Menu">Menu</Link>
        <Link to="/booking">Reservations</Link> 
        <Link smooth to="/#order-online">Order Online</Link>
        <Link to="Login">Login</Link>
        </nav>
        </header>
        </>
    )
};


export default Nav;