import greekSalad from '../icons_assets/greek salad.jpg'
import lemonDessert from '../icons_assets/lemon dessert.jpg'
import Bruchetta from '../icons_assets/Screenshot_12-5-2025_124440_.jpeg'
function OrderOnline() {
    return(
        <>
       <section id='order-online' className="main-container">
        <section className="specials">
                    <h1>This weeks specials!</h1>
        
                    <button>Online Menu</button>
                    </section>
        
                    <section className="weeks-specials">
        
                        <div className='first-special'>
                            <img src={greekSalad} alt='greekSalad' />
                            <figcaption>
                                <h4>greekSalad <span className='price'>$12.99</span></h4>
                                <p>A Greek salad, also known as Horiatiki (meaning "village salad"), is a fresh and vibrant dish from Greece, typically made with simple, high-quality ingredients.</p>
                            </figcaption>
                            <footer><a href='order'>Order a delivery &nbsp;<i class="fa-solid fa-motorcycle"></i></a>  </footer>
                        </div>
        
                        <div className='second-special'>
                             <img src={lemonDessert}  alt='lemonDessert'/>
                             <figcaption>
                                <h4>lemonDessert <span className='price'>$12.99</span></h4> 
                                <p>A lemon dessert is typically a sweet treat that highlights the bright, tangy flavor of lemons, balanced by sweetness</p>
                            </figcaption>
                            <footer><a href='order'>Order a delivery &nbsp;<i class="fa-solid fa-motorcycle"></i></a> </footer>
                        </div>
        
                        <div className='third-special'>
                            <img src={Bruchetta} alt='Bruchetta'/>
                            <figcaption>
                                <h4>Bruchetta <span className='price'>$12.99</span></h4> 
                                <p>Bruschetta is a classic Italian appetizer that features grilled or toasted slices of rustic bread topped with a variety of fresh ingredients.</p>
                            </figcaption>
                            <footer><a href='order'>Order a delivery &nbsp;<i class="fa-solid fa-motorcycle"></i></a> </footer>
                        </div>
                    </section>
        </section> 
        </>
    )
}

export default OrderOnline;