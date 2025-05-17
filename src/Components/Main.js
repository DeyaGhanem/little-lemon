import {Routes, Route} from 'react-router-dom';
import { useReducer, useState } from 'react'
import BookingForm from './BookingForm'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {fetchAPI, submitAPI} from '../api'
import { useNavigate } from "react-router-dom";
import ConfirmedBooking from './ConfirmedBooking'

    
      export const initializeTimes = () => {
                const today = new Date();
                return fetchAPI(today);
        };

       export const updateTimes = (state, action) => {
            const selectedData = new Date(action.payload);
            return fetchAPI(selectedData)
        }

        
function Main({showForm = false}) {

     const navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(updateTimes, [], () => initializeTimes());

      const submitForm = (formData) => {

        localStorage.setItem("bookingData", JSON.stringify(formData));
            const success = submitAPI(formData)

            if(success) {
                navigate('/confirmation')
            }
        }
        const savedData = JSON.parse(localStorage.getItem("bookingData"));
        console.log(savedData);
return(
    <>
        
        {showForm && (
  <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm} 
      />
        )}
    </>
);
};

export default Main;