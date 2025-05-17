import mario from '../icons_assets/Mario and Adrian A.jpg'
import bob from '../icons_assets/bob.jpg'
import jake from '../icons_assets/jake.jpg'
import rami from '../icons_assets/rami.jpg'
function Ratings() {
    return (
        <section className="main-container">
                    <h1 className='ratings-label'>Ratings</h1>

                    <section className='ratings'>
                        <div>
                            <h5>Rating</h5>
                            <img src={mario} alt='rating' /> <span className='name'>Mario</span>
                            <fieldset>
                                <p>Review text</p>
                            </fieldset>
                        </div>

                        <div>
                            <h5>Rating</h5>
                            <img src={jake} alt='rating' /> <span className='name'>Jake</span>
                            <fieldset>
                                <p>Review text</p>
                            </fieldset>
                        </div>

                        <div>
                            <h5>Rating</h5>
                            <img src={bob} alt='rating' /> <span className='name'>Bob</span>
                            <fieldset>
                                <p>Review text</p>
                            </fieldset>
                        </div>

                        <div>
                            <h5>Rating</h5>
                            <img src={rami} alt='rating' /> <span className='name'>Rami</span>
                            <fieldset>
                                <p>Review text</p>
                            </fieldset>
                        </div>
                    </section>


        </section>
    )
}

export default Ratings;