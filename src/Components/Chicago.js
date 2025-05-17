import image1 from '../icons_assets/restaurant chef B.jpg'
import image2 from '../icons_assets/restaurant.jpg'

function Chicago() {
    return(
        <>
         <section id='about' className='description'>
                        <section className='description-text'>
                            <h1>Little Lemon</h1>
                            <span>Chicago</span>
                            <p>Amet minim mollit non deserunt<br /> ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim<br /> velit mollit. Exercitation veniam<br /> consequat sunt nostrud amet.<br />
                                Amet minim mollit non deserunt<br /> ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim<br /> velit mollit. </p>
                        </section>
                        <section className='two-images'>
                            <img src={image1} alt='image1' />
                            <img src={image2} alt="image2" />
                        </section>
                    </section>
        </>
    )
}

export default Chicago