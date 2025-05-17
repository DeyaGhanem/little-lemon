import { useState } from 'react'
import {fetchAPI, submitAPI} from '../api'
function BookingForm({ availableTimes, dispatch, submitForm}) {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [number, setNumber] = useState(1);
    const [ocassion, setOcassion] = useState('');  

const isFormValid = date !== '' && time !== '' && number >= 1 && number <= 10 && ocassion !== '' ;

const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
    date,
    time,
    number,
    ocassion
};

submitForm(formData);

   const success = submitAPI(formData);
if(success) {
    return true;
} else {
    alert('form submitted failed');
}


}

const validate = (e) => {
    e.preventDefault();
    
}



    return(
        <>
        <h1 className='form-text'>Book Your Reservation</h1>
        <div className='booking-container'>
            <form className='reservation-form' onSubmit={handleSubmit}>
                <div className='names'>
                    <label htmlFor="first-name">First Name</label>
                    <label htmlFor="last-name">Last Name</label>
                    <input type='text' id='first-name' aria-required="true" required></input>
                    <input type="text" id="last-name" aria-required="true" required></input>
                </div>
                <label htmlFor="res-date">Choose a date</label>
                <input 
                type="date"
                 id="res-date"
                value={date}
                onChange={(e) => {
                    const selectedDate = e.target.value;
                    setDate(selectedDate);
                    dispatch({type: 'UPDATE_TIMES', payload: new Date(selectedDate)})
                }}
                aria-required="true" 
                required
                 />
                <label htmlFor="res-time">Choose time</label>
                <select 
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                >
                       {availableTimes.length > 0 ? (
                        availableTimes.map((timeOption) => (
                            <option key={timeOption} value={timeOption}>{timeOption}</option>
                        ))
                       ) : (
                        <option disabled>No available Times</option>
                       )}
                </select>
                 <label htmlFor="guest">Number of guests</label>
                 <input 
                 type="number" 
                 id="guest" 
                 placeholder="1"
                 min="1"
                 max="10" 
                 value={number}
                 onChange={(e) => setNumber(e.target.value)}
                 aria-required="true"
                 />
                 <label htmlFor="occassion">Ocassion</label>
                 <select 
                 id="occassion"
                 value={ocassion}
                 onChange={(e) => setOcassion(e.target.value)}
                 aria-required="true"
                 >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                 </select>
                <input id='submit' type="submit" value="Make Your reservation" disabled={!isFormValid} />

            </form>
        </div>
        </>
    )
}

export default BookingForm;