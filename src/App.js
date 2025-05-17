import './App.css';
import Header from "./Components/Header.js"
import Main from "./Components/Main.js"
import Footer from "./Components/Footer.js"
import Chicago from "./Components/Chicago.js"
import OrderOnline from './Components/order-online.js'
import Nav from './Components/Nav.js'
import { Routes, Route, useNavigate } from 'react-router-dom'
import BookingForm from './Components/BookingForm.js'
import { useReducer } from 'react'
import { initializeTimes , updateTimes } from './Components/Main.js';
import ConfirmedBooking from './Components/ConfirmedBooking.js';
import { submitAPI } from './api.js';
import Ratings from './Components/Ratings.js';

function App() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes)
  return (
    <div className='page-container'>
      <main className='content-wrap'>
 <Nav />
      <Routes> 
        <Route path="/" element={
          <>
      <Header />
      <OrderOnline />
      <Ratings />
      <Main />
      <Chicago />
      </>
        } />
        <Route path="/booking" element={
          <>
          <Main showForm={true} />
         </>
        } />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </main>
       
  <Footer />
    </div>
  );
}

export default App;
