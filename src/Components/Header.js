import './Header.css'

import Nav from "./Nav.js"
import resturantFood from '../icons_assets/restauranfood.jpg'

function Header() {
  return (
    <>


    <section  className='Header-container'>
          <section className='header-text'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>we are a family owned<br />
                Mediterranean restaurant,<br/>
                focused on traditional<br />
                recipes served with a modern twist</p>
                <button>reserve a table</button>
            </section>
                <img
                src={resturantFood}
                alt='resturantFood' />
    </section>
    </>
  );
}

export default Header;
