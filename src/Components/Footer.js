import footImage from '../icons_assets/footlogo.png'
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
    return(
        <>
            <footer className="foot">
                <img src={footImage}
                alt='foot-logo'
                />
            
                <div className='Doormat'>
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><Link smooth to="#home">Home</Link></li>
                               <li>  <Link smooth to="/#about">About</Link></li>
                                <li> <Link smooth to="Menu">Menu</Link></li>
                                <li> <Link smooth to="#Reservations">Reservations</Link> </li>
                                <li> <Link smooth to="#order-online">Order Online</Link></li>
                                <li> <Link smooth to="Login">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li><a href='adress'>Adress</a></li>
                        <li><a href='About'>Phone number</a></li>
                        <li><a href='Menu'>email</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Socail Media Links</h3>
                    <ul>
                        <li><a href='instagram'>Instagram</a></li>
                        <li><a href='LinkedIn'>LinkedIn</a></li>
                        <li><a href='email'>Email</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
};

export default Footer;
